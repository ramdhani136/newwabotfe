import { io } from "socket.io-client";


class Socket {
  public static socket = io(`${process.env.REACT_APP_SOCKET_URI}`, {
    withCredentials: true,
    extraHeaders: {
      "react-client": "react-client",
    },
  });
}

export default Socket.socket;