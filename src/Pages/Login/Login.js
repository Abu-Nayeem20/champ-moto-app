import React, { useState } from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../SharedItems/Footer/Footer';
import Header from '../SharedItems/Header/Header';
import './Login.css'

const Login = () => {

    const {signInUsingGoogle, error, setError, setUser, setLoading, loginWithEmailAndPassword, saveUser} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        // console.log(email, password);

    const handleEmailChange = e =>{
        setEmail(e.target.value);
  }
  const handlePasswordChange = e =>{
      setPassword(e.target.value);
  } 

  const handleLoginWithEmailAndPassword = e =>{
    loginWithEmailAndPassword(email,password)
    .then((res) => {
      setLoading(true)
        setUser(res.user);
        setError('');
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false)
      })
      e.preventDefault();
}

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            const user = result.user;
            // console.log(user);
            saveUser(user.displayName, user.email, "PUT");
            history.push(redirect_uri);
        })

    }

    return (
        <div>
            <Header />
            <div className='login-content'>
            <div className='container'>
            <div className='row'>
             <div className='col-md-6 offset-md-3'>
            <div className='form-area'>
                <div className='login-top-text'>
                    <h2>WELCOME TO LOGIN</h2>
                </div>
            <p className='text-danger'>{error}</p>
                <Form>
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="fas fa-envelope"></i>
                </Button>
                <FormControl
                type='email'
                onBlur={handleEmailChange}
                placeholder='Email'
                required
                />
            </InputGroup>
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="fas fa-lock"></i>
                </Button>
                <FormControl
                type='password'
                onBlur={handlePasswordChange}
                placeholder='Password'
                required
                />
            </InputGroup>
                <button onClick={handleLoginWithEmailAndPassword} className='btn btn-warning fw-bold'>LOGIN</button>
                </Form>
                <div>
                    <h2 className='or-text'>Or</h2>

                <div className='google-signin-btn'>
                <button onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Login With Google</button>
                </div>
                <div className='new-user'>
                <h2>New To CHAMP MOTO?</h2>
                <Link to='register'>
                    <button className='btn btn-warning fw-bold'>REGISTER</button>
                </Link>
                </div>
                </div>
             </div>
         </div>
             </div> 
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;