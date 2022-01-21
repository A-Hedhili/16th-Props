import './App.css';
import Profile from './Profile/Profile';
import Image from './Profile/Image';
import PropTypes from 'prop-types'; 




function App() {
  const name="Amina Hedhili"
  const bio="passionate about Web Development"
  const profession="happily a student at GoMyCode"

const handleName=()=> {
 alert(name)
  
 }

  return (
    <div className="App">
      <Profile myName={name} aboutMe={bio} myProfession={profession} handleName={handleName}/>  
      <Image> <img src="/avatar.jpg" width={300} width={250}></img> </Image>
    </div>
  );
}

export default App;


 