import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { Route, Link } from 'react-router-dom';
import Error from './Error';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() { 
    const { user } = this.props;

    return (
      <header>
        <nav>
          {/* TODO: add logo as home */}
          <Link to="/">Home</Link>
          <Link to="/get-started">Get Started</Link>
          <Link to="/find">Find a Pet</Link>
          { user
            ? <div>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/post">Post Pet</Link>
              <Link to="/" onClick={this.handleLogout}>Logout</Link>

            </div>
            : 
            <Link to="/auth">Signin</Link>
          }
        </nav>
        { user && <span>Welcome, {user.name}</span> }
        <Error/>
      </header>
    );
  }
}
 
export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);