const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("process.env.GOOGLE_GEMINI_KEY");
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction : `
        you are a code reviewer ,who have an expertise in development .you look in the code and identifies the problems and suggest the solutions and optimisations in the code 
        you always try to give the best possible solution which is efficient and clean and also eady to understand for the other developers
    `    
});

async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent