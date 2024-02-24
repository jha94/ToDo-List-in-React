import {useState} from 'react';
import './ToDo.css';

function ToDo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const remove = (index) => {
    const dupList = [...todoList]
    dupList.splice(index, 1);
    setTodoList([
      ...dupList
    ])
  }

  const getStatus = ({name, complete}, index) =>{
    const dupList = [...todoList];
    dupList[index] = {name, complete:!complete, index};
    setTodoList([
      ...dupList
    ])
  }

  const renderTodo = ({name, complete}, index) => {
    return(
      name?
      <div className="wrapperDiv">
      <p style={{
        textDecoration:complete?'line-through':''
      }} >{name}</p>
      <button className="editBtn" onClick={()=>getStatus({name, complete}, index)}>{complete?'Undone':'Done'}</button>
      <button className="editBtn" onClick={()=>{
        setTodo(name);
        remove(index)
      }} >Edit</button>
      <button className="editBtn" onClick={()=>remove(index)} >Delete</button>
    </div>:<></>
    )
  }
  return (
    <div className="ToDo">
    <div className="wrapperDiv">
      <input value={todo} onChange={({target:{value}})=>setTodo(value)} />
      <button className="addBtn" disabled={!todo.length} onClick={()=>{
        setTodoList([
          ...todoList,
          {name:todo, complete:false, index:todoList.length}
        ])
        setTodo("")
      }}>Add</button>
    </div>
    <div>
    {
      todoList.length?todoList.map((value, index)=>renderTodo(value, index)):<></>
    }
    </div>
    </div>
  );
}

export default ToDo;
