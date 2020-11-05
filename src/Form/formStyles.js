import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 1em;
  background-color: #8884d8;
  font-size: 24px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;  
  transition: all 350ms ease-in-out;
  &:hover {
    color: #F6F7E5;
}
`

export const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: .25em;
    padding: .5em 1em;
    margin-bottom: 1e,;
    font-size: 1.2em;
`;

export const FormDiv = styled.form`
    height: 20vh;
    align-items: stretch;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
`;