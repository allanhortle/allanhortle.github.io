import React from 'react';

const regexA = new RegExp('^(.+?)([aeiouAEIOU].*)');
const regexB = new RegExp('^(sh|st|pr|fr|.)(.*)');

class Spoon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spoon: ['']
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
            <input ref="input" className="Input" type="text" onChange={this.onChange}/>
            <div className="Text Text-center">↓</div>
            <div className="Text Text-center">{this.state.spoon.join(' ')}</div>
        </div>;
    }
}

export default Spoon;
