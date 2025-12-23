import {
  Container,
  Card,
  Button,
  Table,
  Row,
  Col,
} from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

export default function DesignSystem() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Design System</h1>

      <Card className="mb-4">
        <Card.Header>
          <Card.Title>Buttons</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button>
              <BsPlus className="me-2" />
              With Icon
            </Button>
          </div>

          <Button className="w-100">Full Width Button</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>Table</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>variant</td>
                <td>string</td>
                <td>Button style variant</td>
              </tr>
              <tr>
                <td>size</td>
                <td>string</td>
                <td>sm / lg</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>boolean</td>
                <td>Disable interaction</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
