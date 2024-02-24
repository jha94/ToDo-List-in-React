import {lazy, Suspense} from 'react';
function App() {
  const ToDo = lazy(()=>import('./ToDo'));
  const ToDoContext = lazy(()=>import('./ToDoReducer'));
  return(
    <Suspense fallback={<>loading...</>} >
    <ToDoContext/>
    </Suspense>
  )
}

export default App;
