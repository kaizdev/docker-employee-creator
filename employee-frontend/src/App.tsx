import { useState } from "react";
import "./App.css";
import RefreshContextProvider from "./components/context/RefreshContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import EmployeesList from "./containers/EmployeesList";
import FetchEmployees, {
    Employee,
} from "./components/FetchEmployees/FetchEmployees";
import AddEmployees from "./components/AddEmployees/AddEmployees";
import EmployeesPageLoader from "./components/EmployeesPageLoader/EmployeesPageLoader";

function App() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    return (
        <RefreshContextProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={<EmployeesList employees={employees} />}
                    />
                    <Route path="/add-employee" element={<AddEmployees />} />
                    <Route
                        path="employees/:id"
                        element={<EmployeesPageLoader />}
                    />
                </Routes>
                <FetchEmployees setEmployees={setEmployees} />
            </BrowserRouter>
        </RefreshContextProvider>
    );
}

export default App;
