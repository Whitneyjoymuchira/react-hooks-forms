import React, { useState } from "react";


function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");


  function Form(props) {
    return (
      <form>
        <input type="text" value={firstName} />
        <input type="text" value={lastName} />
        <input
          type="text"
          onChange={props.handleFirstNameChange}
          value={props.firstName}
        />
        <input
          type="text"
          onChange={props.handleLastNameChange}
          value={props.lastName}
        />
        <input
          type="checkbox"
          id="newsletter"
          onChange={props.handleNewsletterChange}
          /* checked instead of value */
          checked={props.newsletter}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}  
export default Form;


