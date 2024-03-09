import { Router } from "express";
import {
  getItems,
  postItem,
  getItemById,
  putItem,
  deleteItem,
} from "../app/controllers";

const router = Router();

router.get("/", getItems);

router.post("/", postItem);

router.get("/:id", getItemById);

router.put("/:id", putItem);

router.delete("/:id", deleteItem);

export default router;
