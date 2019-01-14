import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import { Route } from 'react-router-dom';
import PostDetail from './PostDetail';

const defaultPost = {
    userId: 11,
    title: 'Test Title',
    body: 'Test Body'
}

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    componentDidMount = () => {
        axios.get('/posts')
            .then((response) => this.setState({ posts: response.data }));
    }

    createPostHandler = () => {
        axios.post('/posts', defaultPost)
        .then(response => console.log(response));
    }

    handleDetailClick = (id) => {
        // this.props.history.push(`${this.props.match.url}/${id}`);
        this.props.history.replace({pathname: `${this.props.match.url}/${id}`});
    }

    render() {
        const posts = this.state.posts.map(post => (<Post
            key={post.id}
            title={post.title}
            id={post.id}
            clicked={() => this.handleDetailClick(post.id)}
        />))
        return (
            <>
                <Route path={`${this.props.match.url}/:id`} component={PostDetail} />
                <button onClick={this.createPostHandler}>Create Post</button>
                <div style={{textAlign: "center"}}>{posts}</div>
            </>
        )
    }
}

export default Posts;