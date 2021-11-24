import { useEffect,useState } from "react";

const Table = (props) =>{
    const [input,setInput]=useState([])
    useEffect(()=>{
        setInput(props.inp)
    },[props.inp])
    return(
        <div className='table-responsive'>
        <table className='table table-striped align-middle' style={{marginRight:'2px'}}>
        {input.length !==0 && 
        <tbody >
        <tr style={{border:'none'}}>
        <th style={{border:'none'}}></th>
        {input[0].map((ele,key)=>(
            <th>{key + 1}</th>
        ))}
        </tr>
        {input.map((item,key)=>(
            
            <tr>
            <th style={{border:'none'}}>{key +1}</th>
                {item.map((ele)=>(
                    <td style={{border:'1px solid black',padding:'1px',color:"whitesmoke",backgroundColor:"black"}}>{ele}</td>
                ))}
            </tr>
        ))}
        </tbody>}
        </table>
        </div>
    )
}

export default Table;