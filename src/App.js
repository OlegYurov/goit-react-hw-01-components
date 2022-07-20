import friends from './friends.json';
import FriendList  from 'components/FriendList';

import React from 'react'

function App() {
  return (
    <div> <FriendList friends={friends}/> </div>
  )
}

export default App