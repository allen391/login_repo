import Util from '../util/mm';

const _util = new Util()

class User{
  login(loginInfo){
    return _util.request({
      type: 'post',
      url: '/manage/user/login.do',
      data: loginInfo
    })
  }
  checkLoginInfo(loginInfo){
    let username = $.trim(loginInfo.username),
        password = $.trim(loginInfo.password);
    if(typeof username !== 'string' || username.length === 0){
      return{
        status: false,
        msg: 'Invalid username!'
      }
    }
    if(typeof password !== 'string' || password.length === 0){
      return{
        status: false,
        msg: 'Invalid password!'
      }
    }
    return {
      staus: true,
      msg: 'validation passed!'
    }
  }
}
export default User