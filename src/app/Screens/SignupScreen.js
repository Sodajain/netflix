import React, { useRef, useState } from "react";
import "./SignupScreen.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./../firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validate input
    if (!email || !password) {
      setError("Please enter your email and password.");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Your password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    // Register user with Firebase
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
    } catch (error) {
      setError(error.code);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: Implement sign-in functionality
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button
          type="submit"
          onClick={handleSignIn}
          disabled={loading}
        >
          Sign In
        </button>

        <h4>
          <span className="signupScreen_gray">
            New to Papadflix?{" "}
          </span>
          <span className="signupScreen_link" onClick={handleSignUp}>
            Sign up now
          </span>
        </h4>

        {error && <div className="signupScreen_error">{error}</div>}
        {loading && <div className="signupScreen_loading">Loading...</div>}
      </form>
    </div>
  );
}

export default SignupScreen;
