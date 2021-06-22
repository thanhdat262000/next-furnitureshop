import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../../shared/theme/CustomTheme";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/index";
import ContactButton from "../ContactButton/ContactButton";
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        {children}
        <ContactButton />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default Layout;
