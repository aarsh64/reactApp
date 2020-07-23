import React, { Component } from "react";

class Counter extends Component {

    state = { 
        count:0,
        tags:['tag1','tag2' ,'tag4']
    };

    // constructor(){
    //     super();
    //     this.handleIncrement() =  this.handleIncrement.bind(this);
    //     }

    styles ={
        fontWeight : "bold",
        fontSize: 20
    };

    handleIncrement = (e) => {
        console.log(e);
        this.setState({count: this.state.count+1});
    }
    doHandleIncrement = () => {
        this.handleIncrement({id:1});
    }
  render() {

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <ul>
           {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount(){

    const {count} = this.state;
        return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;
