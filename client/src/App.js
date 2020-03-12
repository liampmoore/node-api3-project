import React, {useState} from 'react';
import axios from 'axios';




function App() {
  const [posts, setPosts] = useState([]);

  const handleClick = async () => {
    try {
    let res = await axios.get('/api/posts');
    const posts = res.data.posts;
      setPosts(posts)
  }
  catch(err) {
    console.error(err)
  }
}

  return (
    <div>
      <header>
        <h1>Liam's heroku jamstack test</h1>
        <p>
          Welcome to my blog api! Here are some posts as a simple test of serving a React app through express on Heroku.
        </p>
      </header>
      <main>
        <button onClick={(e) => {handleClick()}}>Get posts</button>
        {posts && posts.map((post) => {
          return (
            <div>
          <h3>User ID: {post.user_id}</h3>
          <p>{post.text}</p></div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
