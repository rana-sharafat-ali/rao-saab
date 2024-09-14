import React , {useState} from "react"; 

export default function TextForm(props) {

  const [text, setText ] = useState("Enter text here");

  const upcase=()=>{setText(text.toUpperCase()); props.showAlert("Text Transformed","info")};

const lcase=()=>{setText(text.toLowerCase()); props.showAlert("Text Transformed","info")};

  const userinput=(event)=>{setText(event.target.value)};

  const clr=()=>{setText("") ; props.showAlert("Text Removed","danger")};
  
  return (
    <>
      <div id="textm" className="container mt-5 pt-5">
        <h1 style={{color:props.style==='light'?'black':'white'}}>{props.heading}</h1>
        
        <textarea
        style={{color:props.style==='light'?'black':'white',backgroundColor:props.style==='light'?'white':'#343a40'}}
          className="form-control"
          id="myBox"
          rows="8"
          onChange={userinput}
          value={text}
          ></textarea>
        <button onClick={upcase} className="btn btn-outline-success mt-2">Convert to UpperCase</button>
        
        <button onClick={lcase} className="btn btn-outline-success mt-2 ml-2">Convert to LowerCase</button>

        <button onClick={clr} className="btn btn-outline-danger mt-2 ml-2">Remove</button>

          <p style={{color:props.style==='light'?'black':'white' , border:'1px solid white', backgroundColor:props.style==='light'?'white':'#343a40'}} className="p-2 mt-2 "><span className="h3">Summary</span> <br /> Letters {text.length} <br />Words {text.split(' ').length} <br /> Time {0.01*text.split(" ").length} min <br /> <span className="h3"> Preview</span> <br /> {text}</p>
      </div>
    </>
  );
}
