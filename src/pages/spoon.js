// @flow
import React from 'react';
import MainLayout from '../components/MainLayout';
import {Heading, Label, Text, Input} from '../components/Affordance';
import {Box} from '../components/Layout';

const regexA = new RegExp('^(.+?)([aeiouAEIOU].*)');
const regexB = new RegExp('^(sh|st|pr|fr|.)(.*)');

type Props = {};
type State = {
    spoon: [string, string],
    input: string
};

class Spoon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            spoon: ['Freven', 'Sty'],
            input: 'Steven Fry'
        };
    }
    componentDidMount(){
        this.refs.input.focus();
    }
    onChange = (ee) => {
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
        return <MainLayout {...this.props}>
            <Heading mb={3}>Spoon</Heading>
            <Box >
                <Label>Input:</Label>
                <Input ref="input" className="Input" type="text" onChange={this.onChange} value={this.state.input}/>
                <Box>{'\u00A0↓'}</Box>
                <Label>Spoonerism:</Label>
                <Box>{this.state.spoon.join(' ') || '\u00A0'}</Box>
            </Box>
        </MainLayout>;
    }
}

export default Spoon;
