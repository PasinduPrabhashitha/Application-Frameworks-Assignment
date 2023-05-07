import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { AddHotel } from "./pages";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="" element={<Home />} />
      <Route
        path="/destinations/:id"
        element={
          <SessionAuth>
            <Details />
          </SessionAuth>
        }
      />

      <Route
        path="/hotels"
        element={
          <SessionAuth>
            <Hotels />
          </SessionAuth>
        }
      />
      <Route
        path="/hotels/:id"
        element={
          <SessionAuth>
            <HotelDetails />
          </SessionAuth>
        }
      />

      <Route path="/admin/hotels/new" element={<AddHotel />} />

      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
    </AppRoutes>
  );
};

export default Routes;
