import Graphs from './Graphs/Graphs';
import Form from './Form/Form';
import styled from '@emotion/styled'

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
@media (min-width: 320px) {
  display: grid;
}
@media (min-width: 768px) {
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
  @media (min-width: 320px) {
    width: 100vw;
  }
  @media (min-width: 768px) {
    width: 50vw;

  }
`;