import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const ApplicationSidebar = () => {
    const { collapsed } = useContext(SidebarContext);

    return (
        <Sidebar collapsed={collapsed}>
            <Menu>
                <MenuItem icon={<HomeIcon />}>Inicio</MenuItem>
                <SubMenu icon={<SettingsIcon />} label="Configuraciones">
                    <MenuItem>Personal</MenuItem>
                    <MenuItem>Personas</MenuItem>
                    <MenuItem>Almacen</MenuItem>
                </SubMenu>
                <SubMenu icon={<InventoryIcon />} label="Recursos">
                    <MenuItem>Personal</MenuItem>
                    <MenuItem>Inventario</MenuItem>
                    <MenuItem>Stock</MenuItem>
                    <MenuItem>Proveedores</MenuItem>
                </SubMenu>
                <SubMenu icon={<AssignmentIcon />} label="Tareas">
                    <MenuItem>Personal</MenuItem>
                    <MenuItem>Personas</MenuItem>
                    <MenuItem>Almacen</MenuItem>
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
