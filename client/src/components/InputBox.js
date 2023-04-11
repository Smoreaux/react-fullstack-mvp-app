import React, { useState } from "react";

const InputBox = () => {
  const [description, setDescription] = useState(""); //using usestate to define a state varuiable and function, value is empty by default

  const onSubmitForm = async (e) => { //a function that returns a promise. We are modifyinf the event after clicking ENTER!!!
    e.preventDefault(); //this prevents the default behavior of form submission which reloads the page.
    try {
      const body = { description }; //default value for use state
      const response = await fetch("http://localhost:5001/userprofile", { //a get request to the server
        method: "POST",
        headers: { "Content-Type": "application/json" },//setting the type to app/json
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) { // this will send an error 
      console.error(err.message); //this wi
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Vision Board</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)} //an event that is triggerd by typign in the box . This updated the description state variable each time.
        />
        <button className="btn btn-danger">Enter</button>
      </form>
    </>
  );
};

export default InputBox;
