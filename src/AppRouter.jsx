import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Entier from "./page/Entier";
import Footer from "./page/Footer";
import Header from "./page/Header";
import AddTicket from "./page/ticket/addTicket";
import Dashboard from "./page/dashboard/Dashborad";
import Ticket from './page/ticket/Ticket';
export default function AppRouter() {
  return (
    <div>
            <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/" exact element={<Entier/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/AddTicket" element={<AddTicket/>} />
            <Route path="/Ticket/:id"element={<Ticket/>} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </div>
  )
}
