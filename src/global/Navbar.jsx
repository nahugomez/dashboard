import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
    const { collapsed, setCollapsed } = useContext(SidebarContext);

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={"1rem"} width={"100%"} height={"4rem"} sx={{ backgroundColor: "#F3F6F9" }}>
            <Box display={"flex"} alignItems={"center"}>
                <IconButton onClick={() => setCollapsed(!collapsed)} sx={{ marginInline: "0.5rem" }}>
                    <MenuIcon />
                </IconButton>
                <p style={{ fontSize: "1rem" }}>Municipalidad de Capital</p>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
                <p>Municipio</p>
                <p>Informacion</p>
                <p>Soporte</p>
                <TextField label="Buscar" variant="outlined" size="small" />
                <AccountCircleIcon fontSize="large" />
            </Box>
        </Box>
    );
};

export default Navbar;
