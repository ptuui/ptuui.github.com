/**
* 2016-05-10
* @yifenqi@creditease.cn
* @site http://www.yifenqi.com
*/
"use strict";var About=React.createClass({displayName:"About",getInitialState:function(){return{loaded:0}},componentDidMount:function(){requireCheck(["backBar"],this.init)},init:function(){this.setState({loaded:1})},render:function(){return this.state.loaded?React.createElement("div",{className:"page",style:this.props.style},React.createElement(BackBar,{title:"宜分期首页"}),React.createElement("div",null,"a",React.createElement("br",null),"a",React.createElement("br",null),"a",React.createElement("br",null),"a",React.createElement("br",null),"a",React.createElement("br",null),"a",React.createElement("br",null),"a",React.createElement("br",null),"宜分期首页 宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null),"宜分期首页",React.createElement("br",null))):React.createElement("div",null)}});