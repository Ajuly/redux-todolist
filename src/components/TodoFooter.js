import React , { Component } from 'react'
import { connect } from 'react-redux';
import * as Types from '../store/action-types'

class TodoFooter extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-4">
                    {
                        this.props.activeCount>0?<span style={{height:'20px',lineHeight:'20px'}}>你还有{this.props.activeCount}件待办事</span>:null
                    }    
                </div>
                <div className="col-sm-5">
                    <button
                        onClick = {()=>this.props.changeFilter('all')}
                        className={"btn btn-xs "+(this.props.filter === 'all'?'btn-success':'btn-default')}>全部</button>
                    <button
                        onClick = {()=>this.props.changeFilter('active')}
                        className={"btn btn-xs "+(this.props.filter === 'active'?'btn-success':'btn-default')} style={{marginLeft:5}}>未完成</button>
                    <button
                        onClick = {()=>this.props.changeFilter('completed')} 
                        className={"btn btn-xs "+(this.props.filter === 'completed'?'btn-success':'btn-default')} style={{marginLeft:5}}>已完成</button>
                </div>
                <div className="col-sm-3">
                    {
                       this.props.completedCount>0? <button 
                                                        className="btn btn-danger btn-xs"
                                                        onClick={()=>this.props.deleteAllCompleted()} >清除已完成</button>:null
                    }
                </div>
            </div>
        )
    }
}

//读store
export default connect(
    state=>({
        activeCount:state.todos.list.filter(item => !item.completed).length,
        completedCount:state.todos.list.filter(item => item.completed).length,
        filter:state.filter
    }),
    // DELETE_ALL_COMPLETED
    {
        deleteAllCompleted:() =>({type:Types.DELETE_ALL_COMPLETED}),
        changeFilter:(filter) =>({type:Types.CHANGE_FILTER,filter})
    }

)(TodoFooter)