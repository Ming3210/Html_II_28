import React, { Component } from 'react'
interface Class{
    id:number;
    name:string;
    birth:string;
    address:string
}

export default class B2 extends Component<any,Class> {
    constructor(props:Class) {
        super(props);
        this.state = { 
            id:1,
            name:"Phạm Văn Minh",
            birth:"2000-01-01",
            address:"Hà Nội",
         }
    }

  render() {
    return (
      <div>
        <h1>B2</h1>
        <p>id : {this.state.id}</p>
        <p>Họ và tên : {this.state.name}</p>
        <p>Ngày sinh : {this.state.birth}</p>
        <p>Địa chỉ : {this.state.address}</p>
      </div>
    )
  }
}
