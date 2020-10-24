import React from "react";

function LabelInput(props) {
  const {
    label,
    setData,
    value,
    id,
    validate,
    willValidation,
    placeHolder,
    type,
  } = props;

  const setValue = (val) => {
    if (type === "numberic") {
      const re = /^[0-9\b]+$/;
      if (re.test(val)) {
        setData({ [validate]: false, [id]: val });
      } else if (!val) {
        setData({ [validate]: false, [id]: "" });
      }
    } else {
      if (val) {
        setData({ [validate]: false, [id]: val });
      } else {
        setData({ [validate]: true, [id]: val });
      }
    }
  };

  return (
    <div className="label_input">
      <label>
        {`${label} `}{" "}
        {willValidation && (
          <label className="error">{`(Please complete this field)`}</label>
        )}
      </label>

      <input
        value={value}
        placeholder={placeHolder}
        className={`input-box form-control`}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}

export default LabelInput;
