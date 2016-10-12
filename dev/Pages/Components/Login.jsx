import './style.css';
import React from 'react'
import LeftMenu from './Common/LeftMenu'
import setMinHeight from '../../Mixins/setMinHeight'

import { Input } from '../../MTUI/index'  

const Login = React.createClass({
  mixins:[setMinHeight],

  loginByUserName(context) {
      var username = $("#username").val();
      var password = $("#password").val();
      if(username === "" || password === ""){
        alert("用户名和密码不能为空！");
        return;
      }
      this.props.history.pushState({username: username}, '/loginResult')
      //this.props.browserHistory.pushState({username: username}, '/loginResult')
      //this.context.router.pushState( '/loginResult',{username: username});
    }, 

  render: function() {
    /*if(this.props.children){
  		return (
  			<div className="component mtop60" style={{ minHeight: this.state.height+"px"}}>
  				<LeftMenu />
  				{this.props.children}
  			</div>
  		);
  	}else{
  		return (
        <div className="component mtop60" style={{ minHeight: this.state.height+"px"}}>
          <LeftMenu />
          <div className={conf.pageAnimate+" contents"}> 
              首页说明文档,我去~
          </div>
        </div>
      );
  	}*/

    

    return (
      <div className="component mtop60">
        <div className="loginInput">
          <label>请输入用户名</label><Input id="username" placeholder='请输入用户名'/>
          <br/><br/>
          <label>请输入密码</label><Input id="password" placeholder="请输入密码" type="password"/>
          <br/><br/>
        </div>
        <div className="loginBtn">
          <a href="javascript:;" className="mt-btn-blue ink-reaction"  onClick={this.loginByUserName} >登录</a>
          <a href="javascript:;" className="mt-btn-red ink-reaction">找回密码</a>
          <br/><br/>
        </div>
      </div>
    );
  } 
});
//关于我们
module.exports = Login;