import Cookies from "js-cookie";
import { io } from "socket.io-client";
import { getTokenClient } from "../_helpers/getTokenClient";

export const connectSocket = () => {
  const token = getTokenClient();

  if (!token) {
    console.error("No authentication token found. Cannot connect to socket.");
    return null;
  }
  
  const socket = io("http://localhost:3000", {
    auth: {
      token,
    },
  });

  socket.on("connect", () => {
    console.log("Connected to Socket.IO server!", socket.id);
  });

  socket.on("disconnect", (reason) => {
    console.log("Disconnected from Socket.IO server: ", reason);
    if (reason === "io server disconnect") socket.connect();
  });

  socket.on("connect_error", (err) => {
    console.error("Socket connection error: ", err.message);
    if (err.message.includes("Authentication error"))
      Cookies.remove("userToken");
  });

  return socket;
};

export const socket = connectSocket();
