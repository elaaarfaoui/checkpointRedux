import './App.css';
import AddTask from './Component/AddTask/AddTask';
import ListTask from './Component/ListTask/ListTask';
import Task from './Component/Task/Task';

function App() {
  return (

    
    <div className="carte"> 
          <h2 style={{marginBottom :"6%", color:"rgb(240, 17, 101)" , textAlign: "center"}} >What's the Plan for Today?</h2>

    <div className="App">


     <AddTask />
      <ListTask />   

      </div>

    </div>
  );
}

export default App;
