import React, { useContext } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {

    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} padding={"1rem"} width={"100%"} height={"4rem"} sx={{ backgroundColor: "#F3F6F9" }}>
            <Box display={"flex"} alignItems={"center"} paddingLeft={"0.5rem"}>
                <p style={{ fontSize: "1rem", fontWeight: "bold"}}>Municipalidad de Capital</p>
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
