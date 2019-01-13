import React from 'react';

const MemoDemo = (props) => {
    return (<p>Test {props.test}</p>)
}

export default React.memo(MemoDemo);