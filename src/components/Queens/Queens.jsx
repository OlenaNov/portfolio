import { useState } from "react";
import { Board, Button, QueenImage, Square, Wrapper } from "./Queens.styled";
import svgQueen from '../../images/queen.svg';
import valuesQueens from '../../constants/valuesQueens';


const Queens = () => {
    const [positions, setPositions] = useState([]);
  
    const makeQueenPosition = () => {
      let arrValues = [...valuesQueens];
      const allPosition = [];
  
      for (let i = 0; i < 8; i += 1) {
        const currentPosition = arrValues[Math.floor(Math.random() * arrValues.length)];
        allPosition.push(currentPosition);
  
        arrValues = arrValues.filter(
          item =>
            !item.includes(currentPosition[0]) &&
            !item.includes(currentPosition[1]) &&
            item !== currentPosition
        );
      }
      return allPosition;
    };
  
    const makeMarkupBoard = () => {
      const positionsArr = makeQueenPosition();
      let isWhite = false;
  
      const squares = [];
  
      for (let i = 0; i < 64; i += 1) {
        const dataVal = `${String.fromCharCode(97 + Math.floor(i / 8))}${(i % 8) + 1}`;
        const queen = positionsArr.includes(dataVal) ? <QueenImage src={svgQueen} alt="Queen" /> : null;
  
        squares.push(
          <Square key={i} isWhite={isWhite}>
            {queen}
          </Square>
        );
  
        if ((i + 1) % 8 !== 0) {
          isWhite = !isWhite;
        }
      }
  
      return squares;
    };
  
    const refresh = () => {
      setPositions(makeQueenPosition());
    };
  
    return (
      <Wrapper>
        <Button type="button" onClick={refresh}>
          REFRESH
        </Button>
        <Board>{makeMarkupBoard()}</Board>
      </Wrapper>
    );
  };
  
  export default Queens;