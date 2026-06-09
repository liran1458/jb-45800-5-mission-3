import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import type DevelopmentGroupModel from "../../../Models/DevelopmentGroupModel";
import type MeetingModel from "../../../Models/MeetingModel";

import developmentGroupsService from "../../../Services/DevelopmentGroupsService";
import meetingsService from "../../../Services/MeetingsService";

import "./UpdateMeeting.css";

export default function UpdateMeeting() {

    const navigate = useNavigate();
    const params = useParams();

    const [groups, setGroups] = useState<DevelopmentGroupModel[]>([]);

    const {
        register,
        handleSubmit,
        reset,
        formState
    } = useForm<MeetingModel>();

    function formatDateForInput(date: string): string {
        return new Date(date).toISOString().slice(0, 16);
    }

    useEffect(() => {

        developmentGroupsService
            .getAllGroups()
            .then(setGroups)
            .catch(alert);

        meetingsService
            .getOneMeeting(params.meetingId!)
            .then(meeting => {

                meeting.startDateTime =
                    formatDateForInput(meeting.startDateTime);

                meeting.endDateTime =
                    formatDateForInput(meeting.endDateTime);

                reset(meeting);
            })
            .catch(alert);

    }, []);

    async function send(meeting: MeetingModel) {

        try {

            meeting.id = params.meetingId!;

            await meetingsService.updateMeeting(meeting);

            alert("Meeting updated successfully");

            navigate("/meetings");

        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="UpdateMeeting">

            <form onSubmit={handleSubmit(send)}>

                <h2>Update Meeting</h2>

                <label>Development Group</label>

                <select
                    {...register("developmentGroupId", {
                        required: true
                    })}
                >
                    {groups.map(group =>
                        <option key={group.id} value={group.id}>
                            {group.name}
                        </option>
                    )}
                </select>

                <span>
                    {formState.errors.developmentGroupId &&
                        "Group is required"}
                </span>

                <label>Start Time</label>

                <input
                    type="datetime-local"
                    {...register("startDateTime", {
                        required: true
                    })}
                />

                <span>
                    {formState.errors.startDateTime &&
                        "Start time is required"}
                </span>

                <label>End Time</label>

                <input
                    type="datetime-local"
                    {...register("endDateTime", {
                        required: true
                    })}
                />

                <span>
                    {formState.errors.endDateTime &&
                        "End time is required"}
                </span>

                <label>Description</label>

                <textarea
                    {...register("description", {
                        required: true
                    })}
                />

                <span>
                    {formState.errors.description &&
                        "Description is required"}
                </span>

                <label>Room</label>

                <input
                    type="text"
                    {...register("room", {
                        required: true
                    })}
                />

                <span>
                    {formState.errors.room &&
                        "Room is required"}
                </span>

                <button>
                    Update Meeting
                </button>

                <button
                    type="button"
                    className="cancel-button"
                    onClick={() => navigate("/meetings")}
                >
                    Cancel
                </button>

            </form>

        </div>
    );
}