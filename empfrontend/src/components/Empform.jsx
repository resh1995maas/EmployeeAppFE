import React from 'react'
import Navbar from './Navbar'

const Empform = () => {
  return (
    <div>
        <Navbar/>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <h1>Register</h1>
                            <br />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <h6>Please fill this form to add employees</h6>
                            <br />
                            <br />
                        </div>
                        <div className="col col-12 col-sm-5 col-md-5 col-lg-5">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" />
                            
                        </div>
                        <div></div>
                        <div className="col col-12 col-sm-5 col-md-5 col-lg-5">
                        <label htmlFor="" className="form-label">Designation</label>
                            <input type="text" className="form-control" />
                           
                        </div>
                       
                       <div></div>
                        <div className="col col-12 col-sm-5 col-md-5 col-lg-5">
                        <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div></div>
                        <div className="col col-12 col-sm-5 col-md-5 col-lg-5">
                        <label htmlFor="" className="form-label">Salary</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <button className="btn btn-success ">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Empform