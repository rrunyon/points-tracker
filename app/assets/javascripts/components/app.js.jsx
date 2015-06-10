var FortyFives = React.createClass({

  getInitialState: function() {
    return (JSON.parse(localStorage.getItem('state')) ||
      {
        tally: {
          teamOne: [],
          teamTwo: []
        },
        total: {
          teamOne: 0,
          teamTwo: 0
        },
        wins: {
          teamOne: 0,
          teamTwo: 0
        }
      }
    );
  },

  updateScore: function(obj) {
    state = Immutable.fromJS(this.state);
    state = state.updateIn(['tally', 'teamOne'],
                           function(list) {
                             return list.push(obj.teamOne.value)
                           });
    state = state.updateIn(['tally', 'teamTwo'],
                           function(list) {
                             return list.push(obj.teamTwo.value)
                           });

    state = state.updateIn(['total', 'teamOne'],
                            function(total) {
                              return eval(total + obj.teamOne.value)
                            });
    state = state.updateIn(['total', 'teamTwo'],
                            function(total) {
                              return eval(total + obj.teamTwo.value)
                            });
    this.setState(state.toJS());
    localStorage.setItem('state', JSON.stringify(state.toJS()));
  },

  resetGame: function() {
    localStorage.setItem('state', null);
    this.setState(this.getInitialState());
  },

  render: function() {
    return (
      <div className='container'>
        <Header wins={this.state.wins} />
        <Tally tally={this.state.tally} />
        <Total total={this.state.total} />
        <PointsManagerContainer updateScore={this.updateScore} />
        <button className='btn btn-default' onClick={this.resetGame}>
          Reset
        </button>
      </div>
    );
  }
});
