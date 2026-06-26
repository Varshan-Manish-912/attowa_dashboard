import { getBackendUrl } from "./backend.js";

export async function getSystems() {

    const response = await fetch(`${getBackendUrl()}/systems`, {
        headers: {
            "ngrok-skip-browser-warning": "true"
        }
    });

    return await response.json();

}