// @flow
import React from 'react';
import MainLayout from '../components/MainLayout';
import {Heading, Text} from '../components/Affordance';
import {Box, Flex} from '../components/Layout';

type State = {
    time: string,
    realTime: string
};

class DecimalTime extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            realTime: {h: 0, m: 0, s: 0},
            decimalTime: {h: 0, m: 0, s: 0}
        };
    }

    componentDidMount(){
        setInterval(this.tick, 10);
    }

    tick = () => {
        var currentTime = new Date();
        var start = new Date().setHours(0, 0, 0, 0);

        const msPerDay = 86400000;

        const decimal = (currentTime - start) / msPerDay;
        const dt = '' + decimal;

        //var beginning = ms - (ms % msPerDay);


        var h = currentTime.getHours();
        var m = currentTime.getMinutes();
        var s = currentTime.getSeconds();

        this.setState({
            fraction: decimal,
            realTime: {h,m,s},
            decimalTime: {
                h: dt.substring(2,3),
                m: dt.substring(3,5),
                s: dt.substring(5,7)
            }
        });
    }

    render() {
        const {fraction, realTime, decimalTime} = this.state;
        const pad = (val) => String(val).padStart(2, '0');
        const timeToString = ({h,m,s}) => `${pad(h)}:${pad(m)}:${pad(s)}`;
        const width = Math.floor(fraction * 100);
        return <MainLayout {...this.props}>
            <Heading>Decimal Time</Heading>
            <Box p={3} pt={4}>
                <Flex>
                    <Box flexBasis="10rem" as="pre" pr={3}>Decimal   {timeToString(decimalTime)}</Box>
                    <Box position="relative" flexGrow="1">
                        <Box position="absolute" top="-50%" left={0} height="300%" borderRight="1px solid" borderColor="red" width={`${width}%`}/>
                        <Box position="absolute" top="-50%" left={0} height="300%" borderRight="1px solid" borderColor="comment" width="0%"/>
                        <Box position="absolute" top="-50%" left={0} height="300%" borderRight="1px solid" borderColor="comment" width="25%"/>
                        <Box position="absolute" top="-50%" left={0} height="300%" borderRight="1px solid" borderColor="comment" width="50%"/>
                        <Box position="absolute" top="-50%" left={0} height="300%" borderRight="1px solid" borderColor="comment" width="75%"/>
                        <Box position="absolute" top="-50%" left={0} height="300%" borderRight="1px solid" borderColor="comment" width="100%"/>
                        <Flex>
                            {this.renderPercent(realTime, 10, 100)}
                        </Flex>
                    </Box>
                </Flex>
                <Flex>
                    <Box flexBasis="10rem" as="pre" pr={3}>Standard  {timeToString(realTime)}</Box>
                    <Box position="relative" flexGrow="1">
                        <Flex>
                            {this.renderPercent(realTime, 24, 60)}
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </MainLayout>;
    }

    renderPercent = (time, count, totalMinutes) => {
        const {h, m} = time;
        return [...Array(count)].map((_, ii) => {
            const index = ii;
            const props = {flex: `0 0 ${(100 / count)}%`, key: index};
            return <Box {...props}>{index}</Box>;
        });
    }
}

export default DecimalTime;
