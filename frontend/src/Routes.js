import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { 
  AddHotel,
  PackageAdmin,
  PackageDetails,
  PackagesList,
  PackagesSearch,
  PackgesHome,
  } from "./pages";

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

      <Route
        path="/packages"
        element={
          <SessionAuth>
            <PackagesList />
          </SessionAuth>
        }
      />
      <Route
        path="/packages/home"
        element={
          <SessionAuth>
            <PackgesHome />
          </SessionAuth>
        }
      />
      <Route
        path="/packages/search/:destination"
        element={
          <SessionAuth>
            <PackagesSearch />
          </SessionAuth>
        }
      />
      <Route
        path="/packages/:id"
        element={
          <SessionAuth>
            <PackageDetails />
          </SessionAuth>
        }
      />

      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
    </AppRoutes>
  );
};

export default Routes;
