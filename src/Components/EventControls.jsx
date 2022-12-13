import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api";
import { clearTodo, deleteTodo } from "../Redux/Features/TodoSlice";
import { toggleOnOff } from "../Redux/Features/UiToggleSlice";

export default function EventControls() {
  const dispatch = useDispatch();
  const { pendingTask, completedTask, deletingIds, emailuuid } = useSelector(
    (state) => state.crudTodo
  );

  const handleDelete = () => {
    axios
      .patch("/todos", {
        id: deletingIds,
      })
      .then(() => dispatch(deleteTodo()))
      .catch((err) => console.error(err));
  };

  const handleClear = () => {
    axios
      .delete(`/todos/${emailuuid}`)
      .then(() => dispatch(clearTodo()))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <ButtonGroup>
        <Button
          variant="outline-danger"
          onClick={() => {
            dispatch(toggleOnOff());
          }}
        >
          Add New Todo
        </Button>

        <Button
          variant="outline-danger"
          onClick={handleDelete}
          disabled={!deletingIds.length}
        >
          Delete Todo
        </Button>

        <Button
          variant="outline-danger"
          onClick={handleClear}
          disabled={!(pendingTask + completedTask)}
        >
          Clear Todo List
        </Button>
      </ButtonGroup>
    </>
  );
}
