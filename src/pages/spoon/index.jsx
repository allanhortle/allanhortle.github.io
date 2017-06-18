import React from 'react';
import {List, Map} from 'immutable';
import './styles.scss';

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
        var words = List(value.split(' ')).filter(ii => ii);
        this.setState({
            spoon: words
                .map((ww, key, iterable) => {
                    var match = ww.match(regexA) || ww.match(regexB);
                    var [word, start, end] = match;
                    return {start, end};
                })
                .map((ww, key, iterable) => {
                    var next = iterable.get(key + 1, iterable.get(0));
                    return next.start + ww.end;
                })
        });




    }
    render() {
        return <div className="Spoon">
            <input ref="input" className="Spoon_input" type="text" onChange={this.onChange}/>
            <h1 className="Spoon_heading">{this.state.spoon.join(' ')}</h1>
        </div>;
    }
}

export default Spoon;
