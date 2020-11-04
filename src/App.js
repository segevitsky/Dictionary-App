import Graphs from './Graphs/Graphs';
import Form from './Form/Form';
import styled from '@emotion/styled'
import { device } from './device';

const App = () => {

  return (
    <AppCont>
      <Header>
        <h1> Dictionary App </h1>
        <Form/>
      </Header>
       <Graphs />
    </AppCont>
  );
}

export default App;


const AppCont = styled.div`
  @media ${device.mobileS} {
  display: grid;  
}
  @media ${device.tablet} {
  display: flex;

  } 
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: white;
  width: 50vw;
  @media ${device.mobileS} {

  }
  @media ${device.tablet} {

  } 
`;