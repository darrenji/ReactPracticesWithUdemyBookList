**什么是Reducer?**

<br>

假设有如下的一个对象：

	{
		books: [{title:'a'},{title:'b'}],
		activeBook:{title: 'haha'}
	}

- 针对books字段的state,我们需要一个Books Reducer
- 针对activeBook字段的state,我们需要一个ActiveBook Reducer

<br>

Reducer用来生产状态的值。

<br>

**本篇使用Redux创建BookList组件。**

<br>

**首先是Reducer数据源。**

<br>

> touch src/reducers/reducer_books.js

<br>

	export default function(){
	    return [
	        {title: 'Javascript: The Good Parts'},
	        {title: 'Harry Potter'},
	        {title: 'The Dark Tower'},
	        {title: 'Eloquent Ruby'}
	    ]
	}

<br>

**然后是配置数据源。**

<br>

> src/reducers/index.js, 在这里配置所有的reducers

<br>

	import { combineReducers } from 'redux';
	import BooksReducer from './reducer_books';
	
	const rootReducer = combineReducers({
	  books: BooksReducer
	});
	
	export default rootReducer;
这里的books会存放到全局的state属性中。即在全局有一个`state.books`对象。

<br>

**接着，创建BookList组件。**

<br>


> mkdir src/containers

<br>

> touch src/containers/book-list.js

<br>

	import React, {Component } from 'react';
	import { connect } from 'react-redux';
	
	class BookList extends Component{
	    renderList(){
	        return this.props.books.map((book) => {
	            return (
	                <li key={book.title} className="list-group-item">{book.title}</li>
	            )
	        });
	    }
	    
	    render(){
	        return (
	            <ul className="list-group col-sm-4">
	                {this.renderList()}
	            </ul>
	        )
	    }
	}
	
	function mapStateToProps(state){
	    return {
	        books: state.books
	    }
	}
	
	export default connect(mapStateToProps)(BookList);

- 创建BookList组件的方式还是和原来一样
- 创建组件时用到的`this.props.books`中的books属性从哪里来呢？--是在`mapStateToProps`方法中，把组件的`this.props.books`和全局的`state.books`映射了起来
- 导出组件的方式和原来不一样：connect看作是React和Redux之间的粘合剂，并把BookList作为实参传递给了connect。在这里，可以看作是一个Redux的容器，里面有组件，也有组件的状态，两者保持高度的同步。

<br>

**最后,把组件显示出来。**

<br>

> src/components/app.js

<br>

	import React, { Component } from 'react';
	import BookList from '../containers/book-list';
	
	export default class App extends Component {
	  render() {
	    return (
	        <div>
	            <BookList />
	        </div>      
	    );
	  }
	}

<br>

> localhost:8080








