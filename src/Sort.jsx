import { useState } from "react";

const Sort = (props) => {

  // const [value, setValue] = useState(null)

  const handleClick = (event) => {
    props.setValue(event.target.value)
  }

  return (

    <div className="sort-container">
      {/* <h1>current value: {props.value}</h1> */}
      <select name="" id="" onChange={handleClick} className="sort-content" >
        <option value="">Sort by</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="cases-high">Cases High</option>
        <option value="cases-low">Cases Low</option>
      </select>
    </div>

  );
}

export default Sort;