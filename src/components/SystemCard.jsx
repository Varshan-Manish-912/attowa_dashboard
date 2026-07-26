import { useNavigate } from "react-router-dom";

function SystemCard({ system }) {

    const navigate = useNavigate();

    return (
        <div className="system-card">
            <div className="card-header">
                <div>
                    <p className="card-label">System</p>
                    <h2>{system.name}</h2>
                </div>

                <div className="card-status">
                    <div
                        className={`status-dot ${
                            system.online ? "green" : "red"
                        }`}
                    />

                    <span>
                        {system.online ? "Online" : "Offline"}
                    </span>
                </div>
            </div>

            <div className="sensor-section">
                <h3>Water Level</h3>

                <div className="sensor-list">
                    {system.sensors.map((sensor) => (
                        <div
                            key={sensor.id}
                            className="sensor-row"
                        >
                            <div
                                className={`status-dot ${
                                    sensor.state === "LOW"
                                        ? "green"
                                        : "red"
                                }`}
                            />

                            <span className="sensor-name">
                                {sensor.name}
                            </span>

                            <span
                                className={`sensor-state ${
                                    sensor.state === "LOW"
                                        ? "ok"
                                        : "warn"
                                }`}
                            >
                                {sensor.state === "LOW"
                                    ? "Submerged"
                                    : "Dry"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-footer">
                <div className="footer-box">
                    <span>Sensor Type</span>
                    <strong>{system.sensorType}</strong>
                </div>

                <div className="footer-box">
                    <span>Last Check</span>
                    <strong>
                        {new Date(system.lastCheck).toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: true
                        }).replace("am", "AM").replace("pm", "PM")}
                    </strong>
                </div>
            </div>

            <button
                className="history-button"
                onClick={() => navigate(`/${system.name}/history`)}
            >
                Device History
            </button>

        </div>
    );
}

export default SystemCard;