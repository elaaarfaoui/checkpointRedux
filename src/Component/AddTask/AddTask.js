import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/actions/actionTask";

const AddTask = () => {
  const [myInput, setMyInput] = useState("");
  const dispatch = useDispatch();

  console.log("myinput", myInput);

  const add = () => {
    if (myInput) {
      dispatch(addTask({ text: myInput, id: Math.random(), isDone: false }));
      setMyInput("")
    } else {
      alert("Empty Input");
    }
  };
  return (
    <div>
      <div>
        <input style={{width:"60%", marginBottom:"4%", borderColor: "pink"}}
          type="text"
          onChange={(e) => setMyInput(e.target.value)}
          value={myInput}
          placeholder="Add a Task"
        />
        <button style={{backgroundColor:"pink", color:"white"}} onClick={add}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
