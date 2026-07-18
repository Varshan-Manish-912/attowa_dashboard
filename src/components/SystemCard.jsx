function SystemCard({ system }) {
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
                        {new Date(
                            system.lastCheck
                        ).toLocaleTimeString()}
                    </strong>
                </div>
            </div>
        </div>
    );
}

export default SystemCard;