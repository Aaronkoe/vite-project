import React from 'react'

type SquareValue = 'X' | 'O' | null

type SquareProps = {
  // The value to display inside the square: 'X', 'O', or nothing
  value?: SquareValue
  // Optional click handler so parent can control gameplay
  onClick?: () => void
  // Optional extra className for styling overrides
  className?: string
}

export default function Square({ value = null, onClick, className = '' }: SquareProps) {
  const content = value ?? ''
  const classes = ['ttt-square', className].filter(Boolean).join(' ')

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={content === '' ? 'empty' : content}
    >
      {content}
    </button>
  )
}
