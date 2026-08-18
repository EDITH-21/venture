import mongoose from 'mongoose';

let mongodInstance = null;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/vanguard_digital';

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2500,
    });
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
    return conn;
  } catch (primaryErr) {
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
