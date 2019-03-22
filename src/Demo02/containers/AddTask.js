import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFn() {
      dispatch({type: ''})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)()