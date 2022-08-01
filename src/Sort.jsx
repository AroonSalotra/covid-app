import { useState } from "react";

const Sort = (props) => {

  // const [value, setValue] = useState(null)

  const handleClick = (event) => {
    props.setValue(event.target.value)
  }

  return (
    <>
      <h1>current value: {props.value}</h1>
      <select name="" id="" onChange={handleClick} >
        <option value="">Select</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="cases-high">Cases High</option>
        <option value="cases-low">Cases Low</option>
      </select>
    </>
  );
}

export default Sort;