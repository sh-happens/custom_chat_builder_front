import { Card, Form, Button } from "react-bootstrap";

export default function ChatView() {
  return (
    <div className="h-100 p-4">
      <Card className="h-100 d-flex flex-column">
        <Card.Body className="flex-grow-1 overflow-auto">
          <div className="mb-3">
            <strong>Assistant:</strong> How can I help?
          </div>
          <div className="text-end mb-3">
            <strong>You:</strong> Build a chat UI
          </div>
        </Card.Body>

        <Card.Footer>
          <Form className="d-flex gap-2">
            <Form.Control placeholder="Send a message…" />
            <Button>Send</Button>
          </Form>
        </Card.Footer>
      </Card>
    </div>
  );
}
