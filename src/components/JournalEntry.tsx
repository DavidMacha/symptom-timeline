import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Loader2, PenTool } from 'lucide-react';
import { extractSymptomsFromText } from '@/lib/groq';
import { JournalEntry as JournalEntryType, Symptom } from '@/types/symptom';
import { format } from 'date-fns';

interface JournalEntryProps {
  onEntryAdded: (entry: JournalEntryType) => void;
}

export default function JournalEntry({ onEntryAdded }: JournalEntryProps) {
  const [content, setContent] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = async () => {
    if (!content.trim()) return;

    setIsProcessing(true);
    try {
      const dateStr = format(selectedDate, 'yyyy-MM-dd');
      const extraction = await extractSymptomsFromText(content, dateStr);
      
      const symptoms: Symptom[] = extraction.symptoms.map((symptom, index) => ({
        id: `${Date.now()}-${index}`,
        name: symptom.name,
        severity: symptom.severity,
        startDate: symptom.startDate ? new Date(symptom.startDate) : selectedDate,
        description: symptom.description,
        extractedFrom: content
      }));

      const entry: JournalEntryType = {
        id: `entry-${Date.now()}`,
        date: selectedDate,
        content,
        symptoms,
        processed: true
      };

      onEntryAdded(entry);
      setContent('');
    } catch (error) {
      console.error('Error processing entry:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PenTool className="h-5 w-5 text-primary" />
          Daily Health Journal
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <input
            type="date"
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="bg-transparent border-none outline-none"
          />
        </div>
        
        <Textarea
          placeholder="How are you feeling today? Describe any symptoms, pain, or changes in your health..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[120px] resize-none"
        />
        
        <Button 
          onClick={handleSubmit}
          disabled={!content.trim() || isProcessing}
          className="w-full bg-gradient-primary text-primary-foreground"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing symptoms...
            </>
          ) : (
            'Add to Timeline'
          )}
        </Button>
      </CardContent>
    </Card>
  );
}