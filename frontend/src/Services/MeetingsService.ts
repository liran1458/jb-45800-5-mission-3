import axios from "axios";
import type MeetingModel from "../Models/MeetingModel";

class MeetingsService {

    public async getMeetingsByGroup(groupId: string): Promise<MeetingModel[]> {

        const response = await axios.get<MeetingModel[]>(
            `http://localhost:3000/meetings/group/${groupId}`
        );

        return response.data;
    }

    public async getOneMeeting(meetingId: string): Promise<MeetingModel> {

        const response = await axios.get<MeetingModel>(
            `http://localhost:3000/meetings/${meetingId}`
        );

        return response.data;
    }

    public async addMeeting(meeting: MeetingModel): Promise<MeetingModel> {

        const response = await axios.post<MeetingModel>(
            "http://localhost:3000/meetings",
            meeting
        );

        return response.data;
    }

    public async updateMeeting(meeting: MeetingModel): Promise<MeetingModel> {

    const meetingId = meeting.id;

    const meetingToSend = {
        developmentGroupId: meeting.developmentGroupId,
        startDateTime: meeting.startDateTime,
        endDateTime: meeting.endDateTime,
        description: meeting.description,
        room: meeting.room
    };

    const response = await axios.patch<MeetingModel>(
        `http://localhost:3000/meetings/${meetingId}`,
        meetingToSend
    );

    return response.data;
}

    public async deleteMeeting(meetingId: string): Promise<void> {

        await axios.delete(
            `http://localhost:3000/meetings/${meetingId}`
        );
    }

}

const meetingsService = new MeetingsService();

export default meetingsService;