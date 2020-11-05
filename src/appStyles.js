import styled from '@emotion/styled'

export const AppCont = styled.div`
@media (min-width: 320px) {
  display: grid;
}
@media (min-width: 768px) {
  display: flex;
  }
`;


export const Header = styled.div`
  background-image: linear-gradient(#282c34, #fff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: white;
  @media (min-width: 320px) {
    width: 100vw;
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
`;


export const Headline = styled.h1`
    font-size: 4em;
    margin-bottom: 2em;
    text-align: center;
`

export const WordsDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    transition: all 350ms ease-in-out;

    `;
    
    export const WordDesign = styled.h4`
    padding: 3em 2em;
    box-shadow: 2px 2px rgba(0,0,0,0.23);
`
