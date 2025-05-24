import { Router } from "express";
import userRouter from "./routes/users.mjs";
import productsRouter from "./routes/products.mjs";

const router = Router();

router.use(userRouter);
router.use(productsRouter);

export default router;
