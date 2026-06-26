let backendUrl = null;

export async function initializeBackend() {

    const response = await fetch(
        "https://atowa-echo-server.vercel.app/api"
    );

    const data = await response.json();

    if (!data.url) {
        throw new Error("Echo server did not return a backend URL.");
    }

    backendUrl = data.url;

    console.log("[Backend]", backendUrl);

}

export function getBackendUrl() {

    return backendUrl;

}