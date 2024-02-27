import React from 'react';
import "../../style/style.scss";
import "../app/app.scss";
import Header from "../header/Header";
import SidebarLeft from "../sidebarLeft/SidebarLeft";

function App() {
  return (
    <div className="app">
      <div className='container'>
      <Header />
      <div className='app-main'> 
   <div className='app-left'> 
        <SidebarLeft />
      </div>
      <div className='app-right'>

      </div>
     
      </div>
      </div>
    </div>
  );
}

export default App;
