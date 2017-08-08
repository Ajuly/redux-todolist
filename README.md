
## 生成项目

  create-react-app redux-todo

## 提交github
 
 1.git init

 2.git add -A

 3.git commit -m "初始化项目"

 4.git remote add origin https://github.com/BEJUDDY/redux-todolist.git

 5.git push origin master

## 搭建目录结构

  安装依赖的模块
  npm install bootstrap react react-dom redux react-redux -S
  -index.js
  -components
  -store

## 内容

 1.跑通环境

 2.引入bootstrap绘制面板

 3.引入redux

 4.向store中添加todo

 5.在todolist组件中显示列表

 6.实现删除功能

    先改 action.types.js
    在改 reducer todo.js
    最后再改 todoList.js

    举例：

    
    export default connect(
      state => ({todos:state.todos}),
      // 第一种写法
      dispatch => ({
        delTodo:(id) => dispatch({type:DEL_TODO,id})
      })
      // 第二种写法，最简单！！！！！
      {
        delTodo:id=> ({type:DEL_TODO,id})
      }
      // 第三种写法 bindActionCreators import { bindActionCreators} from 'redux'
      dispatch => bindActionCreators( {delTodo:id => ({type:DEL_TODO,id})}, dispatch )
)(TodoList)

 7.切换完成状态

 8.清除已完成

 9.切换过滤的类型

 10.全选和全消

 11.实现编辑功能
 
    双击实现input
    当前编辑的id
    当前编辑的内容
    
 12.保存至localStorage
 
	    取：
	    let list = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
	    let initState = {editing: '', list}
	    存：
	    localStorage.setItem('todos',JSON.stringify(list));








