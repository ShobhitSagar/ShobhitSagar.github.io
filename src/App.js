import './App.css';
import BrandHeader from './templates/BrandHeader'
import LinksBar from './templates/LinksBar'
import Profile from './templates/Profile'

function App() {
  return (
    <div className="App">
      <BrandHeader />
      <LinksBar />
      <Profile />
      <div id='work-in-progress-div'>
        <b>Work in progress. . .</b>
        <iframe src="https://giphy.com/embed/fVeAI9dyD5ssIFyOyM" width="100%" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default App;