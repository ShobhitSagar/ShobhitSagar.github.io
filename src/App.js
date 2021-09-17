import './App.css';
import BrandHeader from './templates/BrandHeader'
import LinksBar from './templates/LinksBar'
import Profile from './templates/Profile'
import AboutMe from './templates/AboutMe/AboutMe'
import Projects from './templates/Projects'
import Blogs from './templates/Blogs'
import Contact from './templates/Contact'
import Connect from './templates/Connect'
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div className="App">
      <BrandHeader />
      <LinksBar />
      <Profile />
      <AboutMe />
      <Projects />
      <Blogs />
      <Contact />
      <Connect />
      <ScrollToTop smooth style={{padding: '8px'}} />
    </div>
  );
}

export default App;