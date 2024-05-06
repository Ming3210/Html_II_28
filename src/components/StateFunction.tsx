import React,{useState} from 'react'

export default function StateFunction() {
    const [number,setNumber]=useState<number>(2);
    //Khi dùng useState bắt buộc p khai báo kiểu dữ liệu
    const [fullName,setFullName]=useState<string>("qưeqweq")
    // hàm useState trả về 1 mảng bên trong mảng có 2 giá trị
    // 1 là giá trị 1
    //2 là 1 cái hàm xử lí
    const click=()=>{
        setNumber(number+1)
        setFullName("123123")
    }
  return (
    <div>StateFunction
        {/*
         React ra đời năm 2013 
         trước đó trong function ko quản lí state đc mà chỉ quản lí state đc ở bên trong class


         10/2018 : Hook ra đời bổ sung cho function có thể quản lí state đc useState
         */}
         <p>Giá trị number ban đầu {number}</p>
         <button onClick={click}></button>
         <p>Xin chào {fullName}</p>
    </div>
  )
}