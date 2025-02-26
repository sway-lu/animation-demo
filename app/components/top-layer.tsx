'use client'

import { motion } from 'motion/react'
import ProductGrid from './product-grid'

interface Props {
  expanded: boolean
  onExpandedChange: (expanded: boolean) => void
}

export default function TopLayer({ expanded, onExpandedChange }: Props) {
  const top = expanded ? 0 : '75vh'

  const expand = () => onExpandedChange(true)

  return (
    <motion.div layout animate={{ top }} className="fixed inset-x-0">
      <div
        onClick={expanded ? () => onExpandedChange(false) : undefined}
        className="flex items-center justify-center mb-3"
      >
        <motion.div
          animate={{ opacity: expanded ? 0 : 1 }}
          onClick={() => onExpandedChange(true)}
          className="bg-white/80 font-bold px-8 py-3 rounded-3xl"
        >
          See (5) More
        </motion.div>
      </div>

      <motion.div
        drag="y"
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        onDragEnd={(_, { offset }) => {
          if (offset.y > 100) {
            onExpandedChange(false)
          } else if (offset.y < -100) {
            onExpandedChange(true)
          }
        }}
        className="bg-green-400 rounded-t-[3rem]"
      >
        <h1
          onClick={expand}
          className="text-2xl font-bold text-white text-center py-8"
        >
          即時加購享折上折！
        </h1>

        <motion.div
          layoutScroll
          style={{ overflowY: 'scroll' }}
          className="px-6"
        >
          <ProductGrid count={5} color="green" focused={expanded} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
