'use client'

import { useState } from 'react'
import BottomLayer from './components/bottom-layer'
import TopLayer from './components/top-layer'
import { useMotionValueEvent, useScroll } from 'motion/react'

export default function Home() {
  const [isTopExpanded, setTopExpanded] = useState(false)

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (y) => {
    if (y >= 1) {
      setTopExpanded(true)
    }
  })

  return (
    <div className="overflow-x-hidden">
      <BottomLayer focused={!isTopExpanded} />
      <TopLayer expanded={isTopExpanded} onExpandedChange={setTopExpanded} />
    </div>
  )
}
