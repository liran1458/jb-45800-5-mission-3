import { Router } from "express";
import bodyValidation from "../middlewares/body-validation";
import paramsValidation from "../middlewares/params-validation";

import {
    deleteMeetingValidator,
    meetingsPerGroupValidator,
    newMeetingValidator,
    oneMeetingValidator,
    updateMeetingParamsValidator,
    updateMeetingValidator
} from "../controllers/meetings/validator";

import {
    deleteMeeting,
    getOneMeeting,
    meetingsPerGroup,
    newMeeting,
    updateMeeting
} from "../controllers/meetings/controller";

const meetingsRouter = Router();

meetingsRouter.get(
    "/group/:groupId",
    paramsValidation(meetingsPerGroupValidator),
    meetingsPerGroup
);

meetingsRouter.get(
    "/:meetingId",
    paramsValidation(oneMeetingValidator),
    getOneMeeting
);

meetingsRouter.post(
    "/",
    bodyValidation(newMeetingValidator),
    newMeeting
);

meetingsRouter.patch(
    "/:meetingId",
    paramsValidation(updateMeetingParamsValidator),
    bodyValidation(updateMeetingValidator),
    updateMeeting
);

meetingsRouter.delete(
    "/:meetingId",
    paramsValidation(deleteMeetingValidator),
    deleteMeeting
);

export default meetingsRouter;