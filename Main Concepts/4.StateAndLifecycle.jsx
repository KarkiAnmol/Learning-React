class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }; //this.state is a object which is assigned a object literal with key value pair,this state gets updated later
    }
    componentDidMount() {// Inside this lifecycle method, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    tick() {//Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time.

        this.setState({//Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
            date: new Date()
        });
    }

    componentWillUnmount() {  //If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
        clearInterval(this.timerID);
    }

    render() {
        return (

            <div>
                <h1>Hello,This Heading won't change.We will encapsulate the timer seperately which will change every 1 second</h1>
                <h2>Digital Clock : {this.state.date.toLocaleDateString()}.</h2>
            </div>
        );
    }
}

const root = ReactDOM.CreateRoot(document.getElementById('root'));
root.render(<Clock />);//this tells react what should be displayed on the screen