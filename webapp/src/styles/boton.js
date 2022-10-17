import styled from "styled-components";

const Boton = styled.button`
    appearance: none;
    background-color: ${props => props.color ? props.color : "transparent" };
    border: 2px solid #1A1A1A;
    border-radius: 15px;
    box-sizing: border-box;
    color: #3B3B3B;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    font-weight: 600;
    line-height: normal;
    margin: 1em;
    min-height: 2.5em;
    min-width: 2em;
    outline: none;
    padding: 0.25em 1em;
    text-align: center;
    text-decoration: none;
    user-select: none;
    touch-action: manipulation;
    width: 100%;
    max-width: 15%;
    will-change: transform;


  &:hover{
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }
`;

export default Boton;
