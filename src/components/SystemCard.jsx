function SystemCard({ system }) {
    return (
        <div className="system-card">
            <div className="card-header">
                <h2>{system.name}</h2>

                <div
                    className={`status-dot ${
                        system.color === "green"
                            ? "green"
                            : "red"
                    }`}
                />
            </div>

            <div className="info-row">
                <span>Status</span>
                <strong>{system.status}</strong>
            </div>

            <div className="info-row">
                <span>Availability</span>
                <strong>{system.availability}</strong>
            </div>

            <div className="info-row">
                <span>Metric</span>
                <strong>{system.metric}</strong>
            </div>

            <div className="info-row">
                <span>Last Check</span>
                <strong>{system.lastCheck}</strong>
            </div>
        </div>
    );
}

export default SystemCard;