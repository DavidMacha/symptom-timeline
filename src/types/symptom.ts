export interface Symptom {
  id: string;
  name: string;
  severity: 'mild' | 'moderate' | 'severe';
  startDate: Date;
  endDate?: Date;
  description: string;
  extractedFrom: string; // The original journal entry text
}

export interface JournalEntry {
  id: string;
  date: Date;
  content: string;
  symptoms: Symptom[];
  processed: boolean;
}

export interface TimelineEvent {
  date: Date;
  symptoms: Symptom[];
  entry: JournalEntry;
}