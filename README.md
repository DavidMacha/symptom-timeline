# 🩺 Symptom Timeline

**Track your health, not your memory.**

Symptom Timeline is a simple health journaling app that turns your daily notes into a clear timeline of your symptoms — so you and your doctor always know when something started or changed.

## ✨ Features

- **📝 Natural Language Journaling**: Write how you're feeling in your own words
- **🧠 AI-Powered Analysis**: Automatically extract symptoms, severity, and dates
- **📅 Visual Timeline**: See your health journey at a glance
- **📊 Health Insights**: Get intelligent analysis of patterns and trends
- **💾 Local Storage**: Your data stays private on your device
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **⚡ Fast & Secure**: No backend required, all processing happens locally

## 🚀 Live Demo

Visit the live app: [Symptom Timeline](https://lovable.dev/projects/76e59db1-c032-4153-9440-2163bace3e37)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **AI Processing**: Groq SDK with OpenAI GPT model
- **Storage**: Browser localStorage
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── JournalEntry.tsx    # Daily journal input form
│   ├── SymptomTimeline.tsx # Visual timeline display
│   └── HealthInsights.tsx  # AI-powered health analysis
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts  # Local storage management
├── lib/                # Utilities and configurations
│   ├── groq.ts         # AI processing with Groq
│   └── utils.ts        # Helper functions
├── pages/              # Route components
│   ├── LandingPage.tsx # Home page
│   ├── TrackerPage.tsx # Main app interface
│   └── NotFound.tsx    # 404 page
├── types/              # TypeScript type definitions
│   └── symptom.ts      # Data models
└── styles/
    └── index.css       # Global styles and design tokens
```

## 🎨 Design System

The app uses a custom design system built with Tailwind CSS:

- **Colors**: HSL-based semantic color tokens
- **Typography**: Carefully crafted font scales
- **Components**: Customized shadcn/ui components
- **Gradients**: Beautiful primary gradients for CTAs
- **Shadows**: Elegant depth with custom shadows

## 🔧 Configuration

### Environment Variables

The app uses Groq for AI processing. The API key is already configured, but you can update it in `src/lib/groq.ts`.

### Deployment

The app is ready for deployment on various platforms:

#### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Deploy automatically** - no configuration needed!
3. **Vercel.json is included** for proper routing

#### Other Platforms

- **Netlify**: Works out of the box
- **GitHub Pages**: Add appropriate base path
- **Self-hosted**: Any static hosting works

## 📱 Usage Guide

### Getting Started

1. **Visit the landing page** to learn about the app
2. **Click "Start Tracking"** to go to the tracker
3. **Write your first journal entry** describing how you feel
4. **Watch the AI analyze** your symptoms automatically
5. **View your timeline** to see patterns over time

### Data Privacy

- **All data stays on your device** - stored in browser localStorage
- **No personal information sent to servers** - only symptom text for AI analysis
- **Export your data anytime** - download as PDF or JSON

### Tips for Better Results

- **Be specific** about symptoms and timing
- **Include severity** (mild, moderate, severe)
- **Mention duration** (how long symptoms last)
- **Note triggers** if you notice patterns

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- **Follow TypeScript best practices**
- **Use semantic commit messages**
- **Test on both desktop and mobile**
- **Follow the existing code style**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Medical Disclaimer

**This app is for tracking purposes only.** 

- Always consult licensed healthcare providers for medical advice
- Do not use this app for emergency medical situations
- Call emergency services if you have urgent health concerns
- This tool supplements but does not replace professional medical care

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful, accessible components
- **Groq** for fast AI processing
- **OpenAI** for the language model
- **Vercel** for seamless deployment
- **Tailwind CSS** for the design system

## 📧 Support

If you have questions or need help:

- **Create an issue** in this repository
- **Check the documentation** at [docs link]
- **Join our community** [community link]

---

**Made with ❤️ for better health tracking**
