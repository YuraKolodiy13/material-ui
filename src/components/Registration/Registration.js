import React, {Component} from 'react'
import './Registration.scss'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Registration extends Component{

  state = {
    email: ''
  };

  handleSubmitForm(e){
    e.preventDefault();
    console.log(this.state.email)
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    })
  }


  render(){
    return(
      <form onSubmit={(e) => this.handleSubmitForm(e)} className='Registration'>
        <TextField label="Email" onChange={e => this.handleEmailChange(e)} value={this.state.email} type="email" name="email" autoComplete="email" variant="outlined"/>
        <Button type='submit' variant="contained" color="secondary">Submit</Button>
      </form>
    )
  }


}

export default Registration;