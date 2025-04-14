import { Router } from "express";
import { addOrderDetail } from "../controllers/order_detail.controller.js";

const router = Router();

router.post("/", addOrderDetail);

export default router;