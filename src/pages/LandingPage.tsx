import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, PenTool, Brain, Download, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Symptom Timeline</h1>
                <p className="text-sm text-muted-foreground">Track your health, not your memory</p>
              </div>
            </div>
            <Link to="/tracker">
              <Button className="bg-gradient-primary text-primary-foreground">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Track your health,<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">not your memory</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Symptom Timeline is a simple health journaling app that turns your daily notes into a clear timeline of your symptoms — so you and your doctor always know when something started or changed.
            </p>
            <Link to="/tracker">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4">
                Start Tracking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <PenTool className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Journal Naturally</h4>
                  <p className="text-muted-foreground">
                    Write how you're feeling in your own words — no medical jargon needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">AI Builds Your Timeline</h4>
                  <p className="text-muted-foreground">
                    We use AI to extract symptoms, dates, and severity to create a timeline you can understand.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Download className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Share with Your Doctor</h4>
                  <p className="text-muted-foreground">
                    Download your timeline as a PDF and bring it to your next appointment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-12">Why Choose Symptom Timeline?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Activity className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-2">No More Forgotten Details</h4>
                  <p className="text-muted-foreground">Track patterns and remember details before doctor visits.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Heart className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-2">Better Communication</h4>
                  <p className="text-muted-foreground">Give clearer information to healthcare providers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Brain className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-2">AI-Powered Insights</h4>
                  <p className="text-muted-foreground">Get intelligent analysis of your health patterns.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Download className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-2">Export & Share</h4>
                  <p className="text-muted-foreground">Download your timeline to share with doctors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Start Tracking?</h3>
            <p className="text-muted-foreground mb-8">
              Take control of your health journey today. Start building your symptom timeline in minutes.
            </p>
            <Link to="/tracker">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4">
                Start Your Timeline
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/30 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-4">
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
            <p className="text-xs text-muted-foreground">
              ⚠️ Symptom Timeline does not provide medical advice. Always consult a licensed healthcare provider for diagnosis or treatment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;