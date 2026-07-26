import { useEffect, useState } from "react";
import { getOHTHistory } from "../services/api";

function DeviceHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function loadHistory() {
            const data = await getOHTHistory();
            setHistory(data);
        }

        loadHistory();
    }, []);

    return (
        <div style={{ padding: "30px" }}>
            <h1 style={{ marginBottom: "20px" }}>
                Device History
            </h1>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: "white",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}
            >
                <thead>
                <tr style={{ background: "#e8d5b7" }}>
                    <th style={cellStyle}>ID</th>
                    <th style={cellStyle}>Device</th>
                    <th style={cellStyle}>Sensor 1</th>
                    <th style={cellStyle}>Sensor 2</th>
                    <th style={cellStyle}>Sensor 3</th>
                    <th style={cellStyle}>Sensor 4</th>
                    <th style={cellStyle}>Sensor 5</th>
                    <th style={cellStyle}>Recorded At</th>
                </tr>
                </thead>

                <tbody>
                {history.map((record) => (
                    <tr key={record.id}>
                        <td style={cellStyle}>{record.id}</td>
                        <td style={cellStyle}>{record.device_id}</td>
                        <td style={cellStyle}>{record.sensor_1}</td>
                        <td style={cellStyle}>{record.sensor_2}</td>
                        <td style={cellStyle}>{record.sensor_3}</td>
                        <td style={cellStyle}>{record.sensor_4}</td>
                        <td style={cellStyle}>{record.sensor_5}</td>
                        <td style={cellStyle}>
                            {new Date(record.recorded_at.replace(" ", "T") + "Z")
                                .toLocaleString("en-IN", {
                                    timeZone: "Asia/Kolkata",
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                    hour12: true,
                                })
                                .replace("am", "AM")
                                .replace("pm", "PM")}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const cellStyle = {
    padding: "12px",
    borderBottom: "1px solid #eee",
    textAlign: "center"
};

export default DeviceHistory;