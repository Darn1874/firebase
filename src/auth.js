// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      console.log("User signed up:", userCredential.user);
      alert("Sign Up successful!");
    })
    .catch((error) => {
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    });
};

const logIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Logged in successfully
      console.log("User logged in:", userCredential.user);
      alert("Login successful!");
      window.location.href = "home.html"; // Redirect to home page
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      alert("Error logging in: " + error.message);
    });
};

const logOut = () => {
  signOut(auth).then(() => {
    console.log("User signed out.");
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to login page
  }).catch((error) => {
    console.error("Error signing out:", error);
    alert("Error logging out: " + error.message);
  });
};

// Export functions
export { signUp, logIn, logOut };
