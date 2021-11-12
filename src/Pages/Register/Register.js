import React, { useState } from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../SharedItems/Footer/Footer';
import Header from '../SharedItems/Header/Header';

const Register = () => {

    const {signInUsingGoogle, error, createAccountWithMail, updateUserInfo, setLoading, setUser, setError, saveUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');

    const handleNameChange = e =>{
        setName(e.target.value);
    }    
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    } 
    const handlePhotoChange = e =>{
        setPhoto(e.target.value);
    }

    // Make a Strong Password before submit

    const handleSubmitButton = e =>{
        e.preventDefault();
        // console.log(email, password);
        if(password.length < 6){
          setError('Password must be at least 6 characters');
          return;
        }
        handleCreateAccoutWithMail();
    }

    const handleCreateAccoutWithMail = () => {
        createAccountWithMail(email,password)
    .then((res) => {
      setLoading(true)
      saveUser(name, email, "POST");
      updateUserInfo(name, photo);
      const newUser = { email, displayName: name, photoURL: photo };
      setUser(newUser);
        setError('');
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> {
        setLoading(false)
      })
    }


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            const user = result.user;
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
                    <h2>WELCOME TO REGISTRATION</h2>
                </div>
            <p className='text-danger'>{error}</p>
                <Form>
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="fas fa-user"></i>
                </Button>
                <FormControl
                type='text'
                onBlur={handleNameChange}
                placeholder='Name'
                required
                />
            </InputGroup>
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
                <InputGroup className="mb-3">
                <Button variant='light'>
                <i className="far fa-image"></i>
                </Button>
                <FormControl
                type='text'
                onBlur={handlePhotoChange}
                placeholder='Photo URL'
                required
                />
            </InputGroup>
                <button onClick={handleSubmitButton} className='btn btn-warning fw-bold'>REGISTER</button>
                </Form>
                <div>
                    <h2 className='or-text'>Or</h2>

                <div className='google-signin-btn'>
                <button onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Login With Google</button>
                </div>
                <div className='new-user'>
                <h2>Already Have Account?</h2>
                <Link to='login'>
                    <button className='btn btn-warning fw-bold'>LOGIN</button>
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

export default Register;