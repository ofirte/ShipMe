import React from "react";
import { ErrorDiv, FormInput ,FormSelsect} from "./shared/styles";

const FormField = ({ label, input, meta, type, read, options }) => {
  if (type === "select") {
    return (
      <div>
        <label>{label}</label>
        <FormSelsect {...input} type={type} style={{ marginBottom: "10px" }}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </FormSelsect>
      </div>
    );
  }
  return (
    <div>
      <label>{label}</label>
      <FormInput
        {...input}
        type={type}
        readOnly={read}
      />
      <ErrorDiv style={{ marginBottom: "10px" }}>
        {meta.touched && meta.error}
      </ErrorDiv>
    </div>
  );
};
export default FormField;
