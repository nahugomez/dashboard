import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const ApplicationSidebar = () => {
  const { collapsed, setCollapsed } = useContext(SidebarContext);

  return (
    <Sidebar collapsed={collapsed} style={{ maxHeight: "calc(100vh - 4rem)" }}>
      <Menu>
        {collapsed ? (
          <MenuItem icon={<ArrowForwardIosIcon />} onClick={() => setCollapsed(!collapsed)}>
            Ocultar Menu
          </MenuItem>
        ) : (
          <MenuItem icon={<ArrowBackIosNewIcon />} onClick={() => setCollapsed(!collapsed)}>
            Ocultar Menu
          </MenuItem>
        )}
        <MenuItem icon={<HomeIcon />} component={<Link to={"/"} />}>
          Inicio
        </MenuItem>
        <SubMenu icon={<SettingsIcon />} label="Configuraciones" component={<Link to={"/configs"} />}>
          <MenuItem>Personal</MenuItem>
          <MenuItem>Personas</MenuItem>
          <MenuItem>Almacén</MenuItem>
        </SubMenu>
        <SubMenu icon={<InventoryIcon />} label="Recursos" component={<Link to={"/resources"} />}>
          <MenuItem>Personal</MenuItem>
          <MenuItem>Inventario</MenuItem>
          <MenuItem>Stock</MenuItem>
          <MenuItem>Proveedores</MenuItem>
        </SubMenu>
        <SubMenu icon={<AssignmentIcon />} label="Tareas" component={<Link to={"/task"} />}>
          <MenuItem>Personal</MenuItem>
          <MenuItem>Personas</MenuItem>
          <MenuItem>Almacén</MenuItem>
        </SubMenu>
        <SubMenu icon={<InsertDriveFileIcon />} label="Contratos">
          <MenuItem>Personal</MenuItem>
          <MenuItem>Inventario</MenuItem>
          <MenuItem>Stock</MenuItem>
          <MenuItem>Proveedores</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default ApplicationSidebar;
