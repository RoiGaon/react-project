import { Switch, Route } from "react-router-dom";
import { tabs } from "../../helpers/tabs/tabs";

function NavRouter(props) {
  const { user, set } = props;
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

export default NavRouter;
