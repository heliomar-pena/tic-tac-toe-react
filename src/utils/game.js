export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }

  return [];
}

export const hide = async (ms, setAnimation, setIsOpen) => {
  // Sets a temporary class
  setAnimation('close')

  // Waits for n milliseconds 
  await new Promise(resolve => setTimeout(resolve, ms))

  setAnimation('');

  // Hides the element
  setIsOpen(false);
}
