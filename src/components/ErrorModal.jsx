import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'

class ErrorModal extends React.Component {

  componentDidMount() {
    let {title, message} = this.props;
    let modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow expanded" data-close="">Close</button>
        </p>
      </div>
    );
    //TODO: how modals are handled
    let $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  };


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

export default ErrorModal;