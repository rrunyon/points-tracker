var Total = React.createClass({

  render: function() {
    return (
      <div className='row total'>
        <div className='col-xs-6 col-md-6'>
          <span>{this.props.total.teamOne}</span>
        </div>
        <div className='col-xs-6 col-md-6'>
          <span>{this.props.total.teamTwo}</span>
        </div>
      </div>
    );
  }
});
