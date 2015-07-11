var PointsManagerContainer = React.createClass({

  getInitialState: function() {
    return (
      {
        teamOne: {
          view: null,
          value: null
        },
        teamTwo: {
          view: null,
          value: null
        }
      }
    );
  },

  resetState: function() {
    this.setState(this.getInitialState());
  },

  declareWinner: function(team, view) {
    state = Immutable.fromJS(this.state);
    if (view === 'subtract') {
      if (team === 'teamOne') {
        state = state.setIn(['teamOne', 'view'], 'subtract');
        state = state.setIn(['teamTwo', 'view'], 'add');
      } else {
        state = state.setIn(['teamOne', 'view'], 'add');
        state = state.setIn(['teamTwo', 'view'], 'subtract');
      }
    }
    if (view === 'add') {
      if (team === 'teamOne') {
        state = state.setIn(['teamOne', 'view'], 'add');
        state = state.setIn(['teamTwo', 'view'], 'hybrid');
      } else {
        state = state.setIn(['teamOne', 'view'], 'hybrid');
        state = state.setIn(['teamTwo', 'view'], 'add');
      }
    }
    this.setState(state.toJS());
  },

  updateValue: function(team, value) {
    state = Immutable.fromJS(this.state);
    state = state.setIn([team, 'value'], value);
    this.setState(state.toJS());
  },

  handleSubmit: function() {
    this.props.updateScore(this.state);
    this.resetState();
  },

  readyForSubmit: function () {
    return (this.state.teamOne.value !== null &&
            this.state.teamTwo.value !== null);
  },

  submitButton: function () {
    if (this.readyForSubmit() === true) {
      return (
        <button className='btn btn-info'
                onClick={this.handleSubmit}>
          Submit
        </button>
      );
    } else {
      return (
        <button className='btn disabled'>
          Submit
        </button>
      );
    }
  },

  editButtons: function() {
    if ((this.state.teamOne.view !== null) &&
        (this.state.teamTwo.view !== null)) {
          return (
            <div className='col-xs-12 col-md-12'>
              <div id='edit-buttons'>
                {this.submitButton()}
                <button className='btn btn-danger'
                        onClick={this.resetState}>
                  Cancel
                </button>
              </div>
            </div>
          );
    }
  },

  render: function() {
    return (
      <div>
        <div className='row'>
          <PointsManager team='teamOne' data={this.state.teamOne}
                         declareWinner={this.declareWinner}
                         updateValue={this.updateValue}
                         game={this.props.game}
          />
          <PointsManager team='teamTwo' data={this.state.teamTwo}
                         declareWinner={this.declareWinner}
                         updateValue={this.updateValue}
                         game={this.props.game}
         />
        </div>
        <div className='row'>
          {this.editButtons()}
        </div>
      </div>
    );
  }
});
