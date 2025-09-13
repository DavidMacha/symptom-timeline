import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export interface SymptomExtraction {
  symptoms: Array<{
    name: string;
    severity: 'mild' | 'moderate' | 'severe';
    startDate?: string;
    duration?: string;
    description: string;
  }>;
  suggestions?: string;
}

export async function extractSymptomsFromText(text: string, entryDate: string): Promise<SymptomExtraction> {
  try {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "system",
          "content": `You are a medical AI assistant that extracts symptom information from patient journal entries. 

IMPORTANT: Respond ONLY with valid JSON. No explanation, no markdown, just the JSON object.

Extract symptoms with these properties:
- name: clear symptom name (e.g., "headache", "nausea", "fatigue")
- severity: "mild", "moderate", or "severe" based on description
- startDate: when symptom started (YYYY-MM-DD format, relative to entry date if mentioned)
- duration: how long it lasted (e.g., "3 days", "ongoing")
- description: brief symptom description from the text

Also provide suggestions if symptoms seem concerning (suggest seeing a doctor for severe or persistent symptoms).

Entry date: ${entryDate}`
        },
        {
          "role": "user",
          "content": text
        }
      ],
      "model": "openai/gpt-oss-20b",
      "temperature": 0.3,
      "max_completion_tokens": 1000,
      "top_p": 0.9,
      "reasoning_effort": "medium"
    });

    const response = chatCompletion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from AI');
    }

    return JSON.parse(response);
  } catch (error) {
    console.error('Error extracting symptoms:', error);
    return { symptoms: [] };
  }
}