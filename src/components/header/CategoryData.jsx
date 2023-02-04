import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { CategoryName } from "../../data/categoryName";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div className="text-[white] flex items-center cursor-pointer">
              <span className="font-bold">Categories</span>
              <span className="material-symbols-outlined mt-1 font-bold">
                expand_more
              </span>
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            background: "#080808",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 2px rgba(54, 54, 54, 0.32))",
            mt: 1,

            width: "30%",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              color: "#000",
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "none",
              transform: "translateY(00%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <div className="w-full flex items-center justify-center">
            <div className="w-[90%] flex flex-wrap lg:p-4">
              {CategoryName.map((elm) => (
                <div className="w-1/2 lg:p-5 p-2  md:h-[140px] h-[80px] " key={elm.id}  onClick={handleClose}>
                  <div className="border-[1px] border-[#434343] w-full h-full  relative rounded-md overflow-hidden">
                    <img
                      src={elm.img}
                      alt=""
                      className="w-full h-full opacity-95 object-cover p-1 rounded-md"
                    />
                    <div className="absolute bottom-0  w-full pb-3 overlayer_movie_details">
                      <div className="w-full text-center text-[1rem] truncate text-white font-bold">
                        {elm.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
