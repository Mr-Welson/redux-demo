import React, { Component } from 'react';
import { Input, Icon } from 'antd';

class AddTodo extends Component {

  state = {
    text: ''
  }

  handleChange = (e) => {
    const text = e.target.value.trim();
    this.setState({
      text
    })
  }

  handleAdd = () => {
    const { text } = this.state;
    const { handleAdd } = this.props;
    if(text.trim()) {
      handleAdd(text.trim())
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <div>
        <Input
          value={this.state.text}
          onChange={this.handleChange} 
          onPressEnter={this.handleAdd}
          addonAfter={
            <Icon type='plus' onClick={this.handleAdd}/>
          }
        />
      </div>
    )
  }
}

export default AddTodo;