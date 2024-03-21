import styled from "styled-components";


export const Wrapper = styled.div`
 
`;


export const Button = styled.button`

width: 120px;
padding: 0.6em 1.2em;
margin-bottom: 20px;

border-radius: 8px;
border: 1px solid grey;

font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #888;
color: moccasin;

cursor: pointer;
transition: border-color 0.25s;

&:hover {
    border-color: #888;
}
&:focus,
&:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`;


export const Board = styled.div`
display: flex;
flex-direction: column-reverse;
flex-wrap: wrap;

width: 480px;
height: 480px;
border: 6px solid #888;
border-radius: 4px;
`;


export const Square = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 60px;
height: 60px;

background-color: ${props => (props.isWhite ? 'moccasin' : 'grey')};

`;

export const QueenImage = styled.img`
  width: 30px;
  height: 30px;
`;