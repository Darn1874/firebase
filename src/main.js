// main.js
import { signUp, logIn, logOut } from "./auth.js";
import { fetchUserPosts, addPost } from "./database.js";

document.addEventListener("DOMContentLoaded", () => {
  // Signup event
  document.getElementById('signup-button').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUp(email, password);
  });

  // Login event
  document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    logIn(email, password);
  });

  // Logout event
  document.getElementById('logout-button').addEventListener('click', () => {
    logOut();
  });

  // Post event
  document.getElementById('post-button').addEventListener('click', () => {
    const content = document.getElementById('post-content').value;
    addPost("exampleUserId", content); // Replace with actual user ID
  });

  // Fetch user posts
  fetchUserPosts();
});
