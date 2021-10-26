import "./App.css";
import { createRef } from "react";

function App() {
  const formMturk = createRef();
  const inputAssignmentID = createRef();
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const assignmentId = params.get("assignmentId");
  const handleSubmit = () => {
    if(!assignmentId || assignmentId === 'ASSIGNMENT_ID_NOT_AVAILABLE') {
      alert('You need accept to do this task');
    }
    else {
      //call api from assocition or do anything.
      inputAssignmentID.current.value = assignmentId;
      formMturk.current.submit();
    }
  };

  return (
    <div className="App" style={{ marginTop: "150px" }}>
      Your worker Id:
      <form
        method="post"
        id="mturk_form"
        action="https://www.mturk.com/mturk/externalSubmit"
        ref={formMturk}
      >
        <label for="color">Color: </label>
        <input type="text" id="color" name="color" />
        <input type="hidden" id="inputAssignmentId" name="assignmentId" ref={inputAssignmentID}/>
      </form>
      <input value="submit" type="button" onClick={handleSubmit} />
    </div>
  );
}

export default App;
