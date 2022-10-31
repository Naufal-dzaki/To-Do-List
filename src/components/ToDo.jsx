import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan, faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
        {toDo && toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map( (task, index) => {
              return(
                <React.Fragment key={task.id}>
                  <div className='bg-second rounded-md flex align-items-center w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto mb-2 py-4 px-3 sm:px-4 md:px-5 text-start text-2xl relative content-center'>
                      <span className='flex-none text-gray-400 text-center text-base border border-solid border-gray-400 w-7 h-7 rounded-full flex mr-2 align-items-center justify-center'>{index + 1}</span>
                      <span className={task.status ? 'grow line-through text-xl opacity-30 flex-1' : 'text-xl flex-1'}>{task.title}</span>
                    <div className='flex-none w-auto self-center'>
                      <span title='Completed / Not Completed'
                        onClick={ (e) => markDone(task.id) }
                        className='text-success inline-block mx-1 sm:mx-1.5 md:mx-2 lg:mx-2.5 cursor-pointer'
                      >
                        { task.status ? (
                          <FontAwesomeIcon icon={faCircleXmark}/>
                        ) : (
                            <FontAwesomeIcon icon={faCircleCheck}/>
                        ) }
                      </span>
                      { task.status ? null : (
                        <span title='Edit'
                          onClick={ () => setUpdateData(task) }
                          className='text-warning inline-block mx-1 sm:mx-1.5 md:mx-2 lg:mx-2.5 cursor-pointer'
                        >
                          <FontAwesomeIcon icon={faPen}/>
                        </span>
                      )}
                      <span title='Delete'
                        onClick={ () => deleteTask(task.id)}
                        className='text-danger inline-block mx-1 sm:mx-1.5 md:mx-2 lg:mx-2.5 cursor-pointer' 
                        >
                        <FontAwesomeIcon icon={faTrashCan}/>
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              )
            } )
          }
        </>
    
    )
}

export default ToDo