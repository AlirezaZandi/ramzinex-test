import { Router } from "./router";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
