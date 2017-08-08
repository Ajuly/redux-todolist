import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Types from '../store/action-types'

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      title:''
    };
  }
  ChangeEditing =(id) =>{
    let item = this.props.todos.find(item =>item.id === id);
    this.title = item.title;
    this.props.ChangeEditing(id);
    this.setState({title:item.title});
  }

  handleChange = (event) =>{
    this.setState({title:event.target.value});
  }

  handleKeyDown = (event,id)=>{
    if(event.keyCode === 27){
      this.props.ChangeEditing('');
      this.setState({title:this.title});
    }else if(event.keyCode === 13){
      this.props.ChangeEditing('');
      this.props.updateTodo(id,this.state.title);
    }
  }
  
  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.length > 0?<li className="list-group-item">
          <input
            onChange = { event =>this.props.toggleAll(event.target.checked)}
            type="checkbox" 
            checked={this.props.activeCount === 0}/>{this.props.activeCount === 0?'全部取消':'全部选中'}
        </li>:null
        }
        {
          this.props.todos.map((item, index) => (
            <li className="list-group-item" key={index}>
              <input type="checkbox" 
                checked={item.completed}
                onChange={() =>this.props.toggleTodo(item.id)}/>
                {
                  this.props.editing === item.id?
                  <input type="text" value={this.state.title}
                    onChange={this.handleChange}
                    onKeyDown={(event) => this.handleKeyDown(event,item.id)} 
                    style={{marginLeft:5,lineHeight:'24px',borderRadius:3,width:300,outline:'none'}} />:<span
                                          onDoubleClick={() =>this.props.ChangeEditing(item.id)}
                                          style={{marginLeft:5,textDecoration:item.completed?'line-through':''}}>{item.title}</span>
                }
              <span className="pull-right">
                 <button
                   className="btn btn-danger btn-xs"
                   onClick = {() => this.props.delTodo(item.id)}
                   >X</button>
              </span>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default connect(
// state => ({todos:state.todos}),
  state =>({todos:state.todos.list.filter(item =>{
    switch(state.filter){
      case 'active':
        return !item.completed;
      case 'completed':
        return item.completed;
      default:
        return true;
    }  
  }),
  activeCount:state.todos.list.filter(item => !item.completed).length,
  editing:state.todos.editing
}),
// 方法一：
//   dispatch => ({
//       delTodo:(id) => dispatch({type:DEL_TODO,id})
//   })
// 方法二：最简单的写法
// 给当前组件增加属性，值是一个函数，返回action
  {
     delTodo:id=> ({type:Types.DEL_TODO,id}),
     toggleTodo:id => ({type:Types.TOGGLE_TODO,id}),
     toggleAll:checked =>({type:Types.TOGGLE_All,checked}),
     ChangeEditing:id =>({type:Types.CHANGE_EDITING,id}),
     updateTodo:(id,title)=>({type:Types.UPDATE_TODO,id,title})
  }
// 方法三：bindActionCreators
// dispatch => bindActionCreators({delTodo:id => ({type:DEL_TODO,id})},dispatch)

 
)(TodoList)