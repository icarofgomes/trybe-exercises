import './App.css';

const Task = (value, index) => {
    return <li key={index}>{value}</li>
}

function App() {
  const taskList = ['Acordar', 'Café da manhã', 'Escovar os dentes', 'Estudar'];
  return (
    <div className="App">
      <ul>
        {taskList.map((task, index) => Task(task, index))}
      </ul>
    </div>
  );
}

export default App;
