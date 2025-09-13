import { useState, useEffect } from 'react';
import { Heart, Activity, Brain } from 'lucide-react';
import JournalEntry from '@/components/JournalEntry';
import SymptomTimeline from '@/components/SymptomTimeline';
import HealthInsights from '@/components/HealthInsights';
import { JournalEntry as JournalEntryType } from '@/types/symptom';

const Index = () => {
  const [entries, setEntries] = useState<JournalEntryType[]>([]);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('symptomTimeline');
    if (savedEntries) {
      const parsed = JSON.parse(savedEntries);
      // Convert date strings back to Date objects
      const entriesWithDates = parsed.map((entry: any) => ({
        ...entry,
        date: new Date(entry.date),
        symptoms: entry.symptoms.map((symptom: any) => ({
          ...symptom,
          startDate: new Date(symptom.startDate),
          endDate: symptom.endDate ? new Date(symptom.endDate) : undefined
        }))
      }));
      setEntries(entriesWithDates);
    }
  }, []);

  // Save entries to localStorage whenever entries change
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem('symptomTimeline', JSON.stringify(entries));
    }
  }, [entries]);

  const handleEntryAdded = (entry: JournalEntryType) => {
    setEntries(prev => [entry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Symptom Timeline</h1>
              <p className="text-sm text-muted-foreground">Track your health journey with AI-powered insights</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Journal Entry Form */}
          <section>
            <JournalEntry onEntryAdded={handleEntryAdded} />
          </section>

          {/* Health Insights */}
          {entries.length > 0 && (
            <section>
              <HealthInsights entries={entries} />
            </section>
          )}

          {/* Timeline */}
          <section>
            <SymptomTimeline entries={entries} />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/30 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                AI-Powered Analysis
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                Health Insights
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Better Outcomes
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              This app is for tracking purposes only. Always consult healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
