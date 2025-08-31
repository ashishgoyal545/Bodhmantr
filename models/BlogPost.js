// models/BlogPost.js

import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "/placeholder.jpg",
    },
  },
  { timestamps: true }
);

// Avoid overwrite on hot reload
export default mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
