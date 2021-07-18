import React, {Component} from 'react';
import MyHoc from './hocs/MyHoc';
import {connect} from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/actions';

@MyHoc
@connect(({ counter, dispatch }) => ({ count:counter.count, dispatch }))
class App extends Component{

  handleClick = (action) => {
    const {dispatch} = this.props;
    switch (action) {
      case 'i':
        dispatch(increaseCounter())
        break;
      case 'd':
        dispatch(decreaseCounter())
        break;
      default:
        break;
    }
  }

  counter = (count) => (
    <div style={{fontSize:'28px'}}>
      <div>{count}</div>
      <button onClick={()=>this.handleClick('i')}>Increase</button>
      <button onClick={()=>this.handleClick('d')}>Decrease</button>
    </div>
  )

  render(){
    const {message, count} = this.props
    return (
      <div style={{textAlign:'center'}}>
        <h1>Hello {message}</h1>
        {this.counter(count)}
      </div>
    )
  }
}

export default App;
