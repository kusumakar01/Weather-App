import { useState } from "react";
function InputArea(props) {
  function handleChange(event) {
    props.setCity(event.target.value);
  }

  function handleSubmit() {
    props.getUpdate();
  }

  return (
    <div className="input-area vh-center flex-row justify-content-around">
      <form
        className="input-form vh-center flex-row justify-content-evenly"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div
          className={`search-bar clearfix vh-center flex-row justify-content-between ${
            props.theme ? "search-bar-night" : ""
          }`}
        >
          <input
            className={`search-box px-3 ${
              props.theme ? "search-box-night" : ""
            }`}
            type="text"
            placeholder="Enter a City"
            value={props.city}
            onChange={handleChange}
            autoFocus
          />
          <button
            className={`submit-btn bi bi-search ${
              props.theme ? "submit-btn-night" : ""
            }`}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default InputArea;
