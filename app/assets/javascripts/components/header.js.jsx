var Header = React.createClass({

  render: function() {
    return (
      <div className='row'>
        <div className='col-xs-6 col-md-6 team-header' id='team-1'>
          <span>Team 1</span>
          &nbsp;
          <span>({this.props.wins.teamOne})</span>
        </div>
        <div className='col-xs-6 col-md-6 team-header' id='team-2'>
          <span>Team 2</span>
          &nbsp;
          <span>({this.props.wins.teamTwo})</span>
        </div>
      </div>
    );
  }
});
