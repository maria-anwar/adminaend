import React from "react";
import DataTable from "react-data-table-component";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
const Country = () =>{
  const [search,setSearch] = useState(""); 
  const [country,setCountry] = useState([]);
  const [filteredCountries,setFilteredCountries] = useState([]); 
    const getCountry = async()=>{
      try{
        const response = await axios.get('http://localhost:5000/products');
          setCountry(response.data)
          setFilteredCountries(response.data)
      }catch(error){
        console.log(error);
      }
    }
    //Obejects Array
    const columns = [
      {
        name:"Product Code",
        selector: row=>row.product_code,
        sortable : true,
  
      },
      {      
        name:"Title ",
        selector: row=>row.title,
        
      },
      {
        name:"Description ",
        selector: row=>row.description,
        
      },
      {
        name:"Sale Price ",
        selector: row=>row.sale_price,
        
      },
      {
        name:"Purchase Price ",
        selector: row=>row.cost_price,
        
      },
      
      {
        name:"Available Quantity ",
        selector: row=>row.available_qty,
        
      },
      {
        name:"image",
        selector: (row)=> <img width={50} height={50} src={row.image}/>,
        
      },
      {
        name:"Action",
        cell: row=><button className="btn btn-primary">Edit</button>
        
      }
  
    ]

    //-----USE Effect Area ------
    useEffect(()=>{
      getCountry();
    },[]);
    //---Search Logic Area Here-----
    useEffect(()=>{
        const result = country.filter((item)=>{
        return country.name.toLowerCase().match(search.toLocaleLowerCase());
        }); 
        setFilteredCountries(result);
    },[search]);
    return(
        <>
        <Dashboard />
        <div className="dataTable">
          <Link to="/AddProduct"><button className="addNew btn btn-info">Add New</button></Link>
            
        <DataTable 
            title="Product List" 
            columns={columns} 
            data={filteredCountries} 
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
export default Country;