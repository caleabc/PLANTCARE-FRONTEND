import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Cell } from "baseui/layout-grid";
import { AppNavBar } from "baseui/app-nav-bar";
import { H1, Paragraph1 } from "baseui/typography";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Button, KIND } from "baseui/button";
import { Notification } from "baseui/notification";
import { Accordion, Panel } from "baseui/accordion";

function Create() {
  var [farm, setFarm] = React.useState("");
  var [location, setLocation] = React.useState("");
  var [date, setDate] = React.useState("");
  var [week, setWeek] = React.useState("");

  // protectRoute
  // Protecting the route from unathorized access
  // adding checkpoint in endpoint
  var protectRoute = process.env.REACT_APP_PROTECT_ROUTE;
  const navigate = useNavigate();

  return (
    <>
      <div>
        <p1
          style={{
            fontFamily: "Nunito",
            fontSize: "1.8rem",
            display: "block",
            textAlign: "center",
          }}
        >
          PLANT CARE
        </p1>
      </div>

      <div
        style={{
          marginTop: "10px",
        }}
      >
        <p1
          style={{
            fontFamily: "Nunito",
            textAlign: "center",
            display: "block",
          }}
        >
          TAGUM RESOURCES AGRI INDUSTRIES <br />
          PLANT CARE EVALUATION
        </p1>
      </div>

      <div
        style={{
          marginTop: "15px",
          marginBottom: "15px",
        }}
      >
        <p1
          style={{
            fontFamily: "Nunito",
            color: "gray",
          }}
        >
          GO BACK
        </p1>
      </div>

      <Grid>
        <Cell span={10}>
          <FormControl label="Farm">
            <Input
              value={farm}
              onChange={(e) => setFarm(e.currentTarget.value)}
            />
          </FormControl>

          <FormControl label="Location / Block no.">
            <Input
              value={location}
              onChange={(e) => setLocation(e.currentTarget.value)}
            />
          </FormControl>

          <FormControl label="Date">
            <Input
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
            />
          </FormControl>

          <FormControl label="Week no.">
            <Input
              value={week}
              onChange={(e) => setWeek(e.currentTarget.value)}
            />
          </FormControl>
        </Cell>

        <Cell span={10}>
          {/* ================== */}
          {/* REPLANTING SECTION */}
          {/* ================== */}
          <div style={{ marginTop: "1.2rem" }}>
            <p
              style={{ fontFamily: "Nunito", fontSize: "1.3rem", margin: "0" }}
            >
              REPLANTING
            </p>
            <Accordion>
              <Panel title="Inappropriate replant used">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Incorrect distance between hills">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Missing Hills">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Total no. of plants">
                <div style={{ display: "flex" }}>
                  <Input placeholder="P1" />
                  <Input placeholder="P2" />
                  <Input placeholder="P3" />
                </div>
              </Panel>
            </Accordion>
            <span
              style={{
                paddingLeft: "1.2rem",
                paddingRight: "1.2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Total</p>
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Score</p>
            </span>
          </div>
          {/* END, REPLANTING SECTION */}

          {/* ====================== */}
          {/* SUCKER PRUNING SECTION */}
          {/* ====================== */}
          <div style={{ marginTop: "1.2rem" }}>
            <p
              style={{ fontFamily: "Nunito", fontSize: "1.3rem", margin: "0" }}
            >
              SUCKER PRUNING
            </p>
            <Accordion>
              <Panel title="Late">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Incorrect follower selection">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Unnecessary doubles">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Non-removal of dried leaves">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Total no. of plants">
                <div style={{ display: "flex" }}>
                  <Input placeholder="P1" />
                  <Input placeholder="P2" />
                  <Input placeholder="P3" />
                  <Input placeholder="P4" />
                </div>
              </Panel>
            </Accordion>
            <span
              style={{
                paddingLeft: "1.2rem",
                paddingRight: "1.2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Total</p>
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Score</p>
            </span>
          </div>
          {/* END, SUCKER PRUNING SECTION */}

          {/* ============================== */}
          {/* FERTILIZER APPLICATION SECTION */}
          {/* ============================== */}
          <div style={{ marginTop: "1.2rem" }}>
            <p
              style={{ fontFamily: "Nunito", fontSize: "1.3rem", margin: "0" }}
            >
              FERTILIZER APPLICATION
            </p>
            <Accordion>
              <Panel title="Missed mats">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Non-usage of calibrated cups">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Non-base cleaning">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Incorrect placement">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Total no. of plants">
                <div style={{ display: "flex" }}>
                  <Input placeholder="P1" />
                  <Input placeholder="P2" />
                  <Input placeholder="P3" />
                  <Input placeholder="P4" />
                </div>
              </Panel>
            </Accordion>
            <span
              style={{
                paddingLeft: "1.2rem",
                paddingRight: "1.2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Total</p>
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Score</p>
            </span>
          </div>
          {/* END, FERTILIZER APPLICATION SECTION */}

          {/* ============================== */}
          {/* WEED CONTROL SECTION */}
          {/* ============================== */}
          <div style={{ marginTop: "1.2rem" }}>
            <p
              style={{ fontFamily: "Nunito", fontSize: "1.3rem", margin: "0" }}
            >
              WEED CONTROL
            </p>
            <Accordion>
              <Panel title="Outstanding">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Very Good">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Good">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Satisfactory">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <Accordion>
              <Panel title="Needs Improvement">
                <div style={{ display: "flex" }}>
                  <Input placeholder="Q1" />
                  <Input placeholder="Q2" />
                  <Input placeholder="Q3" />
                  <Input placeholder="Q4" />
                </div>
              </Panel>
            </Accordion>

            <span
              style={{
                paddingLeft: "1.2rem",
                paddingRight: "1.2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Total</p>
              <p style={{ fontFamily: "Nunito", fontSize: "1rem" }}>Score</p>
            </span>
          </div>
          {/* END, WEED CONTROL SECTION */}
        </Cell>
      </Grid>

      <br />
      <br />
      <br />
    </>
  );
}

export default Create;
