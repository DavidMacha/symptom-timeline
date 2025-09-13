import { JournalEntry } from '@/types/symptom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, TrendingUp, Download, AlertCircle } from 'lucide-react';
import { differenceInDays, format } from 'date-fns';

interface HealthInsightsProps {
  entries: JournalEntry[];
}

export default function HealthInsights({ entries }: HealthInsightsProps) {
  if (entries.length === 0) return null;

  // Calculate insights
  const allSymptoms = entries.flatMap(entry => entry.symptoms);
  const symptomCounts = allSymptoms.reduce((acc, symptom) => {
    acc[symptom.name] = (acc[symptom.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const mostCommon = Object.entries(symptomCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  const severeSymptoms = allSymptoms.filter(s => s.severity === 'severe');
  const recentSevereSymptoms = severeSymptoms.filter(s => 
    differenceInDays(new Date(), s.startDate) <= 7
  );

  const generateReport = () => {
    const report = `SYMPTOM TIMELINE REPORT
Generated: ${format(new Date(), 'MMMM d, yyyy')}

SUMMARY:
- Total entries: ${entries.length}
- Date range: ${format(entries[entries.length - 1]?.date || new Date(), 'MMM d')} - ${format(entries[0]?.date || new Date(), 'MMM d, yyyy')}
- Total symptoms tracked: ${allSymptoms.length}

MOST COMMON SYMPTOMS:
${mostCommon.map(([name, count]) => `• ${name}: ${count} occurrences`).join('\n')}

TIMELINE:
${entries.map(entry => `
${format(entry.date, 'MMM d, yyyy')}:
${entry.symptoms.map(s => `  • ${s.name} (${s.severity})`).join('\n') || '  No symptoms detected'}
`).join('')}`;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `symptom-timeline-${format(new Date(), 'yyyy-MM-dd')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Alerts */}
      {recentSevereSymptoms.length > 0 && (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Health Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-destructive">
              You've reported {recentSevereSymptoms.length} severe symptom(s) in the past week. 
              Consider consulting with a healthcare provider.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Insights */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-accent" />
            Health Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mostCommon.length > 0 && (
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Most Common Symptoms
              </h4>
              <div className="flex flex-wrap gap-2">
                {mostCommon.map(([name, count]) => (
                  <Badge key={name} variant="secondary">
                    {name} ({count}x)
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <Button 
              onClick={generateReport}
              variant="outline" 
              size="sm"
              className="flex-1"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}