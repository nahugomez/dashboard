import React from "react";
import { Routes, Route } from "react-router-dom";
import Init from "../pages/Init";
import Resources from "../pages/Resources";
import Configs from "../pages/Configs";

const ApplicationRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/configs" element={<Configs />} />
        </Routes>
    );
};

export default ApplicationRouter;
