import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// eslint-disable-next-line react/prop-types
const SelectCell = ({ data, selection }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // eslint-disable-next-line react/prop-types
  const { name, color } = data.getValue() || {};

  const handleUpdate = (status) => {
    // eslint-disable-next-line react/prop-types
    data.table.options?.meta.updateData(data.row.index, data.column.id, status);
  };

  return (
    <>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ color: color }}
        >
          {name || "N/A"}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {selection.map((status) => (
            <MenuItem
              key={status.id}
              tabIndex={0}
              role="button"
              onClick={(e) => {
                e.preventDefault();
                handleUpdate(status);
                handleClose();
              }}
              className="cursor-pointer"
            >
              <a>{status.name}</a>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default SelectCell;
