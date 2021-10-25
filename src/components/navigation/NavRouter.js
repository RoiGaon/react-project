import { Switch, Route } from "react-router-dom";
import { tabs } from "../../helpers/tabs/tabs";

export default function NavRouter({ user, set }) {
  return (
    <Switch>
      {tabs.map((tab, index) => (
        <Route key={index} path={tab.href} exact>
          {<tab.page set={set} user={user} />}
        </Route>
      ))}
    </Switch>
  );
}
