import TextField from '@mui/material/TextField';

const UserNameFilter = () => {
  return (
    <TextField
      id="standard-basic"
      label="Find user"
      name="filter"
      //   value={filter}
      //   onChange={handleChange}
      variant="standard"
      sx={{ mb: 2 }}
    />
  );
};

export default UserNameFilter;
