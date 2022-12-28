import './styles/App.css'
import Portrait from './components/Frame';
import WaveBackground from './components/Wave';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <WaveBackground />
      <Navbar />
      <Portrait />
    </div>
  )
}

export default App
