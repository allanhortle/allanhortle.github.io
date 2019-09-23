// @flow
const React = require('react');
const Provider = require('./Provider');

exports.wrapPageElement = ({element, props}: Object) => {
    return <Provider element={element} rootProps={props} />;
};

