import './style.css';
import React from 'react'
import setMinHeight from '../../Mixins/setMinHeight'

const LoginResult = React.createClass({
  mixins:[setMinHeight],

  render: function() {
    
    let temp = this.props.location.state;

    return (
      <div className="component mtop60">
        <p>欢迎回来,{temp.username}</p>
      </div>
    )
  } 
});
//关于我们
module.exports = LoginResult;