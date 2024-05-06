import React, { Component } from 'react'
interface ClassComponent  {
  age:number;
  numbers:number[];
}
export default class Class extends Component<ClassComponent> {
  render() {
    return (
      <div>class
        <ul>
          {this.props.numbers.map((item,index)=>{
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
