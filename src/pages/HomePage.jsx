import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SportCard from '../components/SportCard'

const sports = [
  {
    id: 'football',
    name: 'Football',
    emoji: '⚽',
    description: 'Guess players, stadiums & Premier League stats',
    color: 'from-green-900 to-green-700',
    border: 'border-green-500',
    btn: 'bg-green-600 hover:bg-green-500',
    badge: 'bg-green-900 text-green-300',
  },
  {
    id: 'cricket',
    name: 'Cricket',
    emoji: '🏏',
    description: 'Guess players, grounds & Test match records',
    color: 'from-blue-900 to-blue-700',
    border: 'border-blue-500',
    btn: 'bg-blue-600 hover:bg-blue-500',
    badge: 'bg-blue-900 text-blue-300',
  },
  {
    id: 'f1',
    name: 'Formula 1',
    emoji: '🏎️',
    description: 'Guess drivers, circuits & championship stats',
    color: 'from-red-900 to-red-700',
    border: 'border-red-500',
    btn: 'bg-red-600 hover:bg-red-500',
    badge: 'bg-red-900 text-red-300',
  },
]

const difficulties = [
  { id: 'easy',   label: 'Easy',   desc: '30s · 1x points' },
  { id: 'medium', label: 'Medium', desc: '20s · 1.5x points' },
  { id: 'hard',   label: 'Hard',   desc: '10s · 2x points' },
]

export default function HomePage() {
  const [selectedSport, setSelectedSport] = useState('football')
  const [selectedDiff, setSelectedDiff]   = useState('medium')
  const navigate = useNavigate()

  const handleStart = () => {
    navigate(`/quiz/${selectedSport}?difficulty=${selectedDiff}`)
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="text-xl font-bold tracking-tight">
          🏆 SportsIQ
        </div>
        <button
          onClick={() => navigate('/leaderboard')}
          className="text-sm text-slate-400 hover:text-white transition-colors"
        >
          Leaderboard
        </button>
      </nav>

      {/* Hero */}
      <motion.div
        className="text-center px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-3">Test your sports knowledge</h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Guess players, stadiums & stats across Football, Cricket and Formula 1
        </p>
      </motion.div>

      {/* Sport Cards */}
      <div className="px-6 mb-2 text-sm text-slate-400">Choose a sport</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 mb-8">
        {sports.map((sport, i) => (
          <SportCard
            key={sport.id}
            sport={sport}
            index={i}
            selected={selectedSport === sport.id}
            onSelect={() => setSelectedSport(sport.id)}
          />
        ))}
      </div>

      {/* Difficulty */}
      <div className="px-6 mb-8">
        <div className="text-sm text-slate-400 mb-3">Difficulty</div>
        <div className="grid grid-cols-3 gap-3">
          {difficulties.map(d => (
            <button
              key={d.id}
              onClick={() => setSelectedDiff(d.id)}
              className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                selectedDiff === d.id
                  ? 'border-blue-500 bg-blue-900/40 text-blue-300'
                  : 'border-white/10 text-slate-400 hover:border-white/30'
              }`}
            >
              {d.label}
              <div className="text-xs font-normal opacity-70 mt-0.5">{d.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Start Button */}
      <div className="px-6 pb-12">
        <motion.button
          onClick={handleStart}
          whileTap={{ scale: 0.97 }}
          className="w-full py-4 rounded-2xl bg-white text-[#0f172a] font-bold text-lg hover:bg-slate-100 transition-colors"
        >
          Start Quiz →
        </motion.button>
      </div>

    </div>
  )
}