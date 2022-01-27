import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Header from '../../Components/Shared/Header';
import { useDispatch } from 'react-redux';
import './SignInPage.styles.scss';
import { login } from '../../Features/user';
import { useState } from 'react';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'username':
        setUserName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: email, userName: userName, password: password }));
    navigate('/to-do-list');
  };

  const con = () => {
    console.log({ email, userName, password });
  };

  return (
    <div className="sign-in">
      <Header />
      <button onClick={con} style={{ backgroundColor: 'red' }}>
        CON email
      </button>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="username"
              name="username"
              placeholder="Username"
              value={userName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
