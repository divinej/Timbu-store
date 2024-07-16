
const SelectElement = (props) => {
    return (
        <div className="input-container mg-bt-1">
            <label htmlFor={props.name} className="poppins-medium">{props.labelName}</label>
            <select id={props.name} name={props.name} onChange={props.onChange} value={props.value} className="poppins-regular">
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
            <option value="Congo">Congo</option>
            <option value="uganda">Uganda</option>
        </select>
        </div>
    )
}
export default SelectElement;