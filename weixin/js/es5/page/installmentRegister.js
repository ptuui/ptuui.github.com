'use strict';

var InstallmentRegister = React.createClass({
    displayName: 'InstallmentRegister',

    getInitialState: function getInitialState() {
        return {
            loaded: 0
        };
    },
    componentDidMount: function componentDidMount() {
        requireCheck(['backBar'], this.init);
        historyPage = 'home';
    },
    init: function init() {
        this.setState({ loaded: 1 });
    },
    render: function render() {
        if (!this.state.loaded) {
            return React.createElement('div', null);
        }
        return React.createElement(
            'div',
            { className: 'page', style: this.props.style },
            React.createElement(
                'div',
                { className: 'yellowTip clearFix' },
                React.createElement(
                    'div',
                    { className: 'tipIcon' },
                    React.createElement('img', { src: 'img/tipicon.png' })
                ),
                React.createElement(
                    'span',
                    { className: 'tipText' },
                    '温馨提示：下载APP申请会更加顺畅哦，',
                    React.createElement(
                        'a',
                        { href: '', target: '_blank' },
                        '去下载'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'tipRight' },
                    React.createElement('img', { src: 'img/greenrighticon.png' })
                )
            ),
            React.createElement(
                'div',
                { className: 'inviteTitle' },
                '邀请码'
            ),
            React.createElement(
                'div',
                { className: 'singleArea' },
                React.createElement('input', { className: 'inviteInput', placeholder: '请输入邀请码' })
            ),
            React.createElement(
                'div',
                { className: 'groupArea' },
                React.createElement(
                    'div',
                    { className: 'groupItem clearFix' },
                    React.createElement(
                        'div',
                        { className: 'itemTitle' },
                        '商　　品'
                    ),
                    React.createElement('input', { className: 'itemInput', defaultValue: '乐视电视' }),
                    React.createElement(
                        'div',
                        { className: 'arrowDown' },
                        React.createElement('img', { src: 'img/arrowdown.png' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'groupItem clearFix' },
                    React.createElement(
                        'div',
                        { className: 'itemTitle' },
                        '分　　期'
                    ),
                    React.createElement('input', { className: 'itemInput', defaultValue: '24' }),
                    React.createElement(
                        'div',
                        { className: 'arrowDown' },
                        React.createElement('img', { src: 'img/arrowdown.png' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'itemFlowText' },
                        '月'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'groupItem clearFix' },
                    React.createElement(
                        'div',
                        { className: 'itemTitle' },
                        '分期金额'
                    ),
                    React.createElement('input', { className: 'itemInput', defaultValue: '600' }),
                    React.createElement(
                        'div',
                        { className: 'itemFlowText' },
                        '元'
                    ),
                    React.createElement(
                        'div',
                        { className: 'itemFlowRightText' },
                        React.createElement(
                            'span',
                            { style: { color: '#eb873d' } },
                            '200'
                        ),
                        '元/每月'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'groupItem clearFix' },
                    React.createElement(
                        'div',
                        { className: 'itemTitle' },
                        '分期用途'
                    ),
                    React.createElement('input', { className: 'itemInput', defaultValue: '58寸乐视智能电视' })
                )
            ),
            React.createElement(
                'a',
                { href: '#installmentRegister#selectIdCard' },
                React.createElement(
                    'div',
                    { className: 'acButton' },
                    '下一步'
                )
            )
        );
    }
});