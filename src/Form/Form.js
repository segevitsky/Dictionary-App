import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { Button, Input, FormDiv, P } from './formStyles';

const Form = (props) => {
  const {register, handleSubmit} = useForm();
  const [inValid, setInvalid] = useState('');

  const onSubmit= data => {
    props.onSubmit(data.main);
    window.scrollBy(0, 900);
  }

  const inputChange = (e) => {
      let value = e.target.value;
      // value = value.replace(/[^A-Za-z]/ig, '')
      let b = /^[a-zA-Z]*$/.test(value)
      if (b === false) {
        setInvalid('**Please enter English Letters Only')
      } else {
        setInvalid('')
        props.inputChange(value);
      }
  }



    return (
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
            <label> Enter One English Letter: </label>
            <Input value={props.input} onChange={inputChange} ref={register}  type="text" name='main' maxLength="1" required/>
            <P style={{ color: '#8884d8'}}> {inValid} </P>
            <Button> Submit </Button>
        </FormDiv>
    )
}

const mapStateToProps = state => ({
    input: state.data.input,
    words: state.data.sampleWords
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (input) => dispatch(actions.sendData(input)),
    inputChange: (input) => dispatch(actions.saveInput(input))
  })

export default connect(mapStateToProps,mapDispatchToProps)(Form);

