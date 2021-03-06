// import Api from ".";

export  const Auth={
  _token:null,

  get isLoggedIn(){
    return!!this._token;
  },

init(){
  try{
    const token=window.localStorage.getItem('token');
    this._token=JSON.parse(token);
  }
  catch(err){
    console.error(err);
  }
},


  login(){
    this._token='token';
    this._storeToken();
  },

logout(){
  try{
    window.localStorage.removeItem('token',JSON.stringify(this._token));
  }
  catch(err){
    console.error(err);
  }
},


  _storeToken(){
    try{
      window.localStorage.setItem('token',this._token);
    }
    catch(err){
      console.error(err);
    }
  },

};

export function init(){
  Auth.init();
}

//export default Api;
