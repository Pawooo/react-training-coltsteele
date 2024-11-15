import React, { useState } from 'react'

const FormComplex = () => {

  const [formData, setFormData] = useState({firstName: "", lastName: ""});

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;

    setFormData(currData => {
        currData[changedField] = newValue;
        return {...currData};
    });
  };

//   const handleChange = (e) => {
//     setFormData(currData => {
//         return {
//             ...currData;
//             [e.target.name]: e.target.value,
//         };
//     });
//   };

  const handleSubmit = () => {
    console.log(formData.firstName, formData.lastName);
  }

  return (
    <section>
        <header><h1>Form</h1></header>
        <main>
        <div>
            <label htmlFor="firstname">firstname</label>
            <input id="firstname" name='firstName' type="text" placeholder='firstname' value={formData.firstName} onChange={e => handleChange(e)} />
        </div>
        <div>
            <label htmlFor="lastname">lastname</label>
            <input id="lastname" name='lastName' type="text" placeholder='lastname' value={formData.lastName} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Submit</button>

        </main>
    </section>
  )
}

export default FormComplex