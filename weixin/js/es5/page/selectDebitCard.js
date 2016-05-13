'use strict';

var SelectDebitCard = React.createClass({
    displayName: 'SelectDebitCard',

    getInitialState: function getInitialState() {
        return {
            loaded: 0
        };
    },
    componentDidMount: function componentDidMount() {
        requireCheck(['backBar'], this.init);
        historyPage = 'selectFace';
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
            React.createElement(BackBar, { title: '申请分期' }),
            React.createElement(
                'div',
                { className: 'yellowTip alphaBg clearFix' },
                React.createElement(
                    'div',
                    { className: 'tipIcon', style: { 'padding-top': '0px' } },
                    React.createElement('img', { src: 'img/tipicon.png' })
                ),
                React.createElement(
                    'span',
                    { className: 'tipText', style: { 'font-size': '0.8rem' } },
                    '此卡为您的还款借记卡，为提高您的审核通过率，请选择交易时间为3个月以上的借记卡哦'
                )
            ),
            React.createElement(
                'div',
                { className: 'cardBk' },
                React.createElement(
                    'div',
                    { className: 'imgArea' },
                    React.createElement('img', { src: 'img/debitcard.png' }),
                    React.createElement('input', { type: 'file', accept: 'image/*', className: 'iFile', id: 'idCard' })
                )
            ),
            React.createElement(
                'div',
                { className: 'cardText' },
                '借记卡正面'
            ),
            React.createElement(
                'div',
                { className: 'cardLinkText' },
                React.createElement(
                    'a',
                    { href: '#selectDebitCard#setDebitCard' },
                    '手动输入'
                )
            ),
            React.createElement(
                'a',
                { href: '#selectDebitCard#checkDebitCard' },
                React.createElement(
                    'div',
                    { className: 'acButton' },
                    '下一步'
                )
            )
        );
    }
});