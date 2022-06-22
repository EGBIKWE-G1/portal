import React from "react";

const Input = ({ value, type, id, onChange, placeholder, name }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        required
        className="form__input"
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // errors={errors}
        // disabled={isFetching}
        // onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
};

export default Input;
