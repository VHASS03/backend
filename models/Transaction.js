import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
    },

    userEmail: {
      type: String,
    },

    courseID: {
      type: mongoose.Schema.Types.ObjectId,
    },

    workshopID: {
      type: mongoose.Schema.Types.ObjectId,
    },

    transactionID: {
      type: String,
    },

    merchantOrderID: {
      type: String,
      required: true,
    },

    transactionAmount: {
      type: Number,
    },

    transactionType: {
      type: String,
    },

    transactionStatus: {
      type: String,
      enum: ["PENDING", "COMPLETED", "FAILED"],
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// JWT token generation removed in favor of session-based authentication
export const Transaction = mongoose.model("Transaction", schema);
