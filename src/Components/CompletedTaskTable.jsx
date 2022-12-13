import { Table, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import Task from "../assets/Task.svg";

export default function CompletedTaskTable() {
  let completedTodos = useSelector((state) => state.crudTodo.completedTask);

  return (
    <div id="CompletedTaskTable">
      {completedTodos.length === 0 ? (
        <img
          src={Task}
          alt="Task List"
          style={{ width: "auto", height: "58vh" }}
        />
      ) : (
        <>
          {/* <div className="d-flex justify-content-end">
            <Badge
              title="Download a copy."
              style={{
                cursor: "pointer",
                "--bs-bg-opacity": 0,
                fontSize: 20,
                marginBottom: "-50px",
              }}
            >
              🔰
            </Badge>
          </div> */}
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
                <th style={{ width: "10px" }}>Task No.</th>
                <th>Title</th>
                <th style={{ width: "20px" }}>Status</th>
                <th style={{ width: "100px" }}>CreatedAt</th>
                <th style={{ width: "100px" }}>DoneAt</th>
              </tr>
            </thead>
            <tbody>
              {completedTodos.map((val, ind) => (
                <tr id={val._id} key={ind}>
                  <td>{val.taskNo}</td>
                  <td>{val.title}</td>
                  <td>{val.status ? "✅" : "❌"}</td>
                  <td>{new Date(val.createdAt).toLocaleString()}</td>
                  <td>{new Date(val.doneAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}
