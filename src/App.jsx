
import './App.css'
import AdminSidebar from './components/Sidebar/AdminSidebar'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardAdmin from './pages/DashboardAdmin/DashboardAdmin'
import {Route, Routes} from 'react-router-dom'
import DashboardStudent from './pages/DashboardStudent/DashboardStudent'
import DashboardOrganizer from './pages/DashboardOrganizer/DashboardOrganizer'
import OrganizerSidebar from './components/Sidebar/OrganizerSidebar'
import CreateEvent from './components/CreateEvent/CreateEvent'
import Notification from './components/Notification/Notification'
import Settings from './components/Settings/Settings'
import MyTickets from './components/MyTickets/MyTickets'
import ManageEvents from './components/ManageEvents/ManageEvents'
import ManageUsers from './components/ManageUsers/ManageUsers'
import RoleRequest from './components/RoleRequest/RoleRequest'
import MyEvents from './components/MyEvents/MyEvents'


function App() {
  

  return (
    <>
      <Routes>
        <Route path= "/admin" element={<AdminSidebar/>}>
        <Route path="admindashboard" element={<DashboardAdmin/>} /><Route path="createevent" element={<CreateEvent/>} />
        <Route path="notification" element={<Notification/>} />
        <Route path="settings" element={<Settings/>} />
        <Route path="mytickets" element={<MyTickets/>} />
        <Route path="manageevents" element={<ManageEvents/>} />
        <Route path="manageusers" element={<ManageUsers/>} />
        <Route path="rolerequest" element={<RoleRequest/>} />
        <Route path="myevents" element={<MyEvents/>} />
        </Route>

        <Route path= "/user" element={<Sidebar/>}>
        <Route path="studentdashboard" element={<DashboardStudent/>} />
        <Route path="notification" element={<Notification/>} />
        <Route path="settings" element={<Settings/>} />
        <Route path="mytickets" element={<MyTickets/>} />
        <Route path="myevents" element={<MyEvents/>} />

        </Route>
    
        <Route path= "/organizer" element={<OrganizerSidebar/>}>
        <Route path="dashboard" element={<DashboardOrganizer/>} />
        <Route path="createevent" element={<CreateEvent/>} />
        <Route path="notification" element={<Notification/>} />
        <Route path="settings" element={<Settings/>} />
        <Route path="mytickets" element={<MyTickets/>} />
        <Route path="manageevents" element={<ManageEvents/>} />
        <Route path="myevents" element={<MyEvents/>} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
