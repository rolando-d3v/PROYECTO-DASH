import { useState } from "react";
import Navbar from "./layout/navbar/Navbar";
import styled from 'styled-components'
import Sidebar from "./layout/sidebar/Sidebar";
import AppRouter from "./routers/AppRouter";


function App() {
  const [open, setOpen] = useState(false);

  return (
    <Dashboard>
      {/* <Header /> */}
      {/* <Sidebar open={open} /> */}
      <DashboardContent open={open}>
        {/* <Navbar open={open} setOpen={setOpen} /> */}
        {/* <Burger open={open} setOpen={setOpen} /> */}
        <div open={open}>
          <AppRouter />
        </div>
      </DashboardContent>
    </Dashboard>
  );
}

export default App;



//styled de Home
const Dashboard = styled.section`
  /* height: 100vh; */
  display: flex;
  width: 100%;
`;

const DashboardContent = styled.section`
  background-color: #e6e1e1;
  width: 100%;
  margin-left: ${({ open }) => (open ? "18rem" : "0")};
  transition: all 0.3s ease;
  height: 100vh;
`;
