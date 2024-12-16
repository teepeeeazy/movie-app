import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Text message="Hello World" />
      <Text message="Hello Teepee" />
    </>
  );
};

interface Message {
  message: string;
}

function Text({message}: Message) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
