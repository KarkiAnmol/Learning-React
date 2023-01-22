class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
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
root.render(<Clock />);