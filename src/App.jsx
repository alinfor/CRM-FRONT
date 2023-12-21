
import "./index.css"
// import Entier from "./page/Entier"
import Footer from "./page/Footer"
import Header from "./page/Header"
import AddTicket from "./page/ticket/addTicket"
// import Dashboard from "./page/dashboard/Dashborad"

function App() {
    return (
    <div>
      <Header/>
      {/* <Entier/> */}
      {/* <Dashboard/> */}
      <AddTicket/>
      <Footer/>
    </div>
  )
}

export default App
