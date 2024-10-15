// src/App.js
import React from "react";
import Header from "./Header";
import Button from "./Button";
import Card from "./Card";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <Header />
      <main className="p-4">
        <h2 className="text-xl mb-4">Welcome to My App</h2>
        <Button text="Click Me!" onClick={handleClick} />
        <div className="flex flex-wrap">
          <Card
            title="Card Title 1"
            description="This is a description for card 1."
          />
          <Card
            title="Card Title 2"
            description="This is a description for card 2."
          />
          <Card
            title="Card Title 3"
            description="This is a description for card 3."
          />
        </div>
      </main>
    </div>
  );
};

export default App;
