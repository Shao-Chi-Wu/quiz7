import React from 'react';
import LoginPage from '../View/LoginPage';
// import ToDoController from '../Controller/ToDoController';
import TodoApp from '../../TodoApp'
export default class Website extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.setRenderItem = this.setRenderItem.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    setRenderItem(){
        if(this.props.LoginStatus){
            return (<TodoApp/>);
        }else{
            return (<LoginPage onLogin={this.props.onLogin}/>);
        }
    }

    render(){
      return(
          <div>
            {this.setRenderItem()}
          </div>
      );
    }
}
  