import { NextFunction, Request, Response } from "express";
import developmentGroupService from "../../services/development-group-service";

export async function getAllGroups(request: Request, response: Response, next: NextFunction) {
    try {
        const groups = await developmentGroupService.getAllGroups();
        response.json(groups);
    }
    catch (err: any) {
        next(err);
    }
}