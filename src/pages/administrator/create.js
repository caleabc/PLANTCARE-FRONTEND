import * as React from "react";
// MD5 hashing algorithm
import md5 from "../../helpers/md5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Cell, ALIGNMENT } from "baseui/layout-grid";
import { AppNavBar } from "baseui/app-nav-bar";
import { H1 } from "baseui/typography";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";
import { Notification } from "baseui/notification";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";

function Create() {
  var [fname, setFname] = React.useState("");
  var [lname, setLname] = React.useState("");
  var [email, setEmail] = React.useState("");
  var [role, setRole] = React.useState([]);

  var [errorMessage, setErrorMessage] = React.useState(false);
  var [successMessage, setSuccessMessage] = React.useState(false);

  // protectRoute
  // Protecting the route from unathorized access
  // adding checkpoint in endpoint
  var protectRoute = process.env.REACT_APP_PROTECT_ROUTE;
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // ==========================
    // Communicate to the backend
    // ==========================
    var data = {
      fname: fname,
      lname: lname,
      email: email,
      role: role,
      password: "",
    };

    // original address ==> "/administrator/create"
    axios.post(
      `http://localhost:5000/${protectRoute}/administrator/create`,
      data
    );

    // scroll window to top
    window.scrollTo(0, 0);

    setSuccessMessage("Account registered");
    setFname("");
    setLname("");
    setEmail("");
    setRole("");

    // adding setTimeout
    // setTimeout is asynchronous
    setTimeout(function () {
      return setSuccessMessage(false);
    }, 10000);
  }

  function handleClickCancel() {
    console.log("cancel click");
    navigate("/administrator");
  }

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

      {/* Notification */}
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
          {successMessage !== false && (
            <Notification
              overrides={{
                Body: { style: { width: "auto" } },
              }}
              closeable
              autoHideDuration={10000}
            >
              {successMessage}
            </Notification>
          )}
        </Cell>
      </Grid>
      {/* End of notification */}

      <Grid
        overrides={{
          Grid: {
            style: {
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            },
          },
        }}
      >
        <Cell span={6}>
          <H1>Register account</H1>
          <form onSubmit={handleSubmit}>
            <FormControl label="First name">
              <Input
                type="text"
                required
                value={fname}
                onChange={(e) => setFname(e.currentTarget.value)}
              />
            </FormControl>

            <FormControl label="Last name">
              <Input
                type="text"
                required
                value={lname}
                onChange={(e) => setLname(e.currentTarget.value)}
              />
            </FormControl>

            <FormControl label="Email">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </FormControl>

            <FormControl label="Role">
              <RadioGroup
                value={role}
                onChange={(e) => setRole(e.currentTarget.value)}
                align={ALIGN.horizontal}
              >
                <Radio value="evaluator">Evaluator</Radio>
                <Radio value="supervisor">Supervisor</Radio>
              </RadioGroup>
            </FormControl>

            <Button
              overrides={{
                BaseButton: {
                  style: {
                    width: "100%",
                    marginBottom: "5px",
                  },
                },
              }}
              type="submit"
            >
              REGISTER
            </Button>
          </form>
          <Button
            overrides={{
              BaseButton: {
                style: {
                  width: "100%",
                },
              },
            }}
            kind={KIND.secondary}
            onClick={handleClickCancel}
          >
            CANCEL
          </Button>
        </Cell>
      </Grid>
      <br />
      <br />
      <br />
    </>
  );
}

export default Create;
