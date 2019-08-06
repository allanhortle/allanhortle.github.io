// @flow

function makeTheme(colors) {
    return {
        colors,
        fonts: {
            copy: `'Menlo', 'Inconsolata', monospaced`
        },
        textStyles: {
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
            },
            href: {
                cursor: 'pointer',
                textDecoration: 'underline'
            }
        }
    };
}

export const DarkTheme = makeTheme({
    bg: '#2f1e2e',
    fg: '#ddd',
    comment: '#6D6D6D',
    black: '#1e101d',
    blue: '#06b6ef',
    green: '#48b685',
    yellow: '#E1AE69',
    white: '#e6e6e6',
    red: '#ef6155',
    purple: '#815ba4',
    lineHighlight: 'rgb(30, 47, 39)'
});

export const LightTheme = makeTheme({
    fg: '#4f424c',
    bg: '#fff',
    comment: '#a39e9b',
    black: '#ececec',
    blue: '#155bf9',
    green: '#48b685',
    yellow: '#155bf9',
    white: '#e7e9db',
    red: '#155bf9',
    purple: '#155bf9',
    lineHighlight: 'rgb(188, 217, 219)'
});
