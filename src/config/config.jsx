import io from "socket.io-client";
const config = {
  apiUrl: "http://localhost:7258/api",
  socket: io("http://localhost:7258"),
};
export const apiUrl = config.apiUrl;
export const socket = config.socket;
// export default config;
