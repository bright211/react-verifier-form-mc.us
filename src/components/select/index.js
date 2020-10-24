import React from "react";

function Select(props) {
  const { label, setData, value, id, validate, willValidation } = props;

  const setValue = (val) => {
    if (val !== "0") {
      console.log(val);
      setData({ [validate]: false, [id]: val });
    } else {
      // console.log(val)
      setData({ [validate]: true, [id]: val });
    }
  };

  return (
    <div className="select">
      <label>{`${label} ` } {willValidation&&<label className="error">{`(Please complete this field)`}</label>}</label> 
      <select
        className={`form-control`}
        id="sel1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option selected value={0}>
          {props.option}
        </option>{" "}
        //props.option must be Array.
        <option value={1}>state 1</option>
        <option value={2}>state 2</option>
        <option value={3}>state 3</option>
      </select>
    </div>
  );
}

export default Select;
