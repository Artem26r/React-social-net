import styled from "styled-components";


export const CustomButton = styled.button`
  background-color: rgba(0, 201, 214, 0.2);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0,201,214);
  border-image: initial;
  border-radius: .5rem;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 1.6rem;
  width: 30%;
  padding: 1rem;

  &:active {
    border: 1px solid orange;
    opacity: 0.8;
  }
`

export const CustomInput = styled.input`
    background-color: rgba(0, 201, 214, 0.2);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(0,201,214);
    border-image: initial;
    margin-bottom: 1rem;
    box-sizing: border-box;
    border-radius: .5rem;
    outline: none;
    cursor: pointer;
    color: white;
    font-size: 1.6rem;
    width: 30%;
    padding: 1rem;
    
    &:focus {
    border: 1px solid orange;
    opacity: 0.8;
    }
`