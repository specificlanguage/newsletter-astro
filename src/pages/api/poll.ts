import type {APIRoute} from "astro";
import {addResponse} from "../../db";

export const post: APIRoute = async ({request}) => {

    const data = await request.json();
    const slug = data.slug;
    delete data.slug;

    if(slug === undefined){
        return new Response(
            JSON.stringify({ message: "Server error"}),
            {status: 500}
        )
    }

    try {
        for(let key in data){
            await addResponse(slug, key, data[key]);
        }
    } catch (error) {
        console.error('Unable to add to the database:', error);
        return new Response(
            JSON.stringify({ message: "Server error, try again later"}),
            {status: 500}
        )
    }

    return new Response(
        JSON.stringify({
            message: "Response added successfully!"
        }),
        {status: 200}
    )
}