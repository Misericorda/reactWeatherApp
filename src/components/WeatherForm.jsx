class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      city: ''
    }
  }

  onFormSubmit(e) {
    e.preventDefault();
    let {city} = this.state;
    if (city) {
      this.props.onSearch(city);
      this.setState({city: ''})
    }
  }

  render() {
    let {inHeader} = this.props;
    let buttonCls = inHeader ? "button" : "button expanded hollow";

    return (
      <form className={inHeader ? 'menu' : ''} onSubmit={this.onFormSubmit}>
        <input type="search" onChange={e => this.setState({city: e.target.value})}
               placeholder="Search weather by city" value={this.state.city}/>
        <button disabled={!this.state.city} className={buttonCls} >Get Weather</button>
      </form>
    );
  }
}

export default WeatherForm;