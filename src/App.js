import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import SignInPage from "./pages/SignInPage";
import AllCardsPage from "./pages/AllCardsPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import NewCardPage from "./pages/NewCardPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact={true}>
          <SignInPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Layout>
          <Route path="/all-cards">
            <AllCardsPage />
          </Route>
          <Route path="/new-card">
            <NewCardPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Layout>
      </Switch>
    </>
  );
}

// app.use("/api/users", users);
// app.use("/api/auth", auth);
// app.use("/api/cards", cards);

export default App;
