var Tally = React.createClass({

  render: function() {
    return (
      <div className='row'>
        <div className='col-xs-6 col-md-6'>
          {this.props.tally.teamOne.map(function(row, i) {
            return (
              <div className='row col-xs-12 col-md-12' key={i}>
                <span>{row}</span>
              </div>
            );
           })}
        </div>
        <div className='col-xs-6 col-md-6'>
          {this.props.tally.teamTwo.map(function(row, i) {
            return (
              <div className='row col-xs-12 col-md-12' key={i}>
                <span>{row}</span>
              </div>
            );
           })}
        </div>
      </div>
    );
  }
});
