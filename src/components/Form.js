import { useState, useEffect } from "react";

function FormInput({idx, label, value, isValid, onChange}) {
    return(
        <>
            <div className="d-flex align-items-center m-2">
                <label className={"form-label m-0 p-2"} htmlFor={idx}>{label}:</label>
                <input className={"form-control"} value={value} id={idx} name={idx} onChange={onChange}/>
            </div>
            {!isValid&&<div>Błąd &lt; 3!</div>}
        </>
    )
}

function Form() {

    let [link, setLink] = useState("");
    let [label, setLabel] = useState("");

    let [isValid,setIsValid] = useState(true);

    useEffect(()=>{
        formValidate();
    },[link,label])

    function formValidate(){        
        setIsValid((link.length>3)&&(link.length<5));
    }

    function formReset(){
        setLink("");
        setLabel("");
    }

    function formResetButtonClickHandler(e){
        e.preventDefault();
        formReset();
    }

    return(
    <form>
        <FormInput idx="link" label="Odnośnik" isValid={isValid} value={link} onChange={(e)=>{setLink(e.target.value)}}/>
        <FormInput idx="label" label="Opis" value={label} onChange={(e)=>{setLabel(e.target.value)}}/>
        <button className={"btn btn-primary"}>Wyślij</button>
        <button onClick={formResetButtonClickHandler} className={"btn btn-danger"}>Reset</button>
        <pre>
            Link: {link}<br/>
            Label: {label}
        </pre>
    </form>
    )
}

export default Form;