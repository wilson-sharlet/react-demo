import React, { Component } from 'react';
import axios from 'axios';
import {withRouter, Redirect} from 'react-router-dom';

class PostDetail extends Component {
    constructor() {
        super();
        this.state = {
            post: null,
        }
    }

    loadPost = () => {
        if (this.props.match.params.id) {
            if (!this.state.post || this.state.post.id !== Number(this.props.match.params.id))
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then((response) => this.setState({ post: response.data }))
        }
    }

    componentDidMount = () => {
        this.loadPost();
    }

    render() {
        let data = null;
        if (this.props.match.params.id) {
            if (!this.state.post || this.state.post.id !== this.props.match.params.id) {
                data = (<p>Loading...</p>)
            }
            if (this.state.post) {
                data = (<p>{this.state.post.body}</p>)
            }
        }
        return (<>
            {data}
        </>)
    }
}

export default withRouter(PostDetail);