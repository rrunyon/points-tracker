var Tally = React.createClass({

  render: function() {
    return (
      <div className='row'>
        <div className='col-xs-6 col-md-6'>
          {this.props.tally.teamOne.map(function(row) {
            return (
              <div className='row'>
              <span>{row}</span>
              </div>
            );
           })}
        </div>
        <div className='col-xs-6 col-md-6'>
          {this.props.tally.teamOne.map(function(row) {
            return (
              <div className='row'>
              <span>{row}</span>
              </div>
            );
           })}
        </div>
      </div>
    );
  }
});
