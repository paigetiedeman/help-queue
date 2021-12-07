import React from 'react'
import firebase from "firebase/app";

export default function Signin() {

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
    <h1>Sign up</h1>
    <form onSubmit={doSignUp}>
      <input
        type='text'
        name='email'
        placeholder='email' 
        className='form-control'/>
        <br />
      <input
        type='password'
        name='password'
        placeholder='Password' 
        className='form-control'/>
        <br />
      <button type='submit' className="btn btn-dark">Sign up</button>
    </form>
    <h1>Sign In</h1>
    <form onSubmit={doSignIn}>
      <input
        type='text'
        name='signinEmail'
        placeholder='email' 
        className='form-control'/>
        <br />
      <input
        type='password'
        name='signinPassword'
        placeholder='Password' 
        className='form-control'/>
        <br />
      <button type='submit' className="btn btn-dark">Sign In</button>
      </form>
      <button onClick={doSignOut} className="btn btn-dark">Sign out</button>
    <br />
  </React.Fragment>
  )
}
