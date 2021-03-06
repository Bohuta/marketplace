import React from 'react';
import ReactDOM from 'react-dom';
import Router from './scenes/router';
import './style.css';
import Api from './Api';



class App extends React.Component{
  constructor(props){
    super(props);

    Api.init();

  }

  render(){
     return(
       <div className="root" >
     <Router/>
     </div>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


