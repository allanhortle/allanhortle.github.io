import React from 'react';

class DecimalTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        };
        this.tick = this.tick.bind(this);
    }
    componentDidMount(){
        setInterval(this.tick, 100);
    }
    tick() {
        var currentTime = new Date ();

        // 2.4
        // 1.44
        // 0.864


        var h = currentTime.getHours();
        var m = currentTime.getMinutes();
        var s = currentTime.getSeconds();

        // console.log(h, h / 0.24);
        // console.log(m, m/14.4);
        // console.log(s, s/846);

        // console.log((s/864)+(m/14.4)+(h/0.24));

        var dt = ((s/86400)+(m/1440)+(h/24))

        var hours = (dt * Math.pow(10,-1)).toString().split('.')[1];
        var minutes = (dt * Math.pow(10,1)).toString().split('.')[1];
        var seconds = (dt * Math.pow(10,3)).toString().split('.')[1];
        // var rounded = Math.round(mt * 10000) / 10000;

        var time = hours.substring(0,2) + ':' + minutes.substring(0,2) + ':' + seconds.substring(0,2);
        this.setState({time})
    }
    render() {
        return <div className="DecimalTime">
            <h1>{this.state.time}</h1>
        </div>;
    }
}

export default DecimalTime;
