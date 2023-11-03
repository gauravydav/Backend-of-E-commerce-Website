import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: String,
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.isObjectIdOrHexString,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "delivered"],
    },
  },
  { timestamps: true }
);
export default mongoose.model("Order", orderSchema);
