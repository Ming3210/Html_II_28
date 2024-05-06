// import Class from './components/Class'
// import Functional from './components/Funtionnal'
// import StateFunction from './components/StateFunction'
// import StateClass from './components/StateClass'

import B1 from './components/B1'
import B2 from './components/B2'
import B3 from './components/B3'
import B4_child from './components/B4_child'
import B5_child from './components/B5_child'
import B6_child from './components/B6_child'
import B7_ListPost from './components/B7_ListPost'
import B8_ListProduct from './components/B8_ListProduct'
import B9 from './components/B9'


export default function App() {
  
  // const fullName : string = "MINH"
  // const sts:string[] = ["min", "max", "minmax"]
  // const numbers: number[] = [5,6,7,8,91,1]
  // const age:number = 20
  return (
    <div>
      {/* 
      props và state
      1. props : Dùng để truyền dữ liệu từ component cha sang component con
      Thế nào là component cha
      2. state : 
        - dùng để quản lí dữ liệu bên trong component
       */}
    {/* <Functional name={fullName} sts={sts}></Functional> */}
    {/* <Class age={ age } numbers={numbers}></Class> */}
    {/* <StateFunction></StateFunction> */}
    {/* <StateClass></StateClass> */}
    <div>

      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4_child></B4_child>
      <B5_child></B5_child>
      <B6_child></B6_child>
      <B7_ListPost></B7_ListPost>
      <B8_ListProduct></B8_ListProduct>
      <B9></B9>
    </div>
    </div>
  )
}
