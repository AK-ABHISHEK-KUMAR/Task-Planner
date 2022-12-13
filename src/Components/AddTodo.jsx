import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
  Stack,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api";
import { addTodo } from "../Redux/Features/TodoSlice";
import { toggleOnOff } from "../Redux/Features/UiToggleSlice";

export default function AddTodo() {
  const { show } = useSelector((state) => state.ui);
  const { emailuuid, limit } = useSelector((state) => state.crudTodo);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleClose = () => dispatch(toggleOnOff());

  const submitData = (data) => {
    if (limit) {
      data.taskNo = parseInt(data.taskNo);
      data.status = data.status === "true";
      data.uuid = emailuuid;
      axios
        .post("/todos/new", data)
        .then((result) => {
          dispatch(addTodo([result.data]));
        })
        .catch((err) => console.log(err));
      handleClose();
    }
  };

  return (
    <>
      <Modal
        scrollable={true}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title as="h3">Add Todo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(submitData)}>
          <Modal.Body>
            <Container fluid={true}>
              <Stack gap={3}>
                <Row>
                  <Col>
                    <FloatingLabel controlId="TaskNo" label="Task No.">
                      <Form.Control
                        type="text"
                        placeholder="1234"
                        {...register("taskNo", { required: "Task No. is required" })}
                        isInvalid={errors.taskNo ? true : false}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.id?.message}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="Completion" label="Completed">
                      <Form.Select
                        defaultValue={"false"}
                        aria-label="Floating label select example"
                        {...register("status")}
                      >
                        <option value="true">✅ Completed</option>
                        <option value="false">❌ Not Completed</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <FloatingLabel
                      controlId="TaskTitle"
                      label="Title"
                      className="mb-3"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Write Your Todo Here!"
                        {...register("title", {
                          required: "Task title is required",
                        })}
                        isInvalid={errors.title ? true : false}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title?.message}
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>
              </Stack>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            {limit <= 0 && (
              <Form.Text style={{ color: "red" }}>
                *Limit reached. Delete some tasks to add more.
              </Form.Text>
            )}
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={!limit}>
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
