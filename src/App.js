import BasicLayout from "./components/BasicLayout";
import './App.css';
import {
  isBrowser,
    isMobile,
    isTablet
} from "react-device-detect";

// function BrowserV() {
//   return <BrowserView>
//     <BasicLayout/>
//   </BrowserView>;
// }
//
// function MobileV(){
//   return <MobileView>
//     <BasicLayout />
//   </MobileView>;
// }

function App() {
  return (
      <>
        {`browser: ${isBrowser} mobile: ${isMobile} tablet: ${isTablet}`}
      </>
  );
}

export default App;
