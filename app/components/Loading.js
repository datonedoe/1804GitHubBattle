import React, {Component} from 'react';
import PropTypes from 'prop-types';

let styles = {
  content: {
    textAlign: 'center',
    fontSize: "35px"
  }
}

class Loading extends Component {
  state = {
    text: this.props.text
  }

  componentDidMount() {
    let stopper = this.props.text + "...";
    this.interval = window.setInterval( () => {
      if (this.state.text === stopper) {
        this.setState({ text: this.props.text })
      } else {
        this.setState({ text: this.state.text + "." })
      }
    }, this.props.speed)
  }

  componentWillUpdate(nextProps) {
    window.clearInterval(this.interval);
  }


  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}


Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 10
}

export default Loading;
