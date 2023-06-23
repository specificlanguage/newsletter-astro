import type {APIRoute} from "astro";
import {Pool} from "@neondatabase/serverless";


const URL = `postgres://${import.meta.env.PGUSER}:${import.meta.env.PGPASSWORD}@${import.meta.env.PGHOST}/${import.meta.env.PGDATABASE}?options=project%3D${import.meta.env.ENDPOINT_ID}`
const client = new Pool({connectionString: URL});

export const post: APIRoute = async ({request}) => {

    const data = await request.json();
    const slug = data.slug;
    delete data.slug;

    if(slug === undefined){
        console.log("No slug created.")
        return new Response(
            JSON.stringify({ message: "Server error"}),
            {status: 500}
        )
    }

    await client.connect();

    for(let key in data){
        await addResponse(slug, key, data[key], client);
        console.log("Added key " + key);
    }
    console.log("Added all items, returning.");
    return new Response(
        JSON.stringify({
            message: "Response added successfully!"
        }),
        {status: 200}
    )
}

async function addResponse (slug: string, questionID: string, answer: string, client: Pool) {
    console.log("Connected to db.")

    const text = 'INSERT INTO responses(slug, "questionID", answer, "createdAt", "updatedAt") VALUES($1, $2, $3, now(), now())'
    const values = [slug, questionID, answer]

    const response = await client.query(text, values);

    console.log("Added to table: " + response.rows.length + " rows");
}