import { connect } from 'react-redux';
import Calculator from './Calculator';

// 容器组件，注入redux的state和dispatch

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd() {
      dispatch({ type: 'ADD' })
    },
    handleMinus() {
      dispatch({ type: 'MINUS' })
    },
    handleRandom() {
      dispatch({ type: 'RANDOM' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);


