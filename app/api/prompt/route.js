import { connectToDB } from "@utils/database";
import { prompt } from "@models/prompt";

export default async (request) => {
    try {
        await connectToDB();
        const prompts = await prompt.find({}).populate("creator");
        return new Response(JSON.stringify(prompts), {
            status: 200
        });
    }
    catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
};