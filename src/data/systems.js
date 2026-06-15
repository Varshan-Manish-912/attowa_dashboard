const systems = [
    {
        name: "WTP",
        status: "Running",
        availability: "99.8%",
        metric: "Pressure: 4.2 bar",
        lastCheck: "2 mins ago",
        color: "green",
    },
    {
        name: "Pump",
        status: "Running",
        availability: "98.5%",
        metric: "Current: 5.2A",
        lastCheck: "1 min ago",
        color: "green",
    },
    {
        name: "Fire",
        status: "Alert",
        availability: "95.0%",
        metric: "Zone: Block B",
        lastCheck: "5 mins ago",
        color: "red",
    },
    {
        name: "Borewell",
        status: "Running",
        availability: "99.2%",
        metric: "Depth: 180 ft",
        lastCheck: "3 mins ago",
        color: "green",
    },
    {
        name: "OHT",
        status: "78% Full",
        availability: "100%",
        metric: "Capacity: 50 KL",
        lastCheck: "Now",
        color: "green",
    },
    {
        name: "Sump",
        status: "62% Full",
        availability: "100%",
        metric: "Capacity: 80 KL",
        lastCheck: "Now",
        color: "green",
    },
];

export default systems;