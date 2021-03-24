import BasicLayout from "./components/BasicLayout";
import './App.css';
import {
  BrowserView,
  MobileView,
  isBrowser
} from "react-device-detect";

function BrowserV() {
  return <BrowserView>
    <BasicLayout/>
  </BrowserView>;
}

function MobileV(){
  return <MobileView>
    <BasicLayout />
  </MobileView>;
}

function App() {
  return (
      (isBrowser)?
          <BrowserV/>
          :
      <MobileV/>
  );
}

export default App;
