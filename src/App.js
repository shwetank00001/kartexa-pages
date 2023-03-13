import Latest from './components/Latest'
import People from './components/People'
import Benefits from './components/Benefits'


function App() {
  return (

    <div>
      <div className="App">
        <Latest />
        <People />
        <Benefits />
      </div>

      <div className='follow-footer'>
        <h2>FOLLOW US</h2>
        <p>1.2M People are following this. Be the first of your friends to follow this</p>

      </div>


    </div>

  );
}

export default App;
