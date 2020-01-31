import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({[name]: value});
  }

  onLogin = event => {
    event.preventDefault();
    var {txtPassword, txtUsername} = this.state;
    if (txtUsername === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({username: txtUsername, password: txtPassword}));
    }
  }
  render() {
    var {txtPassword, txtUsername} = this.state;
    var loggedUser = localStorage.getItem('user');
    if (loggedUser !== null) {
      //Lấy props từ Routes 
      var {location} = this.props;
      // Login thành công + thông tin nhận biết chuyển từ trang nào(Truy xuất từ trang trước)
      return <Redirect to={
        {
          pathname: '/products',
          state: {            
            from: location
          }
        }}/>
    }
    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onLogin}>
            <legend>Login</legend>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Username"
                name="txtUsername"
                value={txtUsername}
                onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id=""
                placeholder="Password"
                name="txtPassword"
                value={txtPassword}
                onChange={this.onChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>

    );
  }
}

export default Login;