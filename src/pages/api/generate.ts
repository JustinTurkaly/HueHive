/* eslint-disable import/no-extraneous-dependencies */
// import { Configuration, OpenAIApi } from 'openai';
// import type { NextApiRequest, NextApiResponse } from 'next';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const industryFormatter = (industry: string[]) => {
//   return industry.join(' ');
// };

// const andFormatter = (adjectives: string[]) => {
//   if (adjectives.length === 0) {
//     return '';
//   }
//   if (adjectives.length === 1) {
//     return adjectives[0];
//   }
//   if (adjectives.length === 2) {
//     return `${adjectives[0]} and ${adjectives[1]}`;
//   }
//   const lastItem = adjectives.pop();
//   return `${adjectives.join(', ')}, and ${lastItem}`;
// };

// const generatePrompt = ({
//   industry,
//   adjectives,
//   companies,
//   colors,
// }: {
//   industry: string[];
//   adjectives: string[];
//   companies: string[];
//   colors: string[];
// }) => {
//   const formattedIndustry = industryFormatter(industry);
//   const formattedAdjectives = andFormatter(adjectives);
//   const formattedCompanies = andFormatter(companies);
//   const formattedColors = andFormatter(colors);
//   let customInput = `I'm building a ${formattedIndustry} website, described as ${formattedAdjectives}`;
//   if (formattedCompanies) {
//     customInput += `, similar to ${formattedCompanies}`;
//   }
//   if (formattedColors) {
//     customInput += `, colors I like are ${formattedColors}`;
//   }
//   // console.log(customInput);
//   return `Generate a color palette based on the industry "${formattedIndustry}" and the website description "${formattedAdjectives}". The color palette should include 5 hex codes in the format #RRGGBB, and the colors should be appropriate for a website in the "${formattedIndustry}" industry. Please provide the color palette as an object where the key is the hexcode and the values are the names. \n
// `;
// };

// const generateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (!configuration.apiKey) {
//     res.status(500).json({
//       error: {
//         message:
//           'OpenAI API key not configured, please follow instructions in README.md',
//       },
//     });
//     return;
//   }

//   const info = req.body.promptObj;
//   try {
//     const completion = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: generatePrompt(info),
//       temperature: 0.6,
//       max_tokens: 200,
//     });
//     res.status(200).json({ result: completion.data.choices[0].text });
//   } catch (error) {
//     // Consider adjusting the error handling logic for your use case
//     if (error.response) {
//       console.error(error.response.status, error.response.data);
//       res.status(error.response.status).json(error.response.data);
//     } else {
//       console.error(`Error with OpenAI API request: ${error.message}`);
//       res.status(500).json({
//         error: {
//           message: 'An error occurred during your request.',
//         },
//       });
//     }
//   }
// };

// export default generateHandler;
export {};
