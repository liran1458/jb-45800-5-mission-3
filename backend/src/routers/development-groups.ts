import { Router } from "express";
import { getAllGroups } from "../controllers/development-groups/controller";

const developmentGroupsRouter = Router();

developmentGroupsRouter.get("/", getAllGroups);

export default developmentGroupsRouter;