import React ,{useState} from 'react'

export default function Counter(props) {
    const[count,setCounter] = useState(0)
    // const[btn,setBtn] = useState("Dark Mode")
    // const[style,steStyle] = useState({color:'black', backgroundColor:'white'})

    const add=()=>{
        if (count===20)
            setCounter(20)
        else
            setCounter(count+1)
    }

    const remove=()=>{
        if (count===0)
            setCounter(0)
        else
            setCounter(count-1)
    }

    const reset=()=>{
        setCounter(0)
    }

    // const changer=()=>{
    //     if(btn==='Dark Mode'){
    //         setBtn("Light Mode")
    //         steStyle({color:'white', backgroundColor:'black', boder:'1px solid white'})
    //     }
    //     else{
    //         setBtn("Dark Mode")
    //         steStyle({color:'black', backgroundColor:'white'})

    //     }
    // }
    
  return (
    <>
    <div id='counter' style={{ backgroundColor: props.style === 'light' ? 'white' : 'black', color: props.style === 'light' ? 'black' : 'white' }} >
    <div style={{ backgroundColor: props.style === 'light' ? 'white' : 'black', color: props.style === 'light' ? 'black' : 'white' }} className='p-5 container'>
    <h1 style={{ backgroundColor: props.style === 'light' ? 'white' : 'black', color: props.style === 'light' ? 'black' : 'white' }}  >Add, Remove Numbers between 20.</h1>
     <div style={{ backgroundColor: props.style === 'light' ? 'white' : '#343a40', color: props.style === 'light' ? 'black' : 'white' }}  className='border p-3'>
           <h2 className='text-center h1'>{count}</h2>
    <button onClick={add} className='btn btn-outline-success'>Add</button>
    <button onClick={remove} className='btn btn-outline-danger ml-2'>Remove</button>
    <button onClick={reset} className='btn btn-outline-primary ml-2'>Reset</button>
    {/* <button style={style} onClick={changer} className='btn btn-outline-dark ml-2' >{btn}</button> */}
    </div>
    </div>
    </div>
    </>
  )
}
