import { NextFunction, Request, Response } from "express";
import MeetingModel from "../../models/meeting-model";
import meetingService from "../../services/meeting-service";

export async function meetingsPerGroup(request: Request, response: Response, next: NextFunction) {
    try {
        const groupId = request.params.groupId as string;
        const meetings = await meetingService.getMeetingsByGroup(groupId);
        response.json(meetings);
    }
    catch (err: any) {
        next(err);
    }
}

export async function getOneMeeting(request: Request, response: Response, next: NextFunction) {
    try {
        const meetingId = request.params.meetingId as string;
        const meeting = await meetingService.getOneMeeting(meetingId);
        response.json(meeting);
    }
    catch (err: any) {
        next(err);
    }
}

export async function newMeeting(request: Request, response: Response, next: NextFunction) {
    try {
        const addedMeeting = await meetingService.addMeeting(request.body);
        response.status(201).json(addedMeeting);
    }
    catch (err: any) {
        next(err);
    }
}

export async function updateMeeting(request: Request, response: Response, next: NextFunction) {
    try {
        request.body.id = request.params.meetingId as string;

        const updatedMeeting = await meetingService.updateMeeting(request.body);

        response.json(updatedMeeting);
    }
    catch (err: any) {
        next(err);
    }
}

export async function deleteMeeting(request: Request, response: Response, next: NextFunction) {
    try {
        const meetingId = request.params.meetingId as string;

        const rowsDeleted = await meetingService.deleteMeeting(meetingId);

        if (rowsDeleted === 0) {
            response.status(404).send("Meeting not found");
            return;
        }

        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
}