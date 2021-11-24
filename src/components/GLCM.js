import { useEffect, useState } from "react";
import Table from "./Table";
const GLCM = () => {
    const [angle,setAngle] = useState(0)
    const [distance,setDistance]=useState(1)
    const [inputMatrix,setinputMatrix] = useState([])
    const [outputMatrix,setOutput] = useState()
    const [flag,setFlag] = useState(false)
    

    useEffect(()=>{
        createMatrix(angle,distance)
    },[angle,distance])
    useEffect(()=>{
        let input=[]
        for (let i = 0; i < 6; i++) {
            input[i] = []; 
            for (let j = 0; j < 6; j++) { 
              input[i][j] = parseInt(Math.random() * 7 + 1) ;
            }
          }
        setinputMatrix(input)
        createMatrix(angle,distance,input)
        let output=[]
        
    },[])
    const handleAngle =(e) =>{
        
        setAngle(parseInt(e.target.value))
    }

    const createMatrix=(angl=0,distanc=1,input=inputMatrix)=>{
        
        let out=Array(7).fill().map(() => Array(7).fill(0));
        let i=0,j=0,diff=0,ro=0,co=0
        if(angl === 0){
            i=0
            j=0
            co=distanc
            diff=distanc
        }
        else if(angl=== 45){
            i=distanc
            j=0
            co += distanc
            ro -= distanc
            diff=distanc
        }
        else if(angl=== 90){
            i=distanc
            j=0
            ro -= distanc
        }
        else if(angl=== 135){
            i=distanc
            j=distanc
            ro -= distanc
            co -= distanc
        }
       
        for (let row = i; row < input.length; row++) {
            for (let column = j; column < input[0].length; column++) {
                let rowElement = input[row][column]
                if (column < input[0].length -  diff) {
                    let colElement = input[row + ro][column + co]
                    
                    out[rowElement - 1][colElement - 1] += 1
                }
            }
        }
        
        setOutput(out)
        setFlag(true)
    }
    const handleDistance =(e) =>{
       
        setDistance(parseInt(e.target.value))
    }

    return (
        <div>
            <h1 style={{margin:'10px'}}>GLCM</h1>
            <div>
            
            </div>
                <label style={{margin:'10px'}}><strong>Distance :</strong>
                <select id="distances" name="distances" onChange={(e)=>handleDistance(e)}>
                    <option value="1">d=1</option>
                    <option value="2">d=2</option>
                    <option value="3">d=3</option>

                </select></label>

                <label><strong>Angle :</strong></label>
                <select id="angles" name="angles" onChange={(e)=>handleAngle(e)}>
                    <option value="0">0</option>
                    <option value="45">45</option>
                    <option value="90">90</option>
                    <option value="135">135</option>
                </select>
                <div className='row'>
                    <div className='col'>
                        <h2 style={{margin:'15px'}}>Input Matrix</h2>
                        {inputMatrix.length !==0 && <Table inp={inputMatrix}/>}
                    </div>
                
                    <div className='col'>
                    <h2 style={{margin:'15px'}}>Output Matrix</h2>
                        {(flag &&outputMatrix.length!==0) && <Table inp={outputMatrix}/>}
                    </div>        
                </div>
        </div>
    )
}

export default GLCM;