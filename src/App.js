import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm'
import UpdateForm from './components/UpdateForm'
import ToDo from './components/ToDo'

// import './index.css';
import './App.css';

function App() {
    
  //Task state
  const [toDo, setToDo] = useState([
    {id: 1, title: "Learn React JS", status: false},
  ])

  //Temp state
  const [newTask, setNewTask] = useState('')
  const [updateData, setUpdateData] = useState('')

  //add task
  const addTask = () => {
    if(newTask) {
      let number = toDo.length + 1
      setToDo([...toDo, { id: number, title: newTask, status: false }])
      setNewTask('')
    }
  }

  //delete task
  const deleteTask = (id) => {
    setToDo(toDo.filter( task => task.id !== id ))
  }

  //mark task as completed
  const markDone = (id) => {
    setToDo(toDo.map( 
        task => task.id === id ? ({ ...task, status: !task.status }) : (task)
    ))
  }

  //cancel update
  const cancelUpdate = () =>{
    setUpdateData('')
  }

  //change task for update (get input value from update form)
  const changeTask = (e) => {
    setUpdateData({...updateData, title: e.target.value})
  }

  //update task
  const updateTask = () =>{ 
    let removeOldRecords = [...toDo].filter( task => task.id !== updateData.id)
    setToDo([...removeOldRecords, updateData])

    setUpdateData('')
  }

  return (
    <div className="text-center App">
      <h2 className='font-medium my-4 text-3xl'>To Do List</h2>

      {updateData && updateData ? (
        <UpdateForm 
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm 
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      ) }

      {/* Display To Do List */}

      {toDo && toDo.length ? '' : 'No Task...'}
        <ToDo
            toDo={toDo}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
        />
    </div>
  )
}

export default App;
