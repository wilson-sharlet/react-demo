import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';

const Post = (props) => (
    <div className='Post'>
        <Link to={`/posts/${props.id}`}><h1>{props.title}</h1></Link>
        <button onClick={props.clicked}>Show Detail</button>
    </div>
);

export default Post;