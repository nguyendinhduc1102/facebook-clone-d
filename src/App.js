import React from 'react';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ?(<Login />):(
        <>
      <Header />
      <div style={{display:"flex"}} className="app__body"> 
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>
      )}
    </div>
  );
}

export default App;
