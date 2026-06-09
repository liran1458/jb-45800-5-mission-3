import { Route, Routes } from "react-router-dom";
import MeetingsLi from "../../meetings/meetings-list/MeetingsLi";
import AddMeeting from "../../meetings/add-meetings/AddMeeting";
import UpdateMeeting from "../../meetings/update-meeting/UpdateMeeting";

export default function Main() {

    return (
        <main>
            <Routes>
                <Route path="/" element={<MeetingsLi />} />
                <Route path="/meetings" element={<MeetingsLi />} />
                <Route path="/meetings/new" element={<AddMeeting />} />
                <Route path="/meetings/edit/:meetingId" element={<UpdateMeeting />} />
            </Routes>
        </main>
    );
}