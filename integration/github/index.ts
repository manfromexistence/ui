/* eslint-disable turbo/no-undeclared-env-vars */
import fetch from 'node-fetch';

interface IconData {
  [key: string]: {
    name: string;
    unicode: string;
    styles: string[];
  };
}

// Replace with your actual personal access token (optional, but recommended for higher rate limits)
// IMPORTANT: Never commit your token to version control!
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''; // Optional

const url = 'https://raw.githubusercontent.com/manfromexistence/ui/main/data/icons/academicons.json';

async function fetchAndLogJson(): Promise<void> {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : '',
      },
    });

    if (!response.ok) {
        // Check for rate limit errors specifically
        if (response.status === 403 && response.headers.get('X-RateLimit-Remaining') === '0') {
            const resetTime = parseInt(response.headers.get('X-RateLimit-Reset') || '0', 10);
            const resetDate = new Date(resetTime * 1000); // Convert seconds to milliseconds
            console.error(`Rate limit exceeded. Resets at: ${resetDate}`);
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }

    const data: any = await response.json();
    console.log(JSON.stringify(data, null, 2));

  } catch (error) {
    console.error('Error fetching or parsing JSON:', error);
  }
}

fetchAndLogJson();