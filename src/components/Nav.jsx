import {NavLink} from 'react-router-dom';
import WeatherForm from './WeatherForm';

class Nav extends React.Component {

  onSearch = (city) => {
    if (city && city.length > 0) {
      // let encodedLocation = encodeURIComponent(city);
      window.location.hash = '#/?location=' + city;
    }
  };

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get
                Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active"
                       activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/examples" activeClassName="active"
                       activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <WeatherForm onSearch={this.onSearch} inHeader={true}/>
        </div>
      </div>
    );
  }
}

export default Nav;