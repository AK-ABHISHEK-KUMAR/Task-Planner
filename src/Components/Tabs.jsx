import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toggleCompletedTask } from "../Redux/Features/UiToggleSlice";

export default function Tabs() {
  const toggleCompletedTaskTable = useSelector((state) => state.ui.showTask);
  const dispatch = useDispatch();

  return (
    <Dropdown onSelect={() => dispatch(toggleCompletedTask())}>
      <Dropdown.Toggle
        style={{
          color: "purple",
          textShadow: "1px 1px whitesmoke",
          fontFamily: "Alfa Slab One, cursive",
          fontSize: 25,
        }}
        variant="outline"
        id="dropdown-basic"
      >
        {toggleCompletedTaskTable ? "Completed Task" : "Pending Task"}
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          backgroundColor: "plum",
          "--bs-dropdown-link-hover-bg": "#c393d8",
        }}
      >
        <Dropdown.Item eventKey={1}>
          {toggleCompletedTaskTable ? "Pending Task" : "Completed Task"}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
