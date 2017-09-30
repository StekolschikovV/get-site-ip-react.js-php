class Root extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            ip: ' '
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler.bind(this)}>
                <h1>Get site IP</h1>
                <input type="text" placeholder="enter site URL" value={this.state.value} onChange={this.formInputOnChangeHandler.bind(this)} />
                <input type="submit" value="Get IP" />
                <div id="ip">{this.state.ip}</div>
            </form>
        );
    }

    formInputOnChangeHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    formSubmitHandler(e) {
        e.preventDefault()
        this.getIp()
    }

    getIp() {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', `./info.php?url=${this.state.value}`, false)
        xhr.send()
        this.setState({
            ip: xhr.responseText
        })
    }
}
ReactDOM.render(<Root />, document.getElementById('root'));