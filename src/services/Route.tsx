const localhost = process.env.REACT_APP_DB_HOST;

export async function POST(url: any, params: any) {
    const res = await fetch(localhost + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });
    const data = await res.json();
    return data;
}
