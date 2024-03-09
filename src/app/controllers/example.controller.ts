import { Request, Response } from "express";
import { Example, ExampleAttributes } from "../models/Example";
import { handleHttp } from "../../utils";

const getItems = async (_req: Request, res: Response) => {
  try {
    const examples = await Example.findAll();
    res.send(examples);
  } catch (error) {
    console.log(error);
    handleHttp(res, "Error to get items");
  }
};

const postItem = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const exampleData: ExampleAttributes = { name, description };

    const example = await Example.create(exampleData);
    
    res.send(example);

  } catch (error) {
    console.log(error);
    handleHttp(res, "Error to create item");
  }
};

const getItemById = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    const example = await Example.findByPk(id);
    res.send(example);
  } catch (error) {
    console.log(error);
    handleHttp(res, "Error to get item by id");
  }
};

const putItem = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    const { name, description } = _req.body;
    const example = await Example.findByPk(id);
    if (example) {
      example.name = name;
      example.description = description;
      await example.save();
      res.send(example);
    } else {
      handleHttp(res, "Item not found");
    }
  } catch (error) {
    console.log(error);
    handleHttp(res, "Error to update item");
  }
};

const deleteItem = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    const example = await Example.findByPk(id);
    if (example) {
      await example.destroy();
      res.send({ message: "Item deleted" });
    } else {
      handleHttp(res, "Item not found");
    }
  } catch (error) {
    console.log(error);
    handleHttp(res, "Error to delete item");
  }
};

export { getItems, postItem, getItemById, putItem, deleteItem };
