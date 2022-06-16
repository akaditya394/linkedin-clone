import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
      e.preventDefault();
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={InsertPhotoIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map((post)=> (
          <Post />
      ))}
      <Post
        name="Aditya Kumar"
        description="This is a test"
        message="WOW this worked"
      />
    </div>
  );
}

export default Feed;
