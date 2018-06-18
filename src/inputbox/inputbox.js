import React, {Component} from 'react';
import User from '../user/user-service';
import Util from '../util/mm';

const _user = new User()
const _util = new Util()

export default class InputBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  onInputChange(e){
    let inputValue = e.target.value,
        inputName = e.target.name
    this.setState({[inputName]: inputValue, })
  }
  onInputKeyUp(e){
    if(e.keyCode === 13){
      this.onSubmit();
    }
  }
  onSubmit(){
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    }
    let checkResult =_user.checkLoginInfo(loginInfo)
    //validation pass
    if(checkResult.status){
      _user.login(loginInfo).then((res) => {
        _util.setStorage('username', res);
      }, (errMsg) => {
        _util.errorTips(errMsg)
      })
    }
    //the validaiton is not passed
    else{
      _util.errorTips(checkResult.msg)
    }
  }
  render(){
    return(
      <div>
        <label for="username">Username</label>
        <input 
          name="username"
          placeholder="username"
          type="text" 
          onChange={e => this.onInputChange(e)}
          onKeyup={e => this.onInputKeyUp(e)}
          />
        <label for="password">Password</label>
        <input type="password"
          name="password"
          placeholder="password"
          onChange={e => this.onInputChange(e)}
          onKeyup = {e => this.onInputKeyUp(e)}
          />
        <button>Submit</button>
      </div>
    )
  }
}