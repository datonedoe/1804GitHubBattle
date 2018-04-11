import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';


class PlayerInput extends React.Component {
  state = {
    username: ''
  }

  handleChange =(event) => {
    let value =  event.target.value;
    this.setState({ username: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="github username"
          type="text"
          autoComplete="off"
          value={this.state.username}
          onChange={this.handleChange}/>
          <button className='button' type="submit" disabled={!this.state.username}> Submit</button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class Battle extends React.Component {
  state = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null
  }

  handleSubmit = (id, username) => {
    // this.setState({ ...this.state, id+"Name": username, id+"Image": "http://github.com/"+username"+".png?size=200" })
    this.setState(function () {
      var newState = {};
      newState[id + `Name`] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState;
    })
  }

  handleReset = (id) => {
    var newState = {};
    newState[id + `Name`] = null;
    newState[id + 'Image'] = null;
    this.setState({ ...this.state, ...newState })
  }

  render() {
    let match = this.props.match;
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;
    let playerOneImage = this.state.playerOneImage;
    let playerTwoImage = this.state.playerTwoImage;

    console.log("battle state", this.state);
    return (
      <div>
        <div className='row'>
          {!playerOneName && <PlayerInput id='playerOne' label="Player One" onSubmit={this.handleSubmit}/>}
          {playerOneImage !== null && (
            <PlayerPreview
            avatar={playerOneImage}
            username={playerOneName}
            >
              <button className='reset' onClick={this.handleReset.bind(this, "playerOne")}>Reset</button>
          </PlayerPreview>
          )}
          {!playerTwoName && <PlayerInput id='playerTwo' label="Player Two" onSubmit={this.handleSubmit} />}
          {playerTwoImage !== null && (
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              >
                <button className='reset' onClick={this.handleReset.bind(this, "playerTwo")}>Reset</button>
            </PlayerPreview>)}
        </div>
        {playerOneImage && playerTwoImage && <Link to={{pathname: match.url + "/results", search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`}} className='button'>Battle</Link>}

      </div>

    )
  }
}

export default Battle;
