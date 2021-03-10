import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/layout/Header";
import dc from "../pages/dc";
import HeroeId from "../pages/HeroeId";
import Marvel from "../pages/Marvel";
import Search from "../pages/Search";

export default function HomeRouter() {
  return (
    <>
      <Header />
      <div className='mx-auto  w-10/12 px-4' >
        <Switch>
          <Route exact path="/marvel" component={Marvel} />
          <Route exact path="/hero/:heroId" component={HeroeId} />
          <Route exact path="/dc" component={dc} />
          <Route exact path="/search" component={Search} />
          
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}
