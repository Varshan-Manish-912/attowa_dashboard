import "./App.css";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import SystemCard from "./components/SystemCard";

import { getSystems } from "./services/api";
import { initializeBackend } from "./services/backend";
import {
    initializeSocket,
    getSocket
} from "./services/socket";

function App() {

    const [system, setSystem] = useState(null);

    useEffect(() => {

        async function initialize() {

            try {

                /* Ask echo server for backend URL */
                await initializeBackend();

                /* Connect Socket.IO */
                initializeSocket();

                /* Load initial system */
                const devices = await getSystems();

                if (devices.length > 0) {

                    setSystem({
                        name: "OHT",
                        status: devices[0].sensorState,
                        availability: "100%",
                        metric: "Float Switch",
                        lastCheck: devices[0].lastSeen,
                        color:
                            devices[0].sensorState === "HIGH"
                                ? "green"
                                : "red"
                    });

                }

                /* Listen for live updates */
                const socket = getSocket();

                socket.on("deviceUpdated", (device) => {

                    console.log("Socket Update:", device);

                    setSystem({
                        name: "OHT",
                        status: device.sensorState,
                        availability: "100%",
                        metric: "Float Switch",
                        lastCheck: new Date().toLocaleTimeString(),
                        color:
                            device.sensorState === "HIGH"
                                ? "green"
                                : "red"
                    });

                });

            }
            catch (err) {

                console.error(err);

            }

        }

        initialize();

        return () => {

            const socket = getSocket();

            if (socket) {

                socket.off("deviceUpdated");

            }

        };

    }, []);

    return (
        <div className="app">

            <Navbar />

            <div className="beta-banner">
                ***ALPHA BUILD***
                <span>
                    I have filled all the data in the dashboard as placeholder
                    data. This ribbon will not be present in the final edition.
                </span>
            </div>

            <section className="metrics">
                <StatCard title="Systems" value="1" />
                <StatCard title="Online" value={system ? "1" : "0"} />
                <StatCard title="Alerts" value="0" />
                <StatCard title="Uptime" value="100%" />
            </section>

            <section className="systems-grid">

                {system && (
                    <SystemCard system={system} />
                )}

            </section>

            <footer>
                Copyright © 2026 ATOWA.
                All Rights Reserved.
                Courtesy of Manish R and Anil Joseph
            </footer>

        </div>
    );
}

export default App;