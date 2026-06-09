import { useEffect, useState } from "react";
import type DevelopmentGroupModel from "../../../Models/DevelopmentGroupModel";
import type MeetingModel from "../../../Models/MeetingModel";
import developmentGroupsService from "../../../Services/DevelopmentGroupsService";
import meetingsService from "../../../Services/MeetingsService";
import MeetingCard from "../meeting-card/MeetingCard";
import "./MeetingsLi.css";


export default function MeetingsLi() {

    const [groups, setGroups] = useState<DevelopmentGroupModel[]>([]);
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);
    const [selectedGroupId, setSelectedGroupId] = useState("");

    useEffect(() => {
        developmentGroupsService
            .getAllGroups()
            .then(setGroups)
            .catch(alert);
    }, []);

    async function handleGroupChange(
        args: React.ChangeEvent<HTMLSelectElement>
    ) {

        const groupId = args.target.value;

        setSelectedGroupId(groupId);

        loadMeetings(groupId);
    }

    async function loadMeetings(groupId: string) {

        try {

            const meetings =
                await meetingsService.getMeetingsByGroup(groupId);

            setMeetings(meetings);

        }
        catch (err: any) {
            alert(err.message);
        }
    }

    async function deleteMeeting(meetingId: string) {

        const ok =
            window.confirm(
                "Are you sure you want to delete this meeting?"
            );

        if (!ok) return;

        try {

            await meetingsService.deleteMeeting(meetingId);

            setMeetings(
                meetings.filter(meeting =>
                    meeting.id !== meetingId
                )
            );

        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="MeetingsLi">

            <h2>Development Meetings</h2>



            <select
                value={selectedGroupId}
                onChange={handleGroupChange}
            >
                <option value="" disabled>
                    Select Development Group
                </option>

                {groups.map(group =>
                    <option
                        key={group.id}
                        value={group.id}
                    >
                        {group.name}
                    </option>
                )}
            </select>

            {
                selectedGroupId &&
                meetings.length === 0 &&
                (
                    <p className="no-meetings">
                        No meetings found for this development group.
                    </p>
                )
            }

            <div className="meetings-list">

                {meetings.map(meeting =>
                    <MeetingCard
                        key={meeting.id}
                        meeting={meeting}
                        onDelete={deleteMeeting}
                    />
                )}

            </div>

        </div>
    );
}