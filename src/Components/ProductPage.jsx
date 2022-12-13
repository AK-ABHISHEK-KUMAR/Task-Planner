import { lazy, useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api";

import { addTodo } from "../Redux/Features/TodoSlice";

const AddTodo = lazy(() => import("./AddTodo"));
const CompletedTaskTable = lazy(() => import("./CompletedTaskTable"));
const EventControls = lazy(() => import("./EventControls"));
const PendingTaskTable = lazy(() => import("./PendingTaskTable"));
const Tabs = lazy(() => import("./Tabs"));

export default function ProductPage() {
  const toggleCompletedTaskTable = useSelector((state) => state.ui.showTask);
  const { emailuuid, CTL, PTL, limit } = useSelector((state) => state.crudTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/todos/${emailuuid}`)
      .then((result) => {
        result.data.length > 0 ? dispatch(addTodo(result.data)) : null;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card
      className="text-center m-4"
      style={{
        height: "calc(100vh - 4rem)",
        boxShadow: "1px 1px 50px 100px #8674cb",
      }}
    >
      <Card.Header
        style={{
          boxShadow: "1px 1px 60px 35px plum",
          backgroundColor: "plum",
          borderColor: "white",
        }}
      >
        <Card.Title as="h2">
          <div className="d-flex justify-content-between align-items-center">
            <Badge
              title="To Add more."
              style={{
                opacity: 0.4,
                color: "red",
                "--bs-bg-opacity": 0,
                fontFamily: "fantasy",
                border: "2px solid red",
              }}
            >
              {limit}
            </Badge>
            <Tabs />
            <Badge
              title={
                toggleCompletedTaskTable ? "Completed Tasks" : "Pending Tasks"
              }
              style={{
                opacity: 0.4,
                color: "red",
                "--bs-bg-opacity": 0,
                fontFamily: "fantasy",
                border: "2px solid red",
              }}
            >
              {toggleCompletedTaskTable ? CTL : PTL}
            </Badge>
          </div>
        </Card.Title>
      </Card.Header>
      <Card.Body
        style={{
          overflowY: "auto",
        }}
      >
        <AddTodo />
        {toggleCompletedTaskTable ? (
          <CompletedTaskTable />
        ) : (
          <PendingTaskTable />
        )}
      </Card.Body>
      <Card.Footer>
        <EventControls />
      </Card.Footer>
    </Card>
  );
}
