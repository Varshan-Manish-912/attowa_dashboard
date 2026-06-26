import { io } from "socket.io-client";

import { getBackendUrl } from "./backend.js";

let socket = null;

export function initializeSocket() {

    const backendUrl = getBackendUrl();

    console.log("[Socket] Connecting to:", backendUrl);

    socket = io(backendUrl, {
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