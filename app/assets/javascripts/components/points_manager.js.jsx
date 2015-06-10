var PointsManager = React.createClass({

  handleClick: function(e) {
  },

  normalView: function() {
    return (
      <div className='col-xs-6 col-md-6'>
        <button className='btn btn-default'
                onClick={this.props.declareWinner.bind(null, this.props.team)}>
          <span>+</span>
        </button>
      </div>
    );
  },

  addView: function() {
    var values = [5, 10, 15, 20, 25, 30]
    return (
      <div className='col-xs-6 col-md-6' data-toggle='buttons'>
        {values.map(function(value, i) {
          return (
            <button className='btn btn-default' value={value} key={i}
                    onClick={this.handleClick}>
              {'+ ' + value}
            </button>
          );
         }.bind(this))}
      </div>
    );
  },

  subtractView: function() {
    var values = [5, 10, 15, 20, 25, 30]
    return (
      <div className='col-xs-6 col-md-6' data-toggle='buttons'>
        {values.map(function(value, i) {
          return (
            <button className='btn btn-default' value={value} key={i}
                    onClick={this.handleClick}>
              {'- ' + value}
            </button>
          );
         }.bind(this))}
      </div>
    );
  },

  view: function() {
    if (this.props.data.view === 'add') {
      return this.addView();
    } else if (this.props.data.view === 'subtract') {
      return this.subtractView();
    } else {
      return this.normalView();
    }
  },
  
  render: function() {
    return this.view();
  }
});
