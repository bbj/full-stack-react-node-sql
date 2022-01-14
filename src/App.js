import './App.css';
import React, { useState } from 'react';

function App() {
  const [returnedData, setReturnedData]         //declare state variable named 'returnedData'
    = useState(['hi']);                         //useState(0) is equiv to this.state={returnedData:'hi'} with class model 

  const getData = async (url) => {
    const newData = await fetch(url, {          //fetch is built-in, no need library, return Promise<Response>
      method: 'GET',                            //POST, PUT, DELETE
      headers: {                                //tells server how we are sending/accepting data
        'content-type': 'application/json',     //we send JSON
        'Accept': 'application/json'            //we accept JSON in response
      }
    })
    .then(res => res.json());                   //convert Response to JSON
    console.log(newData);                       //synchonous call, as getData() is 'async' and we do 'await fetch()'
    setReturnedData(newData.result);            //using the state variable setter
  }
  //getData('/api');                              //call fetch, called a lot when render, remove it

  return (
    <div className="App">
      <button onClick={
        () => getData('/quit')}>Click           
      </button>
      {returnedData}
    </div>
  );
}

export default App;
