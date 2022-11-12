import React from "react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
 
const Customers = () =>{
  const [search,setSearch] = useState(""); 
  const [customer,setCustomer] = useState([]);
  const [filteredCustomers,setFilteredCustomers] = useState([]); 
    const getCustomers = async()=>{
      try{
        const response = await axios.get('http://localhost:5000/users');
          setCustomer(response.data)
          setFilteredCustomers(response.data)
      }catch(error){
        console.log(error);
      }
    }
    //Obejects Array
    const columns = [
      {
        name:"Name",
        selector: row=>row.product_code,
        sortable : true,
  
      },
      {      
        name:"Address ",
        selector: row=>row.title,
        
      },
      {
        name:"Country ",
        selector: row=>row.description,
        
      },
      {
        name:"City ",
        selector: row=>row.cost_price,
        
      },
      {
        name:"Phone No",
        selector: row=>row.sale_price,
        
      },
      {
        name:"Email ",
        selector: row=>row.cost_price,
        
      },
      {
        name:"Action",
        cell: row=><button className="btn btn-primary">Edit</button>
        
      }
  
    ]

    //-----USE Effect Area ------
    useEffect(()=>{
      getCustomers();
    },[]);
    //---Search Logic Area Here-----
    useEffect(()=>{
        const result = customer.filter((customer)=>{
        return customer.name.toLowerCase().match(search.toLocaleLowerCase());
        }); 
        setFilteredCustomers(result);
    },[search]);
    return(
        <>
        <Dashboard />
        <div className="dataTable">
          <Link to="/AddUser"><button className="addNew btn btn-info">Add New</button></Link>
            
        <DataTable 
            title="Customers List" 
            columns={columns} 
            data={filteredCustomers} 
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            // actions = {
            //   <button className="btn btn-info">Export </button>
            // }
            subHeader
            subHeaderComponent={
                <input type="text" placeholder="search here"
                 className="w-25 form-control"
                 value={search}   //Search is state variable
                 onChange = {(e)=>setSearch(e.target.value)}
                 />
            }
        />
        </div>
       
        </>
        
    );
}
export default Customers;