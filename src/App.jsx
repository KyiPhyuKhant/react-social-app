import { useState } from "react";
import { Avatar, Button, Drawer } from "@mui/material";
import Header from "./Header.jsx";
import postImage from "./assets/rooftop-gathering.png";
import "./styles.css";

function App() {
  const [liked, setLiked] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Header onMenuClick={() => setDrawerOpen(true)} />

      <Drawer open={drawerOpen} onClose={closeDrawer}>
        <div className="drawer-menu">
          <h2>Menu</h2>
          <button className="active" onClick={closeDrawer}>Home</button>
          <button onClick={closeDrawer}>Friends</button>
          <button onClick={closeDrawer}>Messages</button>
          <button onClick={closeDrawer}>Settings</button>
        </div>
      </Drawer>

      <div className="layout">
        <main className="feed">
          
          <article className="post">
            <div className="post-user">
              <Avatar sx={{ bgcolor: "#e57373" }}>M</Avatar>
              <div>
                <h2>Maya Nguyen</h2>
                <p>38 minutes ago</p>
              </div>
            </div>

            <p>Having a great afternoon with friends!</p>

            <img src={postImage} alt="Friends spending time together" />

            <div className="post-buttons">
              <button onClick={() => setLiked(!liked)}>
                {liked ? "Liked" : "Like"}
              </button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </article>
        </main>

        <aside className="suggestions">
          <h2>People you may know</h2>
          <div className="person">
            <Avatar sx={{ bgcolor: "#66bb6a" }}>A</Avatar>
            <span>Alex Smith</span>
            <Button size="small">Follow</Button>
          </div>
          <div className="person">
            <Avatar sx={{ bgcolor: "#ab47bc" }}>S</Avatar>
            <span>Sofia Lee</span>
            <Button size="small">Follow</Button>
          </div>
        </aside>
      </div>
    </>
  );
}

export default App;
