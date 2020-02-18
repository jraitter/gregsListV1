import mongoose from "mongoose";
import House from "../models/House.js";

// the repository is the connection to your DB at that collection
const _repository = mongoose.model("House", House);

class HousesService {
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

const housesService = new HousesService();
export default housesService;
