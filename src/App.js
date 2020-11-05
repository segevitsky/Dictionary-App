import Graphs from './Graphs/Graphs';
import Form from './Form/Form';
import { AppCont,Headline,Header, WordsDiv, WordDesign  } from './appStyles';
import { connect } from 'react-redux';



const App = (props) => {
  const randomWords = props.words.map((wordArray,i) => (
    <WordDesign key={i}> {wordArray[0]} </WordDesign>
  ))

  return (
    <AppCont>
      <Header>
        <WordsDiv> 
          {randomWords} 
        </WordsDiv>
        <Headline> Dictionary App </Headline>
        <Form/>
      </Header>
       <Graphs />
    </AppCont>
  );
}


const mapStateToProps = state => ({
  words: state.data.sampleWords,
})


export default connect(mapStateToProps,'')(App);
