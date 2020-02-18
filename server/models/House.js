import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    year: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, required: false },
    description: { type: String, required: false },
    price: { type: Number, required: true, default: 1 },
    imgUrl: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }  //allows use _id: and id, the will be same value.
);

export default House;