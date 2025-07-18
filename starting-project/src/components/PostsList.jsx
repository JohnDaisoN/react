import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts((p)=>[postData, ...p]);

  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
      <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
      
      </ul>
      )}
      {posts.length == 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are not much posts here</h2>
          <p>Start to add some</p>
        </div>

      )}
    </>
  );
}

export default PostsList;