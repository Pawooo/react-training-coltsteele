import React from 'react'
import { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    console.log(firstName, lastName);
  }

  return (
    <>
        <section>
          <header><h1>Form</h1></header>
          <main>
          <div>
              <label htmlFor="firstname">firstname</label>
              <input id="firstname" type="text" placeholder='firstname' value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div>
              <label htmlFor="lastname">lastname</label>
              <input id="lastname" type="text" placeholder='lastname' value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
          <button onClick={handleSubmit}>Submit</button>

          </main>
        </section>
    </>
  )
}

export default Form