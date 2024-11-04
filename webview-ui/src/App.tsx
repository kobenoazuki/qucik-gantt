import { vscode } from "./utilities/vscode";
import './App.css'
import {
  VscodeButton,
} from "@vscode-elements/react-elements";

function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there partner! 🤠",
    });
  }

  return (
    <main>
      <h1>Hello World!!!</h1>
      <VscodeButton onClick={handleHowdyClick}>Howdy!</VscodeButton>
    </main>
  );
}

export default App;
