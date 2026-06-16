import { motion } from 'framer-motion'

export default function SportCard({ sport, index, selected, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onClick={onSelect}
      className={`cursor-pointer rounded-2xl border p-5 bg-gradient-to-br ${sport.color} ${sport.border} 
        transition-all duration-200 ${selected ? 'ring-2 ring-white scale-105' : 'opacity-70 hover:opacity-100'}`}
    >
      <div className="text-4xl mb-3">{sport.emoji}</div>
      <div className="text-lg font-bold mb-1">{sport.name}</div>
      <div className="text-sm text-white/70 mb-3">{sport.description}</div>
      <div className="flex gap-2 flex-wrap">
        {['Photo', 'Stadium', 'Stats'].map(tag => (
          <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${sport.badge}`}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}