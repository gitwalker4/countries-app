import profileImage from './img/walker-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Walker Tolbert</h2>
      <img src={profileImage} alt="profile" />
    </div>
  );
}

export default App;
