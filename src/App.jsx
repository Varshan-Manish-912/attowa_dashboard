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

    const [systems, setSystems] = useState([]);

    function mapDeviceToSystem(device) {
        return {
            name: device.deviceId,
            sensors: device.sensors,
            sensorType: "Float Switches",
            lastCheck: device.lastSeen,
            online: device.online
        };
    }

    useEffect(() => {

        async function initialize() {

            try {

                await initializeBackend();

                initializeSocket();

                const devices = await getSystems();

                setSystems(
                    devices.map(mapDeviceToSystem)
                );

                const socket = getSocket();

                socket.on("deviceUpdated", (device) => {

                    console.log("Socket Update:", device);

                    const updatedSystem = mapDeviceToSystem(device);

                    setSystems((prev) => {

                        const index = prev.findIndex(
                            (system) =>
                                system.name === updatedSystem.name
                        );

                        if (index === -1) {

                            return [...prev, updatedSystem];

                        }

                        const next = [...prev];

                        next[index] = updatedSystem;

                        return next;

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

                <StatCard
                    title="Systems"
                    value={systems.length.toString()}
                />

                <StatCard
                    title="Online"
                    value={
                        systems
                            .filter(system => system.online)
                            .length
                            .toString()
                    }
                />

                <StatCard
                    title="Alerts"
                    value={
                        systems
                            .filter(system => !system.online)
                            .length
                            .toString()
                    }
                />

                <StatCard
                    title="Uptime"
                    value={
                        systems.length > 0
                            ? `${Math.round(
                                systems.filter(
                                    system => system.online
                                ).length /
                                systems.length *
                                100
                            )}%`
                            : "--"
                    }
                />

            </section>

            <section className="systems-grid">

                {systems.map((system) => (

                    <SystemCard
                        key={system.name}
                        system={system}
                    />

                ))}

            </section>

            <footer>
                Copyright © 2026 ATOWA.
                All Rights Reserved.
                Courtesy of Anil Joseph
            </footer>

        </div>
    );
}

export default App;