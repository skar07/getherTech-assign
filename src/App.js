import React from 'react';
import './App.css';




function App() {
  const [apiresponse, setApiresponse] = React.useState([]);

  const fetchAPI = async() => {
    const response = await fetch('https://dcapi.gether.net.in/api/serve/collection/list/speakers/dummy', {
      method: 'POST',
      body: {
            "intervieweeName"  : "Sanskar"
      }
    });
    return response.json();
    //console.log(data);
//     setApiresponse(data)
  }

  React.useEffect(() => {
       fetchAPI()
       .then(response => setApiresponse(response.response.data.speakers))
 
  }, []);
  return (
    <div className="App">
      {console.log(apiresponse)}
      {apiresponse.map(({userData}) => {
          
             return <DisplayUser key={userData.id} userData={userData}/>
           
      })}
    </div>
  );
}

const DisplayUser = ({userData}) => {
      const {UserName, LoginField, Designation, Bio, imagePath, Summary} = userData
      return (
                        <div className='info-card'>
                        <img src={imagePath} alt='userImage' className='user-image'/>
                        <h3 >{UserName}</h3>
                        <p>Designation: {Designation}</p>
                        <div className='textContent'>
                              <p >{Summary}</p>
                              <p>Bio:{Bio}</p>
                        </div>
                              <p>Email: {LoginField}</p>
                              
                        </div>
      )
}

export default App;
