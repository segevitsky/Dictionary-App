import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { Button, Input, FormDiv } from './formStyles';

const Form = (props) => {
  const {register, handleSubmit} = useForm();

  const onSubmit= data => {
    props.onSubmit(data.main);
  }

  const inputChange = (e) => {
      let value = e.target.value;
      value = value.replace(/[^A-Za-z]/ig, '')
      props.inputChange(value);
  }

    return (
        <FormDiv onSubmit={handleSubmit(onSubmit)}>
            <label> Enter One English Letter: </label>
            <Input value={props.input} onChange={inputChange} ref={register}  type="text" name='main' maxLength="1"/>
            <Button> You Got This! </Button>
        </FormDiv>
    )
}

const mapStateToProps = state => ({
    input: state.data.input
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (input) => dispatch(actions.sendData(input)),
    inputChange: (input) => dispatch(actions.saveInput(input))
  })

export default connect(mapStateToProps,mapDispatchToProps)(Form);

