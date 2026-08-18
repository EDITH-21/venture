import mongoose from 'mongoose';

const ventureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Venture title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Venture slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    status: {
      type: String,
      enum: ['Draft', 'Coming Soon', 'Published'],
      default: 'Coming Soon',
    },
    tags: {
      type: [String],
      default: ['R&D', 'AI & Core Systems'],
    },
    order: {
      type: Number,
      default: 0,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

ventureSchema.index({ published: 1, order: 1 });

const Venture = mongoose.model('Venture', ventureSchema);
export default Venture;
