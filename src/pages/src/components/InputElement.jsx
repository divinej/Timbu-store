
const InputElement = (props) => {
    
    return (
        <div className="input-container mg-bt-1">
            <label htmlFor={props.name} className="poppins-medium">{props.labelName}</label>
            <input className="poppins-regular" id={props.name} name={props.name} value={props.value} type={props.type} placeholder={props.placeholder} onChange={props.onChange} required pattern={props.pattern}/>
        </div>
    )
}

export default InputElement