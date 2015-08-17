import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Match from '../components/match';
import * as MatchActions from '../actions/match';

function mapStateToProps(state) {
  return {
    match: state.match
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MatchActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Match);
