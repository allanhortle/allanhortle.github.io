// @flow
import React from 'react';
import MainLayout from '../components/MainLayout';
import {Heading, Text} from '../components/Affordance';
import {Box} from '../components/Layout';

type State = {
    time: string
};

class DecimalTime extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            time: '00:00:00'
        };
    }

    componentDidMount(){
        setInterval(this.tick, 100);
    }

    tick = () => {
        var currentTime = new Date ();


        var h = currentTime.getHours();
        var m = currentTime.getMinutes();
        var s = currentTime.getSeconds();

        var dt = ((s/86400)+(m/1440)+(h/24))

        var hours = (dt * Math.pow(10,-1)).toString().split('.')[1];
        var minutes = (dt * Math.pow(10,1)).toString().split('.')[1];
        var seconds = (dt * Math.pow(10,3)).toString().split('.')[1];

        var time = hours.substring(0,2) + ':' + minutes.substring(0,2) + ':' + seconds.substring(0,2);
        this.setState({time})
    }

    render() {
        return <MainLayout {...this.props}>
            <Heading>Decimal Time</Heading>
            <Box p={3}>
                <Text as="div" textAlign="center">{this.state.time}</Text>
            </Box>
        </MainLayout>;
    }
}

export default DecimalTime;
