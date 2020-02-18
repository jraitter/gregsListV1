import mongoose from "mongoose";
import Job from "../models/Job.js";

// the repository is the connection to your DB at that collection
const _repository = mongoose.model("Job", Job);

class JobsService {
  async getAll() {
    return await _repository.find({}); // this makes the call to the DB
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async getById(id) {
    return await _repository.findById(id)
  }

  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
}


const jobsService = new JobsService();
export default jobsService;
