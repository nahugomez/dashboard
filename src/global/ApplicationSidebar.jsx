import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InventoryIcon from "@mui/icons-material/Inventory";

const ApplicationSidebar = () => {
    return (
        <Sidebar>
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
            </Menu>
        </Sidebar>
    );
};

export default ApplicationSidebar;
