import axios from 'axios';

const API_URL = process.env.STRAPI_API_URL || "http://localhost:1337"


export const callApi = async (path, method, body) => {
    const response = await fetch(`${API_URL}${path}`, {
        method,
        headers: {
            "content-type": "application/json"
        },
        credentials: 'same-origin',
        body: JSON.stringify(body)
    })

    const data = await response.json();

    return data;
}