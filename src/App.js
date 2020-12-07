import './App.css';
import Task from './components/Task'
import {useState} from 'react'

function App() {
  const [list,setList] = useState([]);
  const [input, setInput] = useState("")
  const [key, setKey] = useState(0)
  const [close, setClose] = useState(false)

  const deleteTask = (id) =>{
      console.log(id);
      setList((oldList)=>oldList.filter((task)=>task.key!==id))
  }
  const addTask = (e) =>{ 
    if(e.keyCode===13){
      console.log(input,key)
      setList([...list,{text:input,key:key}]);
      setKey((oldKey)=>oldKey+1);
      setInput("");
    }
  }
  
  return (
    <div id="container">

    <h1>To-Do List<i onClick={(e)=>{setClose(!close)}} className={`fas fa-plus ${close?null:"rotate"}`}></i></h1>

    <input type="text" className={close?"hide":null}onKeyDown={addTask} onChange={(e)=>setInput(e.target.value)} value={input} placeholder="Add New ToDo"/>

    <ul>
      {
        list.slice(0).reverse().map(task=>{
          return(<Task key={task.key} id={task.key} text={task.text} deleteTask={deleteTask}/>)
        })
      }
    </ul>
  </div>
  );
}

export default App;
