import React, { useState } from 'react'

const ClickCounter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Count: {counter}
      </button>
    </div>
  )
}

export default ClickCounter
