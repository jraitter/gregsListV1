import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true, default: 1 },
    imgUrl: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }  //allows use _id: and id, the will be same value.
);

export default Car;