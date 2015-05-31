var FortyFives = React.createClass({

  getInitialState: function() {
    return (
      {
        teamOne: {
          tally: [],
          total: 0
        },
        teamTwo: {
          tally: [],
          total: 0
        }
      }
    );
  },

  render: function() {
    return (
      <div className='container'>
        <Header />
        <Tally />
        <Total />
        <PointsFooter />
      </div>
    );
  }
});
