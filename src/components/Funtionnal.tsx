import React from 'react'
interface Props{
    name:string;
    sts:string[];
}
export default function Funtionnal(props:Props) {
    console.log(1111111111,props);
    const {sts} = props
  return (
    <div>Functional
      <ul>
        {
          sts.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
