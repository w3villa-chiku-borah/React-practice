import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    
   const handleUpClick = (e) =>{
    e.preventDefault();

  

    // console.log(text2)
   
    console.log("upwasclick" + text)

    let newText = text.toUpperCase()
    setText(newText)

   }
    
   const handleclearClick = (e) =>{
    e.preventDefault();

  

     

    
    setText("")

   }

   const handleOnChange = (e)=>{

  
    console.log("hi")
    setText(e.target.value)
   }


    const [text,setText] = useState('Enert your text')

    // setText = "chiku";
  return (
    <form className='container' id="formId" >
  
    <div className="form-group">
      <label >{props.heading}</label>
      <textarea className="form-control" value={text}id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className='btn btn-primary mt-3 me-4' onClick={handleUpClick}>
   convert to uppercase
    </button>
    <button className='btn btn-primary mt-3 ' onClick={handleclearClick}>
       clear Text
    </button>
    <div>
       <h1>Your Word Summery</h1>
       <p> {text.split(" ").length} words and {text.length} charecter</p>
       <p> {0.008 * text.split(" ").length} minutess to read</p>
       <h2>Preview</h2>
       <p >
        {text}
       </p>
      
    </div>

  </form>
  )
}


TextForm.propTypes = {
    heading: PropTypes.string
}