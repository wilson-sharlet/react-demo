import React, { Component } from 'react';

class Test extends Component {
    render() {
        return(<>
            <h4>Test Component</h4>
            <button onClick={this.props.test}>Test</button>
        </>)
    }
}

export default Test;