var PointsManagerContainer = React.createClass({

  getInitialState: function() {
    return (
      {
        // the state for the values should be in here dummy!@!!!!!!!##$
        teamOneView: null,
        teamTwoView: null,
      }
    );
  },

  resetState: function(e) {
    e.preventDefault();
    this.setState(this.getInitialState());
  },

  declareWinner: function(team) {
    if (team === 'teamOne') {
      this.setState({
        teamOneView: 'add',
        teamTwoView: 'subtract'
      });
    } else {
      this.setState({
        teamOneView: 'subtract',
        teamTwoView: 'add'
      });
    }    
  },

  handleSubmit: function() {
    this.props.updateScore()    
  },

  editButtons: function() {
    if ((this.state.teamOneView !== null) &&
        (this.state.teamTwoView !== null)) {
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
        <PointsManager team='teamOne' view={this.state.teamOneView}
                       declareWinner={this.declareWinner} />
        <PointsManager team='teamTwo' view={this.state.teamTwoView}
                       declareWinner={this.declareWinner} />
      </div>
      {this.editButtons()}
      </div>
    );
  }
});
