class Util{
  request(param){
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        success: res => {
          if(res.status === 0){
            typeof resolve === 'function' && resolve(res.data, res.msg)
          } 
          else if(res.status === 10){
            this.doLogin()
          }
          else{
            typeof reject === 'function' && reject(res.msg || res.data)
          }
        },
        error: err => {
          typeof reject === 'function' && reject(err.statusText);
        }
      })
    })
  }
  doLogin(){
    window.location.href = '/login?redirect=' + encodeURIComponent(widdow.location.pathname)
  }
  //store data in localStorage
  setStorage(name, data){
    //validate the type of the data
    let dataType = typeof data
    //json
    if(dataType === 'object'){
      window.localStorage.setItem(name, JSON.stringify(data))
    }
    else if(['number', 'string', 'boolean'].indexOf(dataType) >= 0){
      window.localStorage.setItem(name, data)
    }
    else{alert('this type is not currently supported!')}
  }
  //fetch data from storage
  //if no data, just return empty string 
  getStorage(name){
    let data = window.localStorage.getItem(name);
    if(data){
      return JSON.parse(data)
    }
    else{
      return '';
    }
  }
  //remove the data in localStorage
  removeStorage(name){
    window.localStorage.removeItem(name);
  }
  //error tips
  errorTips(errMsg){
    alert(errMsg || 'It seems there is something wrong')
  }
}

export default Util