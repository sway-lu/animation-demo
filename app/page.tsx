'use client'
import { useState } from 'react'
import BottomLayer from './components/bottom-layer'
import TopLayer from './components/top-layer'

export default function Home() {
  const [isTopExpanded, setTopExpanded] = useState(false)

  return (
    <div className="overflow-hidden">
      <BottomLayer focused={!isTopExpanded} />
      <TopLayer expanded={isTopExpanded} onExpandedChange={setTopExpanded} />
    </div>
  )
}
