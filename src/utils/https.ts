const defaultUrl = process.env.REACT_APP_DB_HOST;

export async function POST(url: any, params?: any) {
    const response = await fetch(defaultUrl + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('Content-Type');

    let data;
    if (contentType && contentType.indexOf('application/json') !== -1) {
        data = await response.json();
    } else {
        data = await response.text();
    }

    return data;
}

export async function GET(url: string, params?: any) {
    const response = await fetch(`${defaultUrl}${params}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
