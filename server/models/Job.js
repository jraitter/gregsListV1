import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    hours: { type: Number, required: true },
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: Number, required: true, default: 1 }
  },
  { timestamps: true, toJSON: { virtuals: true } }  //allows use _id: and id, the will be same value.
);

export default Job;