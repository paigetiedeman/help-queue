import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return ( 
    <div className="container">
      <React.Fragment>
        <Header />
        <TicketControl />
      </React.Fragment>
    </div>
  );
}

export default App;
