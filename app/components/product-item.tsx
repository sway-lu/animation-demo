import { motion } from 'motion/react'
import cn from 'classnames'

interface Props {
  color: 'green' | 'red'
  translateX: number
}

export default function ProductItem({ color, translateX }: Props) {
  return (
    <motion.div
      initial={{ translateX: 0 }}
      animate={{ translateX }}
      transition={{ bounce: 0 }}
      className={cn(
        'h-56 rounded-3xl shadow-2xl',
        color === 'red' && 'bg-red-700',
        color === 'green' && 'bg-green-300'
      )}
    />
  )
}
