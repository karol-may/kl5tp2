import { useState } from "react";

function FormInput({idx, label, onChange}) {
    return(
        <div className="d-flex align-items-center m-2">
            <label className={"form-label m-0 p-2"} htmlFor={idx}>{label}:</label>
            <input className={"form-control"} id={idx} name={idx} onChange={onChange}/>
        </div>
    )
}

function Form() {

    let [link, setLink] = useState("");
    let [label, setLabel] = useState("");

    return(
    <form>
        <FormInput idx="link" label="Odnośnik" onChange={(e)=>{setLink(e.target.value)}}/>
        <FormInput idx="label" label="Opis" onChange={(e)=>{setLabel(e.target.value)}}/>
        <button className={"btn btn-primary"}>Wyślij</button>
        <pre>
            Link: {link}<br/>
            Label: {label}
        </pre>
    </form>
    )
}

export default Form;