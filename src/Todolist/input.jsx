import {useState} from 'react'
import './input.css'

export default function Input(props)
{


    const [pop,setPop] = useState()

    const[task,setTask] = useState()

    const set = {task,pop}

    function handleSubmit(e)
    {
        e.preventDefault()
        setPop(false)
        props.get1(set)
        
    }
    
    function cancel(e)
    {
        
        e.preventDefault()
        setPop(false)
        props.get2(pop)

    }

    return(

        <>
        
        <div id="overlay"></div>
                <div id="popup">
                    <h2>Add a Task</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter Task" id="title-input" className="in" onChange={ (e) => {setTask(e.target.value)} }/>
                        <input value='Add' type='submit' className="pop1" id="add-new" />
                        <button className="pop1" id="cancel" onClick={cancel}>Cancel</button>
                    </form>

                </div>
        
        </>

    )

}