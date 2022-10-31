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
                  <div className='bg-second rounded-md flex align-items-center w-2/4 mx-auto mb-2 py-4 pl-6 pr-30 text-start text-2xl relative'>
                    <div className='flex content-center'>
                      <span className='text-gray-400 text-center text-base border border-solid border-gray-400 w-7 h-7 rounded-full flex mr-2 align-items-center justify-center'>{index + 1}</span>
                      <span className={task.status ? 'line-through text-xl opacity-30 flex-1 w-[450px]' : 'text-xl flex-1 w-[450px]'}>{task.title}</span>
                    </div>
                    <div className='absolute top-2/4 translate-y-[-50%] w-auto right-[15px] inline-block'>
                      <span title='Completed / Not Completed'
                        onClick={ (e) => markDone(task.id) }
                        className='text-success inline-block mx-2.5 cursor-pointer'
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
                          className='text-warning inline-block mx-2.5 cursor-pointer'
                        >
                          <FontAwesomeIcon icon={faPen}/>
                        </span>
                      )}
                      <span title='Delete'
                        onClick={ () => deleteTask(task.id)}
                        className='text-danger inline-block mx-2.5 cursor-pointer' 
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