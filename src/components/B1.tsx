import React, { Component } from 'react'
interface Class{
    name:string;
}

export default class B1 extends Component<any,Class> {
    constructor(props:Class) {
        super(props);
        this.state = { 
            name:"Phạm Văn Minh"
         }
    }

  render() {
    return (
      <div>
        <h1>B1</h1>
        <b>Họ và tên : {this.state.name}</b>
      </div>
    )
  }
}
