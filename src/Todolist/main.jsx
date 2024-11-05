import Input from './input'
import './main.css'
import {useState} from 'react'      

export default function Todolist(props)
{

    const [pop,setPop] = useState(false)
    const [tasks,setTasks] = useState([])

    const getData = (set) => {

        if(set.task!==undefined)
        {
            const task = set.task
            setTasks( (previousState) => {return[...previousState,task]} )
        }
        setPop(set.pop)

    }
    
    const getState = (pop) => {setPop(pop)}

    function  remove (event)
    {

        const newTasks = tasks.filter( (e) => e !== event )
        setTasks(newTasks)

    }

    console.log(tasks)

    return(

    <>  


        <title>Todo.com</title>
        <link rel="stylesheet" href="style.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&family=Sofadi+One&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Protest+Guerrilla&family=Sofadi+One&display=swap" rel="stylesheet"/>

         <h1>Todo List</h1>
        {/* <div className="all">
            <div className="container">
                <div className="book-container">
                    <h2>Task 1</h2>
                    <br/>
                    <p>Make your bed</p>
                    <button id="remove">Remove</button>
                </div>  
            </div>
        </div> */}

        <button id="add" onClick={ () => {setPop(true)} }>+</button> 

        {pop && <Input  get1={getData} get2 = {getState}/>}

        <ul>
            { tasks.map( (e,index) => 
            
                <div className="container" key={index}>
                    <div className="book-container">
                        <h2>Task {index+1}</h2>
                        <br/>
                        <p>{e}</p>
                        <button id="remove" onClick={() => remove(e)}>Remove</button>
                    </div>  
                </div>
            
            ) }
        </ul>

     
    </>

    )

}

