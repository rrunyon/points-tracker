var App = React.createClass({

  getInitialState: function() {
    return (JSON.parse(localStorage.getItem('points-tracker-state')) ||
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
    console.log(this.state);
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
                              if (obj.teamOne.value === '0') {
                                obj.teamOne.value = 0;
                              }
                              return eval(total + obj.teamOne.value)
                            });
    state = state.updateIn(['total', 'teamTwo'],
                            function(total) {
                              if (obj.teamTwo.value === '0') {
                                obj.teamTwo.value = 0;
                              }
                              return eval(total + obj.teamTwo.value)
                            });
    this.setState(state.toJS());
    localStorage.setItem('points-trackerstate', JSON.stringify(state.toJS()));
  },

  // TODO: is Immutable necessary here?
  updateWins: function(team) {
    state = Immutable.fromJS(this.state);
    state = state.updateIn(['wins', team],
                            function(total) {
                              return total + 1;
                            });
    
    state = state.setIn(['tally', 'teamOne'], []);
    state = state.setIn(['tally', 'teamTwo'], []);
    state = state.setIn(['total', 'teamOne'], 0);
    state = state.setIn(['total', 'teamTwo'], 0);

    this.setState(state.toJS());
    localStorage.setItem('points-tracker-state', JSON.stringify(state.toJS()));
  },

  resetGame: function() {
    localStorage.setItem('state', null);
    this.setState(this.getInitialState());
  },

  render: function() {
    return (
      <div className='container'>
        <Header wins={this.state.wins} updateWins={this.updateWins} />
        <Tally tally={this.state.tally} />
        <Total total={this.state.total} />
        <PointsManagerContainer updateScore={this.updateScore} />
        <button className='btn btn-default' id='reset'
                onClick={this.resetGame}>
          Reset
        </button>
      </div>
    );
  }
});
