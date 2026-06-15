function Navbar() {
    return (
        <nav className="navbar">
            <img
                src="/logo.png"
                alt="ATOWA Logo"
                className="navbar-logo"
            />

            <div className="navbar-center">
                <h1>ATOWA MONITOR</h1>

                <p>
                    Almond Tower Owners Welfare Association
                </p>

                <p className="dashboard-subtitle">
                    Systems Monitoring Dashboard
                </p>
            </div>
        </nav>
    );
}

export default Navbar;