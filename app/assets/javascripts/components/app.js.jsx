var FortyFives = React.createClass({

  getInitialState: function() {
    return (
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

  updateScore: function() {
    
  },

  render: function() {
    return (
      <div className='container'>
        <Header wins={this.state.wins} />
        <Tally tally={this.state.tally} />
        <Total total={this.state.total} />
        <PointsManagerContainer updateScore={this.updateScore} />
      </div>
    );
  }
});
