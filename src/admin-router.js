import React from "react";
import AdminLayout from "./components/Dashboard";
import Clipboard from "./components/Clipboard";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AddProduct from "./components/AddProduct";
//import MianFeed from "./components/MainFeed";
import ProductTable from "./components/ProductsTable";
import Country from "./components/Country";
import AddUser from "./components/AddUser";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import Login from "./admin-views/Login";

const AdminRroutes = ()=>{
    return(
        <BrowserRouter>
            <div className="App">
                
                <Routes>
                    <Route path="/" element={<AdminLayout/>}>  
                        {/* <Route index element={<MianFeed />} />  */}
                        
                        </Route>
                        <Route path="/Clipboard" element={<Clipboard/>}/>
                        <Route path="/ProductTable" element={<ProductTable/>}/>
                        <Route path="/AddProduct" element={<AddProduct/>}/>
                        <Route path="/Country" element={<Country/>}/>
                        <Route path="/AddUser" element={<AddUser/>}/>
                        <Route path="/Customers" element={<Customers/>}/>
                        <Route path="/Orders" element={<Orders/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        
                        <Route 
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <h1>There's nothing here!</h1>
                            </main>
                            } 
                        /> 
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default AdminRroutes;
