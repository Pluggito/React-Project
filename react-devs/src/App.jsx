import Header from './Head.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card/Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './_userGreeting.jsx/UserGreeting.jsx';
import  numberGuess from './numberGuess.jsx'


function App() {

  return(
    <>
       <UserGreeting isLoggedIn={true} username="Thaplug"/>
       <numberGuess number:{'2'} guessRight="correct" />
    </>
   
  );
}  

export default App