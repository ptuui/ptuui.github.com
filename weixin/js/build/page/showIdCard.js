/**
* 2016-05-13
* @yifenqi@creditease.cn
* @site http://www.yifenqi.com
*/
"use strict";var ShowIdCard=React.createClass({displayName:"ShowIdCard",getInitialState:function(){return{loaded:0}},componentDidMount:function(){requireCheck(["backBar"],this.init),historyPage="checkIdCard"},init:function(){this.setState({loaded:1})},render:function(){return this.state.loaded?React.createElement("div",{className:"page",style:this.props.style},React.createElement(BackBar,{title:"申请分期"}),React.createElement("div",{className:"idCardShow"},React.createElement("div",{className:"idCardShowTextG"},React.createElement("div",{className:"textL"},"身份证号"),React.createElement("div",{className:"textR"},"****************32")),React.createElement("div",{className:"idCardShowTextG"},React.createElement("div",{className:"textL"},"姓　　名"),React.createElement("div",{className:"textR"},"*军"))),React.createElement("a",{href:"#showIdCard#selectFace"},React.createElement("div",{className:"acButton",style:{margin:"30px 15px 0px 15px"}},"下一步"))):React.createElement("div",null)}});