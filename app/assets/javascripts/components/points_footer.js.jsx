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
    if (team === 'teamOne') {
      this.setState({
        teamOne: {
          view: 'add'
        },
        teamTwo: {
          view: 'subtract'
        }
      });
    } else {
      this.setState({
        teamOne: {
          view: 'subtract'
        },
        teamTwo: {
          view: 'add'
        }
      });
    }    
  },

  updateValue: function(team, value) {
    obj = {}
    obj[team] = value;
    this.setState(obj);
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
    console.log(this.state);
    return (
      <div>
        <div className='row'>
          <PointsManager team='teamOne' data={this.state.teamOne}
                         declareWinner={this.declareWinner}
                         updateValue={this.updateValue}/>
          <PointsManager team='teamTwo' data={this.state.teamTwo}
                         declareWinner={this.declareWinner} />
        </div>
        {this.editButtons()}
      </div>
    );
  }
});
