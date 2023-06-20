import {Client} from '@neondatabase/serverless';

const URL = `postgres://${import.meta.env.PGUSER}:${import.meta.env.PGPASSWORD}@${import.meta.env.PGHOST}/${import.meta.env.PGDATABASE}?options=project%3D${import.meta.env.ENDPOINT_ID}`


export async function addResponse (slug: string, questionID: string, answer: string) {

    let client;

    client = new Client(URL);
    await client.connect();

    const text = 'INSERT INTO responses(slug, "questionID", answer, "createdAt", "updatedAt") VALUES($1, $2, $3, now(), now())'
    const values = [slug, questionID, answer]

    await client.query(text, values);
}