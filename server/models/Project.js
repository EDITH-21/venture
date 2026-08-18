import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Project slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    shortDescription: {
      type: String,
      required: [true, 'Short description is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Detailed description is required'],
    },
    thumbnail: {
      type: String,
      default: '',
    },
    images: {
      type: [String],
      default: [],
    },
    technologies: {
      type: [String],
      default: [],
    },
    client: {
      type: String,
      default: 'Confidential Client',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.index({ published: 1, featured: 1 });

const Project = mongoose.model('Project', projectSchema);
export default Project;
