import React from "react";
//import { defer } from "react-router-dom";
import Dashboard from "./Dashboard";
const AddProduct = ()=>{
    console.log("Add Products");
    return(
        
        <>
         <Dashboard />
        <div className="main-style">
            <form>
               
                <fieldset>
                    <legend className="alignForm">Add Products</legend>
                   
                <div className="display-style">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Title</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Product Code</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Description</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="display-style">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Sale Price</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Purchase Price</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                </div>               
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Quantity</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="formFile" className="form-label mt-4">Upload image</label>
                    <input className="form-control" type="file" id="formFile"/>
                 </div>
               
                </fieldset>
            </form>
            
        </div>
        
</>
    );
   
    
}
export default AddProduct;