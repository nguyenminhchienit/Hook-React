import './App.css';
//import State from './useState'
import TwoWayBinding from './TwoWayBinding';

function App() {
  return (
    <div className="wrapper" style={{padding: '30px'}}>
      <div>This is Home Page</div>
      <TwoWayBinding></TwoWayBinding>
    </div>
  );
}

export default App;
