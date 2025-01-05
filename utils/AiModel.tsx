const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
import dotenv from 'dotenv';
dotenv.config();


const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

function createPrompt(userQuery: string, searchResults: any[], taskInstruction: string): string {
    const formattedResults = searchResults.map((result, index) => (
        `${index + 1}. Title: ${result.title}\nSnippet: ${result.snippet}\nLink: ${result.link}\n`
    )).join("\n");

    return `
    Form Data:
    ${userQuery}

    Information Found:
    ${formattedResults}

    Task:
    ${taskInstruction}

    GIVE THE ANSWER IN MARKDOWN FORMAT
    `;
}

export async function webSearch(query: string): Promise<any[]> {


    const searchUrl = `https://www.googleapis.com/customsearch/v1`;
    const params = new URLSearchParams({
        q: query,
        key: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY || "",
        cx: process.env.NEXT_PUBLIC_SEARCH_ENGINE_ID || "",
    });

    try {
        const response = await fetch(`${searchUrl}?${params.toString()}`);
        if (response.ok) {
            const results = await response.json();
            return results.items || [];
        } else {
            console.error(`Error: ${response.statusText}`);
            return [];
        }
    } catch (error) {
        console.error(`Error fetching search results: ${error}`);
        return [];
    }
}

export async function chat(userQuery: string, taskInstruction: string ): Promise<string> {
    const searchResults = await webSearch(userQuery);

    if (!searchResults.length) {
        return "Sorry, I couldn't find any information on that.";
    }

    const prompt = createPrompt(userQuery, searchResults, taskInstruction);

    return prompt;
}


export const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
});


