import React, { useState } from 'react';

export default function B4_parents() {
  const [userName, setName] = useState<string>("Phạm Văn Minh");

  return (
    <div>
      <p>Tên cha: {userName}</p>
    </div>
  );
}