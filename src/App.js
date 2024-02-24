import {lazy, Suspense} from 'react';
function App() {
  const ToDo = lazy(()=>import('./ToDo'));
  const ToDoContext = lazy(()=>import('./ToDoReducer'));
  return(
    <Suspense fallback={<>loading...</>} >
      {/* You can render <ToDo/> and check it's functionality to know the difference
      between a simple app and app created using useReducer hook.  */}
    <ToDoContext/>
    </Suspense>
  )
}

export default App;
