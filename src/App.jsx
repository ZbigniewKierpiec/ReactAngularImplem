import styles from "./App.module.scss";
import Header from "./Components/Header/Header";

import SideNav from "./Components/SideNav/SideNav";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <SideNav />
    </div>
  );
}

export default App;
