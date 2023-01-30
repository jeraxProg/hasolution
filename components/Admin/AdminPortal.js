import { useState } from "react"
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function AdminPortal({ loggedIn, setLoggedIn }) {
  const [logins, setLogins] = useState({
    userName: "",
    password: ""
  })

  const admin = {
    userName: "admin",
    password: "admin123" 
  }

  const handleSubmit = () => {
    logins.userName === admin.userName && logins.password === admin.password
      ? setLoggedIn(true)
      : setLoggedIn(false)
  }

  return (
    <Container className="p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="User Name"
            value={logins.userName}
            onChange={e => setLogins({ ...logins, userName: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={logins.password}
            onChange={e => setLogins({ ...logins, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </Container>
  )
}
