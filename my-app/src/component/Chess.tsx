import { useState } from "react"

const Chess = () => {
  const [boardState, setBoardState] = useState([
    [2,  3,  4,  5,  6,  4,  3,  2],
    [1,  1,  1,  1,  1,  1,  1,  1],
    [0,  0,  0,  0,  0,  0,  0,  0],
    [0,  0,  0,  0,  0,  0,  0,  0],
    [0,  0,  0,  0,  0,  0,  0,  0],
    [0,  0,  0,  0,  0,  0,  0,  0],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-2, -3, -4, -5, -6, -4, -3, -2],
  ]);

  return (
    <div>
       <h1>Chess</h1>
    </div>
  )
}

export default Chess
