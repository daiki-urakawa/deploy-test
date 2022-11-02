import { PrismaClient } from "@roaster_log/prisma";
import { Router } from "express";
import { createEndpointFromFilePath } from "../../../utils/createEndpointFromFilePath";

export const router = Router();
const route = router.route(createEndpointFromFilePath(__filename));
export const prismaClient = new PrismaClient({ log: ["warn", "error"] });

route.get(async (_, res) => {
  console.log("app");

  const users = await prismaClient.user.findMany();
  return res.json(users);
});
