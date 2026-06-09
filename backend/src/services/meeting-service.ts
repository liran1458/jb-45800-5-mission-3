import MeetingModel from "../models/meeting-model";

class MeetingService {

    public async getMeetingsByGroup(groupId: string): Promise<MeetingModel[]> {
        return MeetingModel.findAll({
            where: { developmentGroupId: groupId }
        });
    }

    public async getOneMeeting(meetingId: string): Promise<MeetingModel> {
        return MeetingModel.findByPk(meetingId);
    }

    public async addMeeting(meeting: Partial<MeetingModel>): Promise<MeetingModel> {
        return MeetingModel.create(meeting);
    }
    public async updateMeeting(meeting: Partial<MeetingModel>): Promise<MeetingModel | null> {

        await MeetingModel.update(meeting, {
            where: { id: meeting.id }
        });

        return MeetingModel.findByPk(meeting.id);
    }

    public async deleteMeeting(meetingId: string): Promise<number> {
        return MeetingModel.destroy({
            where: { id: meetingId }
        });
    }
}

const meetingService = new MeetingService();

export default meetingService;