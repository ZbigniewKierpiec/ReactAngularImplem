import styles from "./App.module.scss";
import ColorMode from "./Components/Color Mode/ColorMode";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import SideNav from "./Components/SideNav/SideNav";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SideNav />
   
      <Footer/>
    </div>
  );
}

export default App;
