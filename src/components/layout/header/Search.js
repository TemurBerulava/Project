import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../../app/instance";
 
const Search = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      const filterByName = async () => {
        const { data } = await instance.get(`/products/search?name=${value}`);
        setSearchResults(data.products);
      };
      if (value) {
        filterByName();
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [value]);
  return (
    <Autocomplete
      freeSolo
      sx={{ width: 300 }}
      disableClearable
      options={searchResults}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        return (
          <Link
            to={`/products/categories/${option.category}/${option.name}`}
            key={option._id}
            state={{ id: option._id }}
          >
            <Box style={{ display: "flex" }}>
              <Typography>{option.name}</Typography>
              <Typography>{option.price}</Typography>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => (
        <TextField
        
          {...params}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Search products"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};
 
export default Search;