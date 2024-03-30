import { useState } from "react";
import Button from "./components/Button";
import "./index.css";
function App() {
  const [bgColor, setBgColor] = useState("cyan");
  const colors = ["red", "green", "black", "gray"];
  return (
    <div className="w-full h-screen App" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="rounded-md flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-2">
          {colors.map((color) => (
            <Button
              key={color}
              color={color}
              flex="flex-64"
              bgChange={setBgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
