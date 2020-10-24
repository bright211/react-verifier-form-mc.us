import React from "react";

function Check(props) {
  const { label, setData, value, id, validate, willValidation } = props;

  const setValue = (val) => {
    if (val) {
      setData({ [validate]: false, [id]: val });
    } else {
      setData({ [validate]: true, [id]: val });
    }
  };

  return (
    <div className="checkbox">
      {/* <div className="checkbox"> */}
      <div>
        <input
          type="checkbox"
          checked={value}
          className={`input_checkbox ${willValidation ? `error` : ``}`}
          onChange={(e) => setValue(e.target.checked)}
        ></input>
      </div>
      <div className="checkbox_description">
        <p className={`form-check-label ${willValidation ? `error-text` : ``}`}>{props.label}</p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Check;
