import React from "react";
import { TextField } from "@mui/material";

const InputBox = ({ label, name, type, id, onClick, onBlur, onChange, value }) => {
  return (
    <div>
      <TextField
        name={name}
        label={label}
        type={type}
        id={id}
        onClick={onClick} // Ensure correct naming (JavaScript is case-sensitive)
        onBlur={onBlur}
        onChange={onChange} // Accept and use onChange prop
        value={value !== null ? value : ''} // Accept and use value prop
        variant="outlined"
        fullWidth // Use passed fullWidth prop or default to true
        margin="normal"
        style={{ marginRight: "5px", backgroundColor: "white", borderRadius: '5px' }}
        
      />
    </div>
  );
};

export default InputBox;
