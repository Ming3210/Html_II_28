import React, { Component } from 'react'
interface ClassComponent{
    name: string;
    address: string;
    age: number;
    count: number;
}
export default class StateClass extends Component<any,ClassComponent> {
    constructor(props:ClassComponent){
        super(props);
        this.state = { 
            name: "Minh",
            age: 19,
            address: "HN",
            count:1
            
         }
    }
    //Nơi khai báo phương thức
    click=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    //Khi muốn cập nhập state thì p dùng this.setState
  render() {
    return (
      <div>StateClass
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.address}</p>
        <p>{this.state.count}</p>
        <button onClick={this.click}>Increase</button>
      </div>
    )
  }
}
