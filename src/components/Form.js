import { useState, useEffect } from "react";

function FormValidation({validationRules,value}){
    return(<p>Błąd!</p>)
}

function FormInput({idx, label, value, validationRules, onChange}) {
    return(
        <>
            <div className="d-flex align-items-center m-2">
                <label className={"form-label m-0 p-2"} htmlFor={idx}>{label}:</label>
                <input className={"form-control"} value={value} id={idx} name={idx} onChange={onChange}/>
            </div>
            <FormValidation validationRules={validationRules} value={value}/>
        </>
    )
}

function Form() {

    let [link, setLink] = useState("");
    let [label, setLabel] = useState("");

    useEffect(()=>{
        formValidate();
    },[link,label])

    function formValidate(){        
      
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
        <FormInput idx="link" 
            label="Odnośnik" 
            validationRules={validationRules} 
            value={link} 
            onChange={(e)=>{setLink(e.target.value)}}
        />

        <FormInput 
            idx="label" 
            label="Opis" 
            value={label} 
            validationRules={validationRules} 
            onChange={(e)=>{setLabel(e.target.value)}}
        />

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