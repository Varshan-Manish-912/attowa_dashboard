import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DeviceHistory from "./pages/DeviceHistory";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/:deviceId/history"
                    element={<DeviceHistory />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;