import styled from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import dc from "../pages/dc";
import HeroeId from "../pages/HeroeId";
import Marvel from "../pages/Marvel";
import Search from "../pages/Search";
import Productos from "../pages/Productos";
import Sidebar from "../layout/sidebar/Sidebar";
import Navbar from "../layout/navbar/Navbar";
import { useState } from "react";

export default function HomeRouter() {
  const [open, setOpen] = useState(false);
  return (
    <Dashboard>
      <Sidebar open={open} />
      <DashboardContent open={open}>
        <Navbar open={open} setOpen={setOpen} />
        <Content>
          <Switch>
            <Route exact path="/marvel" component={Marvel} />
            <Route exact path="/hero/:heroId" component={HeroeId} />
            <Route exact path="/dc" component={dc} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/productos" component={Productos} />
            <Redirect to="/marvel" />
          </Switch>
        </Content>
      </DashboardContent>
    </Dashboard>
  );
}

//styled de Home
const Dashboard = styled.section`
  /* height: 100vh; */
  /* display: flex; */
  width: 100%;
`;

const DashboardContent = styled.section`
  background-color: #e6e1e1;
  width: 100%;
  margin-left: ${({ open }) => (open ? "18rem" : null)};
  transition: all 0.3s ease;
  /* height: 100vh; */
`;


const Content = styled.section`
  background-color: #e6e1e1;
  width: auto;
  margin-left: ${({ open }) => (open ? "18rem" : null)};
  transition: all 0.3s ease;
  /* height: 100vh; */
`;
