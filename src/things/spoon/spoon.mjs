import React from 'react';

const regexA = new RegExp('^(.+?)([aeiouAEIOU].*)');
const regexB = new RegExp('^(sh|st|pr|fr|.)(.*)');

class Spoon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spoon: ['Freven', 'Sty'],
            input: 'Steven Fry'
        };
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        this.refs.input.focus();
    }
    onChange(ee) {
        var {value} = ee.target;
        var words = value.split(' ').filter(ii => ii);
        this.setState({
            input: value,
            spoon: words
                .map((ww, key, iterable) => {
                    var match = ww.match(regexA) || ww.match(regexB);
                    var [word, start, end] = match;
                    return {start, end};
                })
                .map((ww, key, iterable) => {
                    var next = iterable[key + 1] || iterable[0];
                    return next.start + ww.end;
                })
        });
    }
    render() {
        return <div className="Spoon">
            <h1 className="Spoon_heading">Spoon</h1>
            <div className="Label">Input:</div>
            <input ref="input" className="Input" type="text" onChange={this.onChange} value={this.state.input}/>
            <div className="Text">{'\u00A0↓'}</div>
            <div className="Label">Spoonerism:</div>
            <div className="Text">{this.state.spoon.join(' ') || '\u00A0'}</div>
        </div>;
    }
}

export default Spoon;
