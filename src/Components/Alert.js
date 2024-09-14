import React from "react";

export default function Alert(props) {
  return (
    <>
    <div style={{height:50+'px' , marginTop:50+'px'}}>
     {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.msg}
      </div>}

      
      {/* {props.alert && <h1 className={`text-${props.alert.type}`}>{props.alert.msg}</h1>} */}
      </div>

    </>
  );
}
