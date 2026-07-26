import { BACKEND_URL } from "../config/config.js";

export async function getSystems() {

    const response = await fetch(`${BACKEND_URL}/systems`);
    return await response.json();

}

export async function getOHTHistory() {

    const response = await fetch(
        `${BACKEND_URL}/systems/oht/history`
    );

    return await response.json();

}