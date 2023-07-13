import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Tab,
  Tabs,
  Card,
} from "react-bootstrap";
import { setToken, setUser } from "../../redux/actions/UserActions";

function Register() {
  //impostazioni per registrarsi
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);

  //impostazioni per loggarsi
  const dispatch = useDispatch();
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/auth/register";
    const postData = {
      name: name,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) =>
        alert(
          response.ok
            ? "Cliente registrato correttamente!"
            : "Errore nella registrazione del cliente!"
        )
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/auth/login";

    var dataObj = {
      username: String,
      accessToken: String,
      tokenType: String,
    };

    const postDataLogin = {
      username: usernameLogin,
      password: passwordLogin,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDataLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        dataObj = data;
        console.log(data);
        dispatch(setToken(dataObj));
        dispatch(setUser(dataObj));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card className="w-50 my-5">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="m-3 w-100"
        >
          <Tab eventKey="home" title="Registrazione">
            <Col className="px-3">
              <h3 className="register-title">Registrati</h3>
              <Form onSubmit={handleRegister}>
                <Form.Group controlId="formName">
                  <Form.Label className="register-label">Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formLastname">
                  <Form.Label className="register-label">Cognome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci cognome"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formUsername">
                  <Form.Label className="register-label">Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label className="register-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Inserisci email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label className="register-label">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Inserisci password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="register-input"
                    required
                  />
                </Form.Group>

                {/* <Form.Group controlId="formRoles">
          <Form.Label className="register-label">Roles</Form.Label>
          <Form.Control
          type="text"
            placeholder="Inserisci roles (comma-separated)"
            value={roles}
            onChange={(e) => setRoles(e.target.value.split(","))}
            className="register-input"
            />
        </Form.Group> */}
                <div className="d-flex justify-content-end my-3">
                  <Button variant="primary" type="submit">
                    Registrati
                  </Button>
                </div>
              </Form>
            </Col>
          </Tab>
          <Tab eventKey="profile" title="Login">
            <Col className="px-3">
              <h3>Se sei già registrato, accedi..</h3>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    value={usernameLogin}
                    onChange={(e) => setUsernameLogin(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  controlId="formGroupPassword"
                  value={passwordLogin}
                  onChange={(e) => setPasswordLogin(e.target.value)}
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex justify-content-end my-3">
                  <Button variant="primary" type="submit">
                    Accedi{" "}
                  </Button>
                </div>
              </Form>
            </Col>
          </Tab>
        </Tabs>
      </Card>
    </Container>
  );
}

export default Register;
