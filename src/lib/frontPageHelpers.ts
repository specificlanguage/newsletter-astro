import {type CollectionEntry, getCollection} from "astro:content";

export function stripHTML(originalString: string)  {
    return originalString.replace(/(<([^>]+)>)/gi, "")
        .replace(/import.*;/g, "")
        .replace(/(?:__|[*#])|!?\[(.*?)\]\(.*?\)/g, "$1")
        .replace(/#/g, "")
        .replace(/\*\*/g, "");
}

export function readingTime(str: string){
    const num_words = str.split(" ").length;
    if(num_words < 180) {
        return "< 1 min read";
    } else {
        return (num_words / 180).toLocaleString(undefined, {maximumFractionDigits: 0}) + " min read";
    }
}

export async function getNewsletterCollection(): Promise<CollectionEntry<"newsletter">[]> {
    return await getCollection("newsletter",
        ({id}) =>
            (id.startsWith("newsletter") || id.match(/^\/?\d{4}\/\d{2}\/index.mdx/) !== null
        )
    )
}