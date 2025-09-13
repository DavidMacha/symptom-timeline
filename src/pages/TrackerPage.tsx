import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JournalEntry from '@/components/JournalEntry';
import SymptomTimeline from '@/components/SymptomTimeline';
import HealthInsights from '@/components/HealthInsights';
import { JournalEntry as JournalEntryType } from '@/types/symptom';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const TrackerPage = () => {
  const [entries, setEntries] = useLocalStorage<JournalEntryType[]>('symptomTimeline', []);

  const handleEntryAdded = (entry: JournalEntryType) => {
    setEntries(prev => [entry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Symptom Timeline</h1>
                <p className="text-sm text-muted-foreground">Track your health journey with AI-powered insights</p>
              </div>
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
    </div>
  );
};

export default TrackerPage;