import {useReducer, useState} from 'react';
import './ToDo.css';

const initialTodos = [];

const reducer = (state, action) => {

  const remove = (index) => {
    const dupList = [...state]
    dupList.splice(index, 1);
    return[...dupList]
  }

  const getStatus = (name, complete, index) =>{
    const dupList = [...state];
    dupList[index] = {name, complete:!complete, index};
    return [...dupList]
  }

  switch(action.type){
    case 'ADD':
      return [
        ...state,
        {name:action.value, complete:false, index:state.length}
      ]
    case 'DELETE':
      return remove(action.value);
    case 'STATUS':
      return getStatus(action.name, action.complete, action.index)
  }
}

function ToDoReducer() {
  const [todoList, dispatch] = useReducer(reducer, initialTodos);
  const [todo, setTodo] = useState('');

  const renderTodo = ({name, complete}, index) => {
    return(
      name?
      <div className="wrapperDiv">
      <p style={{
        textDecoration:complete?'line-through':''
      }} >{name}</p>
      <button className="editBtn" onClick={()=> dispatch({type:'STATUS', name, complete, index}) }>{complete?'Undone':'Done'}</button>
      <button className="editBtn" onClick={()=>{
        setTodo(name);
        dispatch({type:'DELETE', value:index});
      }} >Edit</button>
      <button className="editBtn" onClick={()=>dispatch({type:'DELETE', value:index})} >Delete</button>
    </div>:<></>
    )
  }
  return (
    <div className="ToDo">
    <div className="wrapperDiv">
      <input value={todo} onChange={({target:{value}})=>setTodo(value)} />
      <button className="addBtn" disabled={!todo.length} onClick={()=>{
        setTodo('')
        dispatch({type:'ADD', value:todo})
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

export default ToDoReducer;
