// database.js
import { getDatabase, ref, set, onValue } from "firebase/database";

const db = getDatabase();

const writeUserData = (userId, name, email) => {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email
  });
};

const fetchUserPosts = () => {
  const postsRef = ref(db, 'posts/');
  onValue(postsRef, (snapshot) => {
    const posts = snapshot.val();
    if (posts) {
      // Process posts
      console.log(posts);
    }
  });
};

const addPost = (userId, content) => {
  const newPostKey = ref(db).push().key;
  set(ref(db, 'posts/' + newPostKey), {
    userId,
    content,
    timestamp: Date.now()
  });
};

export { writeUserData, fetchUserPosts, addPost };
