import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { is, fromJS } from 'immutable';
import API from '../../api/api';
import { login } from '../../redux/actions/login';
import "./login.less";
class Login extends Component {
  state = {
    userName: "",
    userPwd: ""
  }

  componentDidMount() {
    // 组件挂载
  }

  componentWillUnmount() {
    // 组件卸载
  }

  handleChange(name, event) {
    if(name === "userName"){
      this.setState({userName: event.target.value});
    }
    if(name === "userPwd"){
      this.setState({userPwd: event.target.value});
    }
  }

  /**
   * 将表单数据保存至redux，保留状态
   * @param  {string} type  数据类型 userName||userPwd
   * @param  {object} event 事件对象
   */
  handleInput = (type, event) => {
    let value = event.target.value;
    switch(type){
      case 'userName':
        value = value.replace(/\D/g, '');
        break;
      case 'userPwd':
        value = value.replace(/\D/g, '');
        break;
      default:;
    }
    this.props.saveFormData(value, type);
  }

  loginClick = async () => {
    var param = {
      userName: this.state.userName,
      userPwd: this.state.userPwd
    }
    let result = await API.login(param);
    this.props.login(result.data);
    console.log(this.state.login);
  }

  render() {
    return (
      <div className="login-content">
        <div className="top-login"><img src="" alt="login"/></div>
        <div className="form-group">
          <div className="row"><input className="" type="text" value={this.state.userName} onChange={this.handleChange.bind(this, 'userName')} placeholder="输入用户名"/></div>
          <div className="row"><input className="" type="text" value={this.state.userPwd} onChange={this.handleChange.bind(this, 'userPwd')} placeholder="输入密码"/></div>
          <div className="login"><input className="txt-login" type="button" onClick={ this.loginClick } value="登录"/></div>
        </div>
      </div>
    );
  }
}

export default connect(state=>({
  userName: state.userName,
  userPwd: state.userPwd
}),{
  login
})(Login);