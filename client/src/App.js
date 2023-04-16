import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("https://localhost:3000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState("false");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return <div className="App"></div>;
}

export default App;
