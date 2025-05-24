import { Router } from "express";
import { mockUsers } from "../utils/constants.mjs";

const router = Router();

router.post("/api/auth", (request, response) => {
  const {
    body: { username, password },
  } = request;
  console.log(username, password);
  const findUser = mockUsers.find((user) => {
    return user.username === username;
  });
  if (!findUser || findUser.password !== password)
    return response.status(401).send({ msg: "BAD CREDENTIALS" });

  request.session.user = findUser;
  return response.status(200).send(findUser);
});

router.get("/api/auth/status", (request, response) => {
  request.sessionStore.get(request.sessionID, (err, session) => {
    console.log(session);
  });
  return request.session.user
    ? response.status(200).send(request.session.user)
    : response.status(401).send({ msg: "Not Authenticated" });
});

export default router;
