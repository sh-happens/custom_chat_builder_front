import { Form, Button, ListGroup } from "react-bootstrap";
import {
  BsPlus,
  BsSearch,
  BsChat,
} from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column h-100 p-2">
      <Button variant="outline-secondary" className="mb-2 w-100">
        <BsPlus className="me-2" />
        New chat
      </Button>

      <Form className="mb-2">
        <Form.Control
          size="sm"
          placeholder="Search chats"
          starticon={<BsSearch />}
        />
      </Form>

      <div className="flex-grow-1 overflow-auto">
        <ListGroup variant="flush">
          <ListGroup.Item action>
            <BsChat className="me-2" />
            Build AI assistant
          </ListGroup.Item>
          <ListGroup.Item action>
            <BsChat className="me-2" />
            Prompt engineering
          </ListGroup.Item>
          <ListGroup.Item action>
            <BsChat className="me-2" />
            Code review bot
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div className="border-top pt-2 small text-muted">
        Yerbol · Plus
      </div>
    </div>
  );
}
