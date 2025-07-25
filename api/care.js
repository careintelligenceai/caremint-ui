const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function (context, req) {
  const userPrompt = req.body?.prompt || "Say hello";
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: userPrompt }],
  });

  context.res = {
    body: { response: completion.data.choices[0].message.content }
  };
};