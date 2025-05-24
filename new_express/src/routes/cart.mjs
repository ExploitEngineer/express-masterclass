import { Router } from "express";

const router = Router();

router.post("/api/cart", (request, response) => {
  if (!request.session.user) return response.sendStatus(401);
  const { body: item } = request;

  const { cart } = request.session;
  if (cart) {
    cart.push(item);
  } else {
    request.session.cart = [item];
  }
  return response.status(201).send(item);
});

router.get("api/cart", (request, response) => {
  if (!request.session.usr) return response.sendStatus(401);
  return response.send(request.session.cart ?? []);
});

export default router;
