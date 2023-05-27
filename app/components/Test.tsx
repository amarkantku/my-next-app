import React from 'react';
type TestProps = {
    title: string;
};

const Test = ({ title }: TestProps) => {
    return <div>{title}</div>;
};

export default Test;
