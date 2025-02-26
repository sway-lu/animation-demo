import { motion } from 'motion/react'
import ProductGrid from './product-grid'

interface Props {
  focused?: boolean
}

export default function BottomLayer({ focused }: Props) {
  return (
    <motion.div className="bg-red-800 py-16 px-4">
      <div className="flex items-center justify-between text-white">
        <div>街市即日餸</div>
        <div>No Thanks</div>
      </div>

      <h1 className="text-2xl font-bold text-white text-center mt-32 mb-12">
        即時加購享折上折！
      </h1>

      <div className="px-6">
        <ProductGrid count={6} focused={focused} />
      </div>
    </motion.div>
  )
}
