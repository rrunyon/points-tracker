var PointsFooter = React.createClass({
  
  render: function() {
    return (
      <div className='row'>
        <div className='col-xs-6 col-md-6'>
          <button className='btn btn-default'
                  onClick={this.handleTrick}>+</button>
        </div>
        <div className='col-xs-6 col-md-6'>
          <button className='btn btn-default'>+</button>
        </div>
      </div>
    );
  }
});
