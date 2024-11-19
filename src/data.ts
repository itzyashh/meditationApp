import { Meditation } from "./types"

export const meditations: Meditation[] = [
  {
    id: 1,
    title: "Quick Relaxation Boost",
    duration: 2,
    description: "A very quick session to help you relax instantly.",
    audioUrl: require("../assets/audio/2Min-zen-cascade-meditation-spa-relaxation-2min.mp3"),
    isVideo: false,
    isPro: false
  },
  {
    id: 2,
    title: "Morning Refresh",
    duration: 5,
    description: "A quick meditation session to relax and refresh.",
    audioUrl: require("../assets/audio/5Min-mindfulness-relaxation-amp-meditation-music-22174.mp3"),
    isVideo: false,
    isPro: false
  },
  {
    id: 3,
    title: "Midday Rejuvenation",
    duration: 10,
    description: "A short meditation session to help you unwind.",
    audioUrl: require("../assets/audio/10Min-spa-ambient-10min-253179.mp3"),
    isVideo: false,
    isPro: true
  },
  {
    id: 4,
    title: "Deep Relaxation",
    duration: 20,
    description: "A longer meditation session for deeper relaxation.",
    audioUrl: require("../assets/audio/15min-gentle-piano-melodies-embracing-the-calm-waves-of-a-serene-evening-240215.mp3"),
    isVideo: false,
    isPro: true
  },
  {
    id: 5,
    title: "Complete Serenity",
    duration: 30,
    description: "A comprehensive meditation session for complete relaxation.",
    audioUrl: require("../assets/audio/30Min-spiritual-meditation-30-mins-201945.mp3"),
    isVideo: false,
    isPro: false
  }
]