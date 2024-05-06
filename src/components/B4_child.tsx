import React,{useState} from 'react';
import B4_parents from './B4_parents';

export default function B4_child() {
  const [userName, setName] = useState<string>("Phạm Văn Minh");
    
  return (
    <div>
      <h1>B4</h1>
      <B4_parents></B4_parents>
      <p>Tên con : {userName}</p>
    </div>
  );
}