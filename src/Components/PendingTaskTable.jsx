import { Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api";
import TaskDone from "../assets/TaskDone.svg";
import {
  notToDelete,
  toDelete,
  updateStatus,
  updateTitle,
} from "../Redux/Features/TodoSlice";

export default function pendingTaskTable() {
  const pendingTodos = useSelector((state) => state.crudTodo.pendingTask);
  const dispatch = useDispatch();

  const handleStatus = (e) => {
    const id = e.target.parentElement.id;

    axios
      .put(`/todos/update/status/${id}`)
      .then((result) => {
        if (result.status === 200) {
          dispatch(updateStatus(...result.data));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSelection = (e) => {
    const id = e.target.id;

    if (e.target.checked) dispatch(toDelete(id));
    else dispatch(notToDelete(id));
  };

  const handleTitle = (e) => {
    const id = e.target.parentElement.id;
    const newTitle = e.target.textContent;
    axios
      .put(`/todos/update/title/${id}`, {
        title: newTitle,
      })
      .then((result) => {
        if (result.status === 201) {
          dispatch(updateTitle({ id, newTitle }));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id={"pendingTaskTable"}>
      {pendingTodos.length === 0 ? (
        <img
          src={TaskDone}
          alt="Task List"
          style={{ width: "auto", height: "58vh" }}
        />
      ) : (
        <Table
          striped
          hover
          className="mt-4 mb-4"
          style={{
            fontWeight: "500",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "30px" }}></th>
              <th style={{ width: "10px" }}>Task No.</th>
              <th>Title</th>
              <th style={{ width: "20px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {pendingTodos.map((val, ind) => (
              <tr id={val._id} key={ind}>
                <td>
                  <Form.Check id={val._id} onChange={handleSelection} />
                </td>
                <td>{val.taskNo}</td>
                <td
                  onMouseDown={(e) => (e.currentTarget.contentEditable = true)}
                  onBlur={handleTitle}
                >
                  {val.title}
                </td>
                <td
                  title="Click when Done."
                  style={{ cursor: "pointer" }}
                  onClick={handleStatus}
                >
                  {val.status ? "✅" : "❌"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
