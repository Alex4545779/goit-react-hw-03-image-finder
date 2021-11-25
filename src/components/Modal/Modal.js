import { Component } from "react/cjs/react.production.min";

import PropTypes, { string } from "prop-types";

import "./Modal.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscClick);
  }

  handleEscClick = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    const { onClick, image } = this.props;
    return (
      <div className="Overlay" onClick={onClick} tabIndex="0">
        <div className="Modal">
          <img src={image} alt={image.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func,
  image: string,
  closeModal: PropTypes.func,
};
