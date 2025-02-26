import { SyntheticEvent } from 'react'

export const prevent = (fn?: () => void) => (e: SyntheticEvent) => {
  e.preventDefault()
  e.stopPropagation()
  fn?.()
}
