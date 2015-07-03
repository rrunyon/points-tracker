var GameValues = {
  fortyfives: {
    add: ['+ 5', '+ 10', '+ 15', '+ 20', '+ 25', '+ 30'],
    subtract: ['- 5', '- 10', '- 15', '- 20', '- 25', '- 30'],
    hybrid: ['0', '- 15', '- 20', '- 25', '- 30',
             '+ 5', '+ 10', '+ 15', '+ 20',
             '+ 25', '+ 30']
  },
  pitch: {
    add: ['+ 1', '+ 2', '+ 3', '+ 4'],
    subtract: ['- 2', '- 3', '- 4'],
    hybrid: ['0', '- 2', '- 3', '- 4',
             '+ 1', '+ 2', '+ 3', '+ 4']
   },
}

var PointsManager = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    this.props.updateValue(this.props.team, e.target.value);
  },

  normalView: function() {
    return (
      <div className='col-xs-6 col-md-6'>
        <button className='btn btn-default btn-lg'
                onClick={this.props.declareWinner.bind(
                         null, this.props.team, 'add')}>
          <span>+</span>
        </button>
        <button className='btn btn-default btn-lg'
                onClick={this.props.declareWinner.bind(
                         null, this.props.team, 'subtract')}>
          <span>-</span>
        </button>
      </div>
    );
  },

  addView: function() {
    return this._generateView(GameValues[this.props.game].add);
  },

  subtractView: function() {
    return this._generateView(GameValues[this.props.game].subtract);
  },

  hybridView: function() {
    return this._generateView(GameValues[this.props.game].hybrid);
  },

  _generateView: function(values) {
    return (
      <div className='col-xs-6 col-md-6' data-toggle='buttons'>
        {values.map(function(value, i) {
          var classes = 'btn btn-default btn-lg points-button';
          if (this.props.data.value === value) {
            classes += ' selected';
          }
          return (
            <button className={classes} value={value} key={i} type='submit'
                    onClick={this.handleClick}>
              {value}
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
    } else if (this.props.data.view === 'hybrid') {
      return this.hybridView();
    } else {
      return this.normalView();
    }
  },
  
  render: function() {
    return this.view();
  }
});
