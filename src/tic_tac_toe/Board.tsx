import React from 'react'
import Square from './Square'

type SquareValue = 'X' | 'O' | null

export default function Board() {
  // Track the 9 squares' values in Board state. Start empty for actual gameplay.
  const [values, setValues] = React.useState<SquareValue[]>(Array(9).fill(null))
  // Track whose turn it is to play next: 'X' or 'O'
  const [nextPlayer, setNextPlayer] = React.useState<'X' | 'O'>('X')

  const handleSquareClick = React.useCallback((index: number) => {
    // Guard using the current rendered state to avoid relying on async state updates
    if (values[index] !== null) return

    // Place the current player's mark
    setValues(prev => {
      const next = [...prev]
      next[index] = nextPlayer
      return next
    })

    // Toggle to the other player
    setNextPlayer(p => (p === 'X' ? 'O' : 'X'))
  }, [values, nextPlayer])

  return (
    <div
      className="ttt-board"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: 8 }}
    >
      {values.map((val, i) => (
        <Square key={i} value={val} onClick={() => handleSquareClick(i)} />
      ))}
    </div>
  )
}
