import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from 'react-flip-move';

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [db]);

  console.log(posts);

  const sendPost = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.profilePic || user?.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    console.log("New doc added with ID", docRef.id);
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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
      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            name={post.data().name}
            description={post.data().description}
            message={post.data().message}
            photoUrl={post.data().photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
