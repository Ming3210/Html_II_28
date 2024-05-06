import React,{ useState } from 'react'


export default function B3() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Minh', address: 'HN' },
        { id: 2, name: 'Hai', address: 'TH' },
        { id: 3, name: 'asdasdasd', address: 'HCM' },
      ]);
    
  return (
    <div>
        <h1>B3</h1>
        <ul>
            {
                users.map((item,index) =>{
                    return <li style={{fontWeight:"bold"}} key={index}>Họ và tên: {item.name}</li>
                })
            }
        </ul>
    </div>
  )
}
