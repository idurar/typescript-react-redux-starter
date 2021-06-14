import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "../components/Loading";

import routes from "./config";

const NotFound = lazy(
  () => import(/*webpackChunkName:'NotFoundPage'*/ "../pages/NotFound")
);
const Router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(
                () =>
                  import(
                    /* webpackChunkName: "[request]" */ `../pages/${routeItem.component}`
                  )
              )}
            />
          );
        })}

        <Route
          path="*"
          component={NotFound}
          render={() => <Redirect to="/notfound" />}
        />
      </Switch>
    </Suspense>
  );
};

export default Router;
