import ProductItem from './product-item'

interface Props {
  count: number
  color?: 'green' | 'red'
  focused?: boolean
}

export default function ProductGrid({ count, color = 'red', focused }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <ProductItem
          key={index}
          color={color}
          translateX={focused || index < 2 ? 0 : index * 50}
        />
      ))}
    </div>
  )
}
