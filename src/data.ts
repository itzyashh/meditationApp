import { Meditation } from "./types"

export const meditations: Meditation[] = [
  {
    id: 1,
    title: "Quick Relaxation Boost",
    duration: 2,
    description: "A very quick session to help you relax instantly.",
    audioUrl: "https://example.com/audio/2-minute-quick-relaxation.mp3",
    isVideo: false,
    isPro: false
  },
  {
    id: 2,
    title: "Morning Refresh",
    duration: 5,
    description: "A quick meditation session to relax and refresh.",
    audioUrl: "https://example.com/audio/5-minute-meditation.mp3",
    isVideo: false,
    isPro: false
  },
  {
    id: 3,
    title: "Midday Rejuvenation",
    duration: 10,
    description: "A short meditation session to help you unwind.",
    audioUrl: "https://example.com/audio/10-minute-meditation.mp3",
    isVideo: false,
    isPro: true
  },
  {
    id: 4,
    title: "Deep Relaxation",
    duration: 20,
    description: "A longer meditation session for deeper relaxation.",
    audioUrl: "https://example.com/audio/20-minute-meditation.mp3",
    isVideo: false,
    isPro: true
  },
  {
    id: 5,
    title: "Complete Serenity",
    duration: 30,
    description: "A comprehensive meditation session for complete relaxation.",
    audioUrl: "https://example.com/audio/30-minute-meditation.mp3",
    isVideo: false,
    isPro: false
  }
]