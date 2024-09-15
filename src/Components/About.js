import React from 'react'
// import  {useState} from 'react'
export default function About(props) {
    // const [style,setStyle]=useState({
    //     color:'black',backgroundColor:'white'
    // })
    
    // const [btn,setBtn]=useState("Dark Mode")

    // const changer=()=>{
    //     if(btn==="Dark Mode"){
    //         setBtn("Light Mode")
    //         setStyle({color:'white', backgroundColor:'black',border:'1px solid white'})
    //     }
    //     else{
    //         setBtn("Dark Mode")
    //         setStyle({color:'black', backgroundColor:'white'})
    //     }
    // }
    
    return (
    <>
    <div id='about' style = {{ backgroundColor: props.style==='light'?'white':'black', color: props.style==='light'?'black':'white'}}  className='p-3'>
    <div  style = {{ backgroundColor: props.style==='light'?'white':'black', color: props.style==='light'?'black':'white'}}   className="container p-3">

    <div id="accordion">
  <div    style = {{ backgroundColor: props.style==='light'?'#f7f7f7':'#343a40', color: props.style==='light'?'black':'white', border:'1px solid white'}}  className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button style = {{ backgroundColor: props.style==='light'?'#f7f7f7':'#343a40', color: props.style==='light'?'black':'white'}} className="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          About My Site
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body">
      <strong>Welcome to Rao Saab!</strong>
I'm <strong>Rana Sharafat Ali</strong>, a curious learner and aspiring full-stack developer. Rao Saab is my <strong>playground for testing new skills</strong> and building a portfolio. <br /><br /> I chose this name simply because it's my caste name - I didn't want to <strong>waste time</strong> brainstorming a fancy name when I could be learning and building instead! <br /><br />
On this site, you'll find a text <strong>manipulator tool</strong> that's still growing. I've experimented with features like case conversion, text summary, preview, and a counter. It's not perfect, but it's mine, and I'm proud of what I've achieved so far. <br /><br />
As I continue <strong>learning</strong> React, JavaScript, and other technologies, I hope you'll join me on this journey. Try out the tools, provide <strong>feedback, suggest new features, or even point out bugs</strong> - I'm all ears! Your input will help me improve this site and become a better developer.
Thanks for stopping by, and I look forward to hearing from you!
      </div>
    </div>
  </div>
  {/* <div style = {{ backgroundColor: props.style==='light'?'white':'#343a40', color: props.style==='light'?'black':'white', border:'1px solid white'}} className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button style = {{ backgroundColor: props.style==='light'?'white':'#343a40', color: props.style==='light'?'black':'white'}} className="btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          About Site Content
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
       assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea  synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div> */}
  <div style = {{ backgroundColor: props.style==='light'?'#f7f7f7':'#343a40', color: props.style==='light'?'black':'white', border:'1px solid white'}} className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button style = {{ backgroundColor: props.style==='light'?'#f7f7f7':'#343a40', color: props.style==='light'?'black':'white'}} className="btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Privecy Policy
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
        
At <strong>Rao Saab</strong>, I respect your privacy and am committed to protecting your personal information. <br /><br />This website does <strong>not collect</strong> or store any user data, except for temporary processing of text input for manipulation purposes. <br /> <br /><strong>No personal data is shared with third parties</strong>, and all interactions are <strong>anonymous</strong>. <br /><br />However, if you provide feedback or contact me through <strong><a className='text-success' href="https://api.whatsapp.com/send/?phone=%2B923006357871&text&type=phone_number&app_absent=0">Whatsapp</a></strong>, your phone number and message content will be stored solely for the purpose of responding to your inquiry. I do not use cookies or any tracking mechanisms on this site. By using Rao Saab, you consent to this limited data processing, which is necessary for the functionality of the text manipulator tool. If you have any concerns, <br /><strong>please feel free to reach out.</strong>
      </div>
    </div>
  </div>
</div>

    </div>

    {/* <div className="container">
    <button onClick={changer} style={style} type='button' className='btn btn-outline-dark m-2'>{btn}</button>
    </div> */}
    </div>
    </>
  )
}
