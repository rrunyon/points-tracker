var App = React.createClass({

  getInitialState: function() {
    return (JSON.parse(localStorage.getItem(
      this.props.game + '-points-tracker-state')) ||
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
    localStorage.setItem(
      this.props.game + '-points-tracker-state', JSON.stringify(state.toJS()));
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
    localStorage.setItem(
      this.props.game + '-points-tracker-state', JSON.stringify(state.toJS()));
  },

  resetGame: function() {
    
    state = Immutable.fromJS(this.state);
    state = state.setIn(['tally', 'teamOne'], []);
    state = state.setIn(['tally', 'teamTwo'], []);
    state = state.setIn(['total', 'teamOne'], 0);
    state = state.setIn(['total', 'teamTwo'], 0);

    localStorage.setItem(this.props.game + '-points-tracker-state',
                         JSON.stringify(state.toJS()));
    this.setState(state.toJS());
  },

  resetWins: function() {
    
    state = Immutable.fromJS(this.state);
    state = state.setIn(['wins', 'teamOne'], 0);
    state = state.setIn(['wins', 'teamTwo'], 0);

    localStorage.setItem(this.props.game + '-points-tracker-state',
                         JSON.stringify(state.toJS()));
    this.setState(state.toJS());
  },

  render: function() {
    return (
      <div className='container'>
        <Header wins={this.state.wins} updateWins={this.updateWins} />
        <Tally tally={this.state.tally} />
        <Total total={this.state.total} />
        <PointsManagerContainer updateScore={this.updateScore}
                                game={this.props.game}/>
        <button className='btn btn-default' id='reset-game'
                onClick={this.resetGame}>
          Reset Game
        </button>
        <button className='btn btn-default' id='reset-wins'
                onClick={this.resetWins}>
          Reset Wins
        </button>
      </div>
    );
  }
});
