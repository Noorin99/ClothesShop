import "./form-input.scss";

const FormInput = ({ label, ...otherProperties }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            otherProperties.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      )}

      <input className="form-input" {...otherProperties} />
    </div>
  );
};

export default FormInput;
