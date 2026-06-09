import Joi from "joi";

export const meetingsPerGroupValidator = Joi.object({
    groupId: Joi.string().uuid().required()
});

export const oneMeetingValidator = Joi.object({
    meetingId: Joi.string().uuid().required()
});

export const newMeetingValidator = Joi.object({
    developmentGroupId: Joi.string().uuid().required(),
    startDateTime: Joi.date().greater("now").required(),
    endDateTime: Joi.date().greater(Joi.ref("startDateTime")).required(),
    description: Joi.string().required(),
    room: Joi.string().required()
});

export const updateMeetingValidator = Joi.object({
    developmentGroupId: Joi.string().uuid().required(),
    startDateTime: Joi.date().required(),
    endDateTime: Joi.date().greater(Joi.ref("startDateTime")).required(),
    description: Joi.string().required(),
    room: Joi.string().required()
});

export const deleteMeetingValidator = Joi.object({
    meetingId: Joi.string().uuid().required()
});
export const updateMeetingParamsValidator = Joi.object({
    meetingId: Joi.string().uuid().required()
});