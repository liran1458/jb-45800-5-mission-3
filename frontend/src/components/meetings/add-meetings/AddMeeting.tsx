import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type DevelopmentGroupModel from "../../../Models/DevelopmentGroupModel";
import type MeetingModel from "../../../Models/MeetingModel";

import developmentGroupsService from "../../../Services/DevelopmentGroupsService";
import meetingsService from "../../../Services/MeetingsService";

import "./AddMeeting.css";

export default function AddMeeting() {

    const navigate = useNavigate();

    const [groups, setGroups] =
        useState<DevelopmentGroupModel[]>([]);

    const {
        register,
        handleSubmit,
        formState
    } = useForm<MeetingModel>();

    useEffect(() => {

        developmentGroupsService
            .getAllGroups()
            .then(setGroups)
            .catch(alert);

    }, []);

    async function send(meeting: MeetingModel) {

        try {

            await meetingsService.addMeeting(meeting);

            alert("Meeting added successfully");

            navigate("/meetings");

        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddMeeting">

            <form onSubmit={handleSubmit(send)}>

                <h2>Add Meeting</h2>

                <label>
                    Development Group
                </label>

                <select
                    defaultValue=""
                    {...register(
                        "developmentGroupId",
                        {
                            required: true
                        }
                    )}
                >
                    <option value="" disabled>
                        Select Group
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

                <span>
                    {formState.errors.developmentGroupId &&
                        "Group is required"}
                </span>

                <label>Start Time</label>

                <input
                    type="datetime-local"
                    {...register(
                        "startDateTime",
                        {
                            required: true
                        }
                    )}
                />

                <span>
                    {formState.errors.startDateTime &&
                        "Start time is required"}
                </span>

                <label>End Time</label>

                <input
                    type="datetime-local"
                    {...register(
                        "endDateTime",
                        {
                            required: true
                        }
                    )}
                />

                <span>
                    {formState.errors.endDateTime &&
                        "End time is required"}
                </span>

                <label>Description</label>

                <textarea
                    {...register(
                        "description",
                        {
                            required: true
                        }
                    )}
                />

                <span>
                    {formState.errors.description &&
                        "Description is required"}
                </span>

                <label>Room</label>

                <input
                    type="text"
                    {...register(
                        "room",
                        {
                            required: true
                        }
                    )}
                />

                <span>
                    {formState.errors.room &&
                        "Room is required"}
                </span>

                <button>
                    Add Meeting
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