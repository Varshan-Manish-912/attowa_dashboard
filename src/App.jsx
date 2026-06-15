import "./App.css";

import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import SystemCard from "./components/SystemCard";

import systems from "./data/systems";

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="beta-banner">
                ***ALPHA BUILD***
                <span>
        I have filled all the data in the dashboard as placeholder data, Infact this very Ribbon
                    Saying Alpha Build Will Not Be PResent in Final Edition
    </span>
            </div>

            <section className="metrics">
                <StatCard title="Systems" value="6" />
                <StatCard title="Online" value="5" />
                <StatCard title="Alerts" value="1" />
                <StatCard title="Uptime" value="99.8%" />
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
                Courtesy of Manish R and Anil Joseph
            </footer>
        </div>
    );
}

export default App;