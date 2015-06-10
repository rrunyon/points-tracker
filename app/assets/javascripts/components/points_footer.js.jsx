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

  resetState: function(e) {
    e.preventDefault();
    this.setState(this.getInitialState());
  },

  declareWinner: function(team) {
    state = Immutable.fromJS(this.state);
    if (team === 'teamOne') {
      state = state.setIn(['teamOne', 'view'], 'add');
      state = state.setIn(['teamTwo', 'view'], 'subtract');
      this.setState(state.toJS());
    } else {
      state = state.setIn(['teamOne', 'view'], 'subtract');
      state = state.setIn(['teamTwo', 'view'], 'add');
      this.setState(state.toJS());
    }    
  },

  updateValue: function(team, value) {
    state = Immutable.fromJS(this.state);
    state = state.setIn([team, 'value'], value);
    this.setState(state.toJS());
  },

  handleSubmit: function() {
    this.props.updateScore()    
  },

  editButtons: function() {
    if ((this.state.teamOne.view !== null) &&
        (this.state.teamTwo.view !== null)) {
          return (
            <div className='row'>
              <button className='btn btn-info' onClick={this.handleSubmit}>
                Submit
              </button>
              <button className='btn btn-danger' onClick={this.resetState}>
                Cancel
              </button>
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
                         updateValue={this.updateValue} />
          <PointsManager team='teamTwo' data={this.state.teamTwo}
                         declareWinner={this.declareWinner}
                         updateValue={this.updateValue} />
        </div>
        {this.editButtons()}
      </div>
    );
  }
});
