import React, {Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
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

//本方法返回的结果会传给BookList这个container的props属性
//也就是selectBook属于BookList这个组件的props.selectBook
function mapDispatchToProps(dispatch){
    //每当selectBook方法被调用的时候，返回的结果必须传给reducers(state的数据源)
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//把BookList放到Redux容器中
export default connect(mapStateToProps, mapDispatchToProps)(BookList);