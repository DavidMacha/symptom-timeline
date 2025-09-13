import { JournalEntry } from '@/types/symptom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Activity, AlertTriangle } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';

interface SymptomTimelineProps {
  entries: JournalEntry[];
}

export default function SymptomTimeline({ entries }: SymptomTimelineProps) {
  const sortedEntries = [...entries].sort((a, b) => b.date.getTime() - a.date.getTime());

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'bg-timeline-mild text-success-foreground';
      case 'moderate': return 'bg-timeline-moderate text-warning-foreground';
      case 'severe': return 'bg-timeline-severe text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'severe': return <AlertTriangle className="h-3 w-3" />;
      default: return <Activity className="h-3 w-3" />;
    }
  };

  if (entries.length === 0) {
    return (
      <Card className="shadow-card">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Activity className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-muted-foreground">No entries yet</h3>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Start tracking your symptoms by adding your first journal entry above.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Symptom Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {sortedEntries.map((entry, index) => (
            <div key={entry.id} className="relative">
              {/* Timeline line */}
              {index < sortedEntries.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-6 bg-border" />
              )}
              
              <div className="flex gap-4">
                {/* Date indicator */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground">
                      {format(entry.date, 'MMMM d, yyyy')}
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      ({differenceInDays(new Date(), entry.date)} days ago)
                    </span>
                  </div>
                  
                  {/* Journal entry */}
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "{entry.content}"
                  </p>
                  
                  {/* Extracted symptoms */}
                  {entry.symptoms.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-foreground">Detected Symptoms:</h5>
                      <div className="flex flex-wrap gap-2">
                        {entry.symptoms.map((symptom) => (
                          <Badge
                            key={symptom.id}
                            className={`${getSeverityColor(symptom.severity)} gap-1`}
                          >
                            {getSeverityIcon(symptom.severity)}
                            {symptom.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}