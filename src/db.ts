import {Pool} from '@neondatabase/serverless';

const URL = `postgres://${import.meta.env.PGUSER}:${import.meta.env.PGPASSWORD}@${import.meta.env.PGHOST}/${import.meta.env.PGDATABASE}?options=project%3D${import.meta.env.ENDPOINT_ID}`


export async function addResponse (slug: string, questionID: string, answer: string) {

    try {

        const client = new Pool({ connectionString: URL });
        await client.connect();

        console.log("Connected to db.")

        const text = 'INSERT INTO responses(slug, "questionID", answer, "createdAt", "updatedAt") VALUES($1, $2, $3, now(), now())'
        const values = [slug, questionID, answer]

        const response = await client.query(text, values);

        console.log("Added to table: " + response.rows.length + " rows");

    } catch {
        console.log("Error connecting to database.")
    }
}