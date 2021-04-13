import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { auth } from "./firebase";
import Navbar from './Navbar';
import { useHistory, Link } from "react-router-dom";

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }



    const [isSignedIn, setisSignedIn] = useState(false);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }

      useEffect(()=> {
        firebase.auth().onAuthStateChanged(user => {
            setisSignedIn(!!user);
            console.log("user", user)
          })
    }) 




    return (
        <div>
            {isSignedIn ? (
                <span>
                <Navbar />
                <div className="pa4 pb6 ">Signed In!</div>
                <h1 className="monaco">Welcome {firebase.auth().currentUser.displayName}</h1>
                <Link to='/findoutmore'><button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Find out more</button></Link>
                </span>
            ) : (   
                    <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                        <main className="pa4 black-80">
                            <form className="measure">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                                    <input className="pa2 input-reset ba hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                                    <input className="b pa2 input-reset ba hover-bg-black hover-white w-100" type="password" name="password"  id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>
                                </fieldset>
                                <div className="">
                                    <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit"  onClick={signIn}>Sign In</button>
                                </div>
                                <div className="lh-copy mt3">
                                <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={register}>Register</button>
                                </div>
                                <StyledFirebaseAuth
                                    uiConfig={uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                            </form>
                        </main>
                    </article>
    )
}
        </div>
    )
}

export default SignIn;
