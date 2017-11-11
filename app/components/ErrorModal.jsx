import React from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'

class ErrorModal extends React.Component {

    componentDidMount() {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow expanded" data-close="">Okay</button>
                </p>
            </div>
        );
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            </div>
        );

    }
}
ErrorModal.defaultProps = {
    title: 'Error',
};

ErrorModal.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
};

module.exports = ErrorModal;