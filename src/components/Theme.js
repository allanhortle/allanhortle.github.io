// @flow

const colors = {
    bg: '#2f1e2e',
    fg: '#ddd',
    comment: '#6D6D6D',
    black: '#1e101d',
    blue: '#06b6ef',
    green: '#48b685',
    yellow: '#E1AE69',
    orange: '#E1865A',
    white: '#e6e6e6',
    red: '#ef6155',
    purple: '#815ba4',
    lineHighlight: 'rgb(30, 47, 39)'
};

const fonts = {
    copy: `'Menlo', 'Inconsolata', monospaced`
};

const textStyles = {
    h1: {
        backgroundColor: colors.yellow,
        color: colors.bg,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    h2: {
        color: colors.yellow,
        borderBottom: '1px solid'
    },
    h3: {
        color: colors.yellow
    },
    em: {
        fontStyle: 'italic'
    },
    strong: {
        fontWeight: 'bold'
    },
    code: {
        color: colors.purple,
        backgroundColor: colors.black
    }
};
export default {
    colors,
    fonts,
    textStyles
};
