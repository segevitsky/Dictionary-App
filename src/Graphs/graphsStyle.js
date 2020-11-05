import styled from '@emotion/styled'

export const GraphsCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 320px) {
    width: 100vw;
    height: 100vh;
}
@media (min-width: 768px) {
    width: 50vw;
}
`;


export const Header = styled.h3`
    color: mediumpurple;
    font-weight: 200;
    margin-bottom: 2em;
    text-align: center;
    @media (min-width: 320px) {
        font-size: 1.5em;
    }
    @media (min-width: 768px) {
        font-size: 2em;
    }
`;