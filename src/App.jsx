import styles from "./App.module.scss";
import ColorMode from "./Components/Color Mode/ColorMode";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import SideNav from "./Components/SideNav/SideNav";
import { ThemeProvider } from "./Hooks/ThemeProvider";
import { ClickedThemeProvider } from "./Hooks/ClickedThemeProvider";

function App() {
  return (
    <div className={styles.container}>
       <ThemeProvider>



        <ClickedThemeProvider>

 
        <Header />
        <SideNav />

        <Footer />
        </ClickedThemeProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
