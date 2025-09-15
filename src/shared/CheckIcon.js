import { useState } from "react";
import { Circle, CheckCircle } from "feather-icons-react";


export const CheckIcon = () => {
  const [checked, setChecked] = useState(false);
  const handelChecked = () => {
    setChecked(!checked)
  }

  return (
    <div className={`todos-form_icon ${checked ? "active" : ""}`}  onClick={handelChecked} >
      {checked ? <CheckCircle /> : <Circle />}
    </div>
  );}
