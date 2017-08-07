
1.git remote add origin https://github.com/BEJUDDY/redux-todolist.git
2.git push -u origin master
3.git init
4.git add -A
5.git commit -m "初始化项目"
6.git remote add origin https://github.com/BEJUDDY/redux-todolist.git
7.git push origin master
8.npm install bootstrap -S
9.如果想在子组件修改父组件的状态，需要在父组建里面定义方法，然后传给子组件，然后让子组件执行
10.这里是箭头函数不会立即执行    
  <input type="checkbox" checked={todo.completed} onChange={() => this.props.toggle(todo.id)} />   

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






