// @flow
const React = require("react");
const {ThemeProvider} = require('styled-components');
const {DarkTheme, LightTheme} = require('./src/components/Theme');
const {useState, cloneElement} = React;

function Provider({element, rootProps}: Object) {
    const [darkMode, setDarkMode] = useState(true);
    return <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        {cloneElement(element, {...rootProps, setDarkMode, darkMode})}
    </ThemeProvider>;
}

exports.wrapPageElement = ({element, props}: Object) => {
    return <Provider element={element} rootProps={props} />;
};

