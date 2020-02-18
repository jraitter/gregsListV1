import express from "express";
import carsService from "../services/CarsService.js";

export default class CarsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await carsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let car = await carsService.getById(req.params.id)
      res.send(car)
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await carsService.update(req.params.id, req.body)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await carsService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await carsService.delete(req.params.id);
      res.send("car deleted")
    } catch (error) {
      next(error);
    }
  }
}
