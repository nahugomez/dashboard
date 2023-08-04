import React from "react";
import { Routes, Route } from "react-router-dom";
import Init from "../pages/Init";
import Resources from "../pages/Resources";
import Configs from "../pages/Configs";
import NotFound from "../pages/NotFound";
import ProtectedResource from "../utils/ProtectedResource";

const ApplicationRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Init />} />
      <Route
        path="/resources"
        element={
          <ProtectedResource role={"manager"}>
            <Resources />
          </ProtectedResource>
        }
      />
      <Route
        path="/configs"
        element={
          <ProtectedResource role={"user"}>
            <Configs />
          </ProtectedResource>
        }
      />
    </Routes>
  );
};

export default ApplicationRouter;
