import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import "./Feed.css";
import InputOption from "./InputOption";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={InsertPhotoIcon} title="Photo" color="#70B5F9" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
