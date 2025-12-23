import { Container, Card, Form, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="h-100 p-4">
      <Card className="h-100 d-flex flex-column">
        <Card.Header>Chat</Card.Header>

        <Card.Body className="flex-grow-1 overflow-auto">
          <div className="mb-2">🤖 Hello! How can I help?</div>
          <div className="text-end mb-2">🙂 Build me an AI app</div>
        </Card.Body>

        <Card.Footer>
          <Form className="d-flex gap-2">
            <Form.Control placeholder="Type your message…" />
            <Button>Send</Button>
          </Form>
        </Card.Footer>
      </Card>
    </Container>
  );
}
