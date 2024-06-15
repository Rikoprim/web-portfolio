import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    alert('Welcome');

    const handleUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
      alert('See You');
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, status: 'pending' }]);
      setTask('');
    }
  };

  const handleTaskAction = (index, status) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: status } : task
    );
    setTasks(newTasks);
  };

  const totalTasks = tasks.length;
  const totalCompleted = tasks.filter(task => task.status === 'completed').length;
  const totalDeleted = tasks.filter(task => task.status === 'deleted').length;
  const totalCanceled = tasks.filter(task => task.status === 'canceled').length;

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>
            <Button variant="secondary" className="ml-2">
              <Link to="/" className="text-white">
                <i className="fas fa-arrow-left"></i>
              </Link>
            </Button>
            <div className="text-center">
              Todo List
            </div>
          </h1>
          <Form>
            <Form.Group controlId="formTask">
              <Form.Control
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddTask} className="mt-2">
              Add Task
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Summary</h2>
          <Row>
            <Col md={3}>
              <Card className="mb-3 text-center">
                <Card.Body>
                  <Card.Title>Total Tasks</Card.Title>
                  <Card.Text>{totalTasks}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 text-center text-white bg-success">
                <Card.Body>
                  <Card.Title>Completed</Card.Title>
                  <Card.Text>{totalCompleted}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 text-center text-white bg-danger">
                <Card.Body>
                  <Card.Title>Deleted</Card.Title>
                  <Card.Text>{totalDeleted}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mb-3 text-center text-white bg-warning">
                <Card.Body>
                  <Card.Title>Canceled</Card.Title>
                  <Card.Text>{totalCanceled}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Tasks</h2>
          {tasks.length === 0 ? (
            <p>No tasks available. Add a task to get started!</p>
          ) : (
          <ListGroup>
            {tasks.map((task, index) => (
              <ListGroup.Item
                key={index}
                variant={
                  task.status === 'completed'
                    ? 'success'
                    : task.status === 'deleted'
                    ? 'danger'
                    : task.status === 'canceled'
                    ? 'warning'
                    : ''
                }
              >
                <h5>{task.text}</h5>
                <div className="float-right">
                  {task.status === 'pending' && (
                    <>
                      <Button variant="success" size="sm" onClick={() => handleTaskAction(index, 'completed')}>
                        Complete
                      </Button>{' '}
                      <Button variant="warning" size="sm" onClick={() => handleTaskAction(index, 'canceled')}>
                        Cancel
                      </Button>{' '}
                      <Button variant="danger" size="sm" onClick={() => handleTaskAction(index, 'deleted')}>
                        Delete
                      </Button>
                    </>
                  )}
                  {task.status === 'completed' && <Badge bg="success">Completed</Badge>}
                  {task.status === 'canceled' && <Badge bg="warning">Canceled</Badge>}
                  {task.status === 'deleted' && <Badge bg="danger">Deleted</Badge>}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList