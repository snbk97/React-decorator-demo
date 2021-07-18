import React from 'react';

const MyHoc = Component => props => (
    <Component 
        message="World"
        {...props}
    />
)

export default MyHoc;