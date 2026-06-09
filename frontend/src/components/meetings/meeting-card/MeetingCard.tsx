import { NavLink } from "react-router-dom";
import type MeetingModel from "../../../Models/MeetingModel";
import "./MeetingCard.css";

type MeetingCardProps = {
    meeting: MeetingModel;
    onDelete: (meetingId: string) => void;
};

export default function MeetingCard(props: MeetingCardProps) {

    const isFutureMeeting =
        new Date(props.meeting.startDateTime) > new Date();

    const durationInMinutes =
        Math.round(
            (
                new Date(props.meeting.endDateTime).getTime() -
                new Date(props.meeting.startDateTime).getTime()
            ) / 1000 / 60
        );

    return (
        <div className={isFutureMeeting ? "MeetingCard future" : "MeetingCard past"}>

            <h3>{props.meeting.description}</h3>

            <p><span>Room:</span> {props.meeting.room}</p>

            <p>
                <span>Start:</span>{" "}
                {new Date(props.meeting.startDateTime).toLocaleString()}
            </p>

            <p>
                <span>End:</span>{" "}
                {new Date(props.meeting.endDateTime).toLocaleString()}
            </p>

            <p><span>Duration:</span> {durationInMinutes} minutes</p>

            <div className="buttons">
                <NavLink to={`/meetings/edit/${props.meeting.id}`}>
                    Edit
                </NavLink>

                <button onClick={() => props.onDelete(props.meeting.id)}>
                    Delete
                </button>
            </div>

        </div>
    );
}