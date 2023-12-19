import styles from "./App.module.scss";
import NavTest from "./Components/NavTest/NavTest";
import SideNav from "./Components/SideNav/SideNav";

function App() {
  return (
    <div className={styles.container}>
   <SideNav/>
    </div>
  );
}

export default App;
