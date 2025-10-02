# FORGE Curriculum - Audio Streaming Platform

## Project Overview
- **Name**: FORGE Curriculum
- **Goal**: Christ-Centered Social Emotional Learning & Leadership Formation Program for grades 9-12
- **Features**: Audio streaming, downloadable materials, comprehensive curriculum management

## 🎯 Recently Added Features
- ✅ **Audio Streaming**: Interactive audio player with play/pause, skip controls, volume controls
- ✅ **Progress Tracking**: Visual progress bar with time display 
- ✅ **Enhanced UX**: Streamlined interface with both streaming and download options
- ✅ **Multi-Grade Support**: Consistent experience across all grade levels (9-12)

## URLs
- **Production**: https://forgebdhs.pages.dev/
- **GitHub**: https://github.com/Eggmanaa/FORGE-II

## Data Architecture
- **Data Models**: Grade-based lesson structure with audio files, PowerPoint presentations, and comprehensive metadata
- **Storage Services**: Static file hosting with GitHub-based CDN for audio and presentation files
- **Data Flow**: Client-side rendering with responsive design and cross-browser audio compatibility

## User Guide
### Audio Streaming Features
1. **Play/Pause**: Click the play button to start streaming audio lessons
2. **Skip Controls**: Use 10-second skip forward/backward buttons for navigation
3. **Progress Bar**: Click anywhere on the progress bar to jump to specific time points
4. **Volume Control**: Adjust volume or mute audio using the volume slider
5. **Download Options**: Traditional download buttons remain available for offline access

### Grade-Level Navigation
- Visit `/grade-9`, `/grade-10`, `/grade-11`, or `/grade-12` for specific curricula
- Each lesson includes CASEL focus areas, Catholic Social Teaching lens, and key learning points
- Audio lessons are now streamable directly in the browser with full controls

## Technical Stack
- **Framework**: Next.js 15 with static export for optimal performance
- **Styling**: TailwindCSS with custom audio player components
- **Icons**: Lucide React for consistent iconography
- **Audio**: HTML5 Audio API with custom React player controls
- **Build**: Static site generation for Cloudflare Pages deployment

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Static files generated in 'out' directory
```

### Deployment to Cloudflare Pages

#### Option 1: Automatic GitHub Integration (Recommended)
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Enable automatic deployments on push to main branch

#### Option 2: Manual Upload
1. Run `npm run build` to generate the `out` directory
2. Upload the contents of the `out` directory to Cloudflare Pages
3. Static files will be served from Cloudflare's global CDN

## Project Structure
```
webapp/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── grade-9/           # Grade 9 curriculum page
│   │   ├── grade-10/          # Grade 10 curriculum page  
│   │   ├── grade-11/          # Grade 11 curriculum page
│   │   └── grade-12/          # Grade 12 curriculum page
│   ├── components/            # Reusable React components
│   │   ├── AudioPlayer.tsx    # 🆕 Custom audio streaming component
│   │   ├── Navigation.tsx     # Site navigation
│   │   └── ui/               # Shadcn/ui components
│   └── lib/
│       └── lessons.ts         # Lesson data and utilities
├── public/                    # Static assets
│   ├── images/               # Site images and logos
│   └── lessons/              # Audio files and presentations
├── out/                      # 🆕 Production build output (generated)
└── README.md                 # This documentation
```

## Deployment Status
- **Platform**: Cloudflare Pages
- **Status**: ✅ Active - Ready for redeployment with audio streaming
- **Build**: Static export optimized for global CDN delivery
- **Last Updated**: October 2025 - Added comprehensive audio streaming functionality

## Next Steps for Development
1. **Enhanced Audio Features**: Consider adding playlist functionality for sequential lesson playback
2. **Progress Tracking**: Implement user progress tracking across lessons
3. **Interactive Elements**: Add quizzes or reflection prompts integrated with audio lessons
4. **Accessibility**: Enhance screen reader support and keyboard navigation for audio controls
5. **Performance**: Implement audio preloading strategies for faster lesson access

## Audio File Management
Audio files are hosted on GitHub and streamed directly to users:
- **Source**: GitHub raw files from the lessons directory
- **Format**: MP3 for broad browser compatibility  
- **Streaming**: Real-time streaming without requiring full download
- **Fallback**: Download option remains available for offline access

The audio player component handles loading states, error recovery, and provides a professional media experience suitable for educational content.