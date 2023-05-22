/* eslint-disable import/no-extraneous-dependencies */
import { Configuration, OpenAIApi } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const industryFormatter = (industry: string[]) => {
  return industry.join(' ');
};

const andFormatter = (adjectives: string[]) => {
  if (adjectives.length === 0) {
    return '';
  }
  if (adjectives.length === 1) {
    return adjectives[0];
  }
  if (adjectives.length === 2) {
    return `${adjectives[0]} and ${adjectives[1]}`;
  }
  const lastItem = adjectives.pop();
  return `${adjectives.join(', ')}, and ${lastItem}`;
};

const generatePrompt = ({
  industry,
  adjectives,
  companies,
  colors,
}: {
  industry: string[];
  adjectives: string[];
  companies: string[];
  colors: string[];
}) => {
  const formattedIndustry = industryFormatter(industry);
  const formattedAdjectives = andFormatter(adjectives);
  const formattedCompanies = andFormatter(companies);
  const formattedColors = andFormatter(colors);
  let customInput = `I'm building a ${formattedIndustry} website, described as ${formattedAdjectives}`;
  if (formattedCompanies) {
    customInput += `, similar to ${formattedCompanies}`;
  }
  if (formattedColors) {
    customInput += `, colors I like are ${formattedColors}`;
  }
  const messagesArray = [
    { role: 'system', content: 'You are a Graphic Designer.' },
    {
      role: 'user',
      content:
        'Create a bold, cutting edge and striking color palette for health and fitness industry using 5 unique colors in #RRGGBB format. Provide a name for each color. Please format the palette as an array of arrays with hex codes and color names, in the following order: Light Shades, Light Accent, Main Brand Color, Dark Accent, Dark Shades.',
    },
    {
      role: 'assistant',
      content: JSON.stringify([
        ['#BFE9D4', 'Mint Leaf'],
        ['#FFDDA1', 'Apricot'],
        ['#FF6B6B', 'Crimson'],
        ['#a83232', 'Burgundy'],
        ['#2D2D2D', 'Coal Mine'],
      ]),
    },
    {
      role: 'user',
      content: `Create a ${formattedAdjectives} color palette for ${formattedIndustry} industry using 5 unique colors in #RRGGBB format. Provide a name for each color. Please format the palette as an array of arrays with hex codes and color names, in the following order: Light Shades, Light Accent, Main Brand Color, Dark Accent, Dark Shades.`,
    },
  ];

  return messagesArray;

  // console.log(customInput);
  //   return `Generate a color palette based on the industry "${formattedIndustry}" and the website description "${formattedAdjectives}". The palette should include 5 hex codes in the format #RRGGBB, 1 color for each one of these categories, Light Shades, Light Accent, Main Brand Color, Dark Accent, Dark Shades. Please provide the color palette as an array of tuples where tuple[0] = hexcode and tuple[1] = color name, the array of tuples should be in the order that I provided earlier. \n
  // `;
};

const generateHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  const info = req.body.promptObj;
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: generatePrompt(info),
      temperature: 0.6,
      max_tokens: 200,
    });
    res
      .status(200)
      .json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
};

export default generateHandler;
