import mongoose from 'mongoose';

let mongodInstance = null;

export const connectDB = async () => {
  // If already connected, reuse the connection (important for serverless warm starts)
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/vanguard_digital';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
    return conn;
  } catch (primaryErr) {
    // In production (Vercel), don't try in-memory server — requires MongoDB Atlas
    if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
      console.error(`[MongoDB] Connection failed: ${primaryErr.message}`);
      console.error('[MongoDB] Please set MONGO_URI to your MongoDB Atlas connection string in Vercel environment variables.');
      throw primaryErr;
    }

    console.warn(`[MongoDB] Direct connection to ${uri} failed: ${primaryErr.message}`);
    console.log('[MongoDB] Initializing standalone local database instance (this may take a moment on first boot)...');
    
    try {
      const { MongoMemoryServer } = await import('mongodb-memory-server');
      mongodInstance = await MongoMemoryServer.create({
        instance: {
          dbName: 'vanguard_digital',
        },
        spawn: {
          timeout: 120000,
        },
      });
      const inMemUri = mongodInstance.getUri();
      const inMemConn = await mongoose.connect(inMemUri);
      console.log(`[MongoDB] Connected to standalone database instance at: ${inMemUri}`);
      return inMemConn;
    } catch (fallbackErr) {
      console.error(`[MongoDB] Failed to initialize fallback database: ${fallbackErr.message}`);
      process.exit(1);
    }
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    if (mongodInstance) {
      await mongodInstance.stop();
    }
  } catch (error) {
    console.error('Error disconnecting DB:', error);
  }
};
