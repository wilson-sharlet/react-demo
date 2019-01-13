import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css';

const Post = (props) => (
    <div className='Post'>
        <Link to={`/${props.id}`}><h1>{props.title}</h1></Link>
    </div>
);

export default Post;