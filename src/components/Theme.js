// @flow

function makeTheme(colors) {
    return {
        space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
        colors,
        fonts: {
            copy: `'Menlo', 'Inconsolata', monospaced`
        },
        textStyles: {
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
    bg: '#343d46',
    fg: '#d8dee9',
    comment: '#6D6D6D',
    black: '#1b1f23',
    blue: '#6699cc',
    green: '#99c794',
    yellow: '#fac863',
    white: '#fac863',
    red: '#ec5f67',
    purple: '#c594c5',
    lineHighlight: '#2e4e3a'
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
