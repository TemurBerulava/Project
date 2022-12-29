import { Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isUserAdmin } from "../../../app/util";
import { userContext } from "../../../context/userContext";
import Search from "./Search";

const Header = () => {
  const { userData, logout } = useContext(userContext);
  return (
    <>
      <Link to="/cart">Корзина</Link>
      <br />
      <Link to="/">Домой</Link>
      <br />
      <Search />
      {isUserAdmin() && <Link to="/products/new">Добавить новый продукт</Link>}
      {userData ? (
        <>
          <Typography>ПРИВЕТ, {userData?.firstName}</Typography>
          <Button onClick={logout}>Log out</Button>
          <Link
            to={`/profile/${userData?.firstName}`}
            state={{ id: userData?._id }}
          >
            Profile
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">Авторизация</Link>
        </>
      )}
    </>
  );
};

export default Header;