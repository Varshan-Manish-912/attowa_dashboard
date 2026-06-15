function StatCard({ title, value }) {
    return (
        <div className="metric-card">
            <h3>{title}</h3>
            <span>{value}</span>
        </div>
    );
}

export default StatCard;