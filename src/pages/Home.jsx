import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home({hide}) {
  const navigate = useNavigate();

  //state
  const [state, setState] = React.useState();

  function handleClick() {
    //navigate tp about page and pass some state
    navigate("/about", { state: { message: state } });
  }

  return (
    <div style={{ backgroundColor: "#f44336" }} className="tabcontent">
      <div className="inner-content">
        <h3>Home</h3>
        <p>{state}</p>
      </div>
      <input onChange={(e) => setState(e.target.value)}></input>
      <button onClick={handleClick}>PSend</button>
      <Total hide={hide} />
    </div>
  );
}
