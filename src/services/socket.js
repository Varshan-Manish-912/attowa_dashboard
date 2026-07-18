import { io } from "socket.io-client";

import { BACKEND_URL } from "../config/config.js";

let socket = null;

export function initializeSocket() {

    console.log("[Socket] Connecting to:", BACKEND_URL);

    socket = io(BACKEND_URL, {
        transports: ["websocket", "polling"]
    });

    socket.on("connect", () => {
        console.log("[Socket] Connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
        console.error("[Socket] Connection Error:", err);
    });

    socket.on("disconnect", (reason) => {
        console.log("[Socket] Disconnected:", reason);
    });

    return socket;
}

export function getSocket() {
    return socket;
}