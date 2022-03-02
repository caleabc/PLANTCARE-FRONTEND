import * as React from "react";
// MD5 hashing algorithm
import md5 from "../../helpers/md5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Cell, ALIGNMENT } from "baseui/layout-grid";
import { AppNavBar } from "baseui/app-nav-bar";
import { H1, H4, Label1, Paragraph1 } from "baseui/typography";
import { Card, StyledBody } from "baseui/card";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";
import { Notification } from "baseui/notification";

function Administrator() {
  var [users, setUsers] = React.useState([]);

  // protectRoute
  // Protecting the route from unathorized access
  // adding checkpoint in endpoint
  var protectRoute = process.env.REACT_APP_PROTECT_ROUTE;
  const navigate = useNavigate();

  function handleClickCreate() {
    navigate("/administrator/create");
  }

  function handleClickLogout() {
    localStorage.setItem("user", undefined);
    navigate("/login");
  }

  async function handleClickDelete(id) {
    // copy the state
    // using spread operator
    var usersCopy = [...users];
    for (var i = 0; i < usersCopy.length; i++) {
      if (usersCopy[i]["_id"] == id) {
        usersCopy.splice(i, 1);
        setUsers(usersCopy);

        // communicate to the backend
        // original address ==> "/administrator/delete/id"
        await axios.get(
          `http://localhost:5000/${protectRoute}/administrator/delete/${id}`
        );

        return;
      }
    }
  }

  React.useEffect(async function () {
    // communicate to backend and get all users
    // original address ==> "/register"
    var getUsers = await axios.get(
      `http://localhost:5000/${protectRoute}/register`
    );
    setUsers(getUsers["data"]);
  }, []);

  return (
    <>
      <Grid
        overrides={{
          Grid: {
            style: {
              display: "flex",
              justifyContent: "center",
            },
          },
        }}
      >
        <Cell span={6}>
          <h1
            style={{
              marginBottom: "1px",
              fontFamily: "Montserrat",
              color: "gray",
              textAlign: "center",
            }}
          >
            PLANT CARE
          </h1>
        </Cell>
      </Grid>

      <Grid
        overrides={{
          Grid: {
            style: {
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            },
          },
        }}
      >
        <Cell span={6}>
          <H4
            marginTop={"0"}
            marginBottom={"0"}
            display={"flex"}
            justifyContent={"center"}
          >
            Registered Accounts
          </H4>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span
              style={{
                marginBottom: "10px",
                fontSize: "25px",
                color: "gray",
                fontFamily: "Open Sans Condensed",
                marginRight: "20px",
                cursor: "pointer",
              }}
              onClick={handleClickCreate}
            >
              <i
                style={{
                  marginRight: "5px",
                }}
                class="bi bi-plus-square-dotted"
              ></i>
              Create
            </span>

            <span
              style={{
                marginBottom: "10px",
                fontSize: "25px",
                color: "gray",
                fontFamily: "Open Sans Condensed",
                cursor: "pointer",
              }}
              onClick={handleClickLogout}
            >
              <i
                style={{
                  marginRight: "5px",
                }}
                class="bi bi-layout-sidebar"
              ></i>
              Logout
            </span>
          </div>
        </Cell>

        {users.map((user) => (
          <>
            <Cell span={6}>
              <Card
                overrides={{
                  Root: {
                    style: {
                      marginBottom: "10px",
                    },
                  },
                }}
              >
                <StyledBody>
                  <Label1 display={"flex"} justifyContent={"space-between"}>
                    <span>Name: {user["fname"] + " " + user["lname"]}</span>
                    <span
                      onClick={function () {
                        handleClickDelete(user["_id"]);
                      }}
                    >
                      <i
                        style={{
                          color: "lightgray",
                          marginLeft: "2px",
                          cursor: "pointer",
                        }}
                        className="bi bi-trash"
                      ></i>
                    </span>
                  </Label1>

                  <Label1>Email: {user["email"]}</Label1>
                </StyledBody>
              </Card>
            </Cell>
          </>
        ))}
      </Grid>

      <br />
      <br />
      <br />
    </>
  );
}

export default Administrator;
