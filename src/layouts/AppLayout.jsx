import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";

export default function AppLayout({ children }) {
  return (
    <Container fluid className="vh-100 p-0">
      <Row className="h-100 g-0">
        <Col
          xs="auto"
          className="border-end bg-light"
          style={{ width: 260 }}
        >
          <Sidebar />
        </Col>

        <Col className="h-100">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
