import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Dashboard = () => {
    const [data, setData] = useState([])
    const fetchDataFromApi = () => {

        axios.get("https://jsonplaceholder.typicode.com/users").then(

            (response) => {
                setData(response.data)
            }

        )

    }
    useEffect(() => {

        fetchDataFromApi()

    }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="rowg-3">




                        <table class="table">
                                            <thead>
                                                <tr>

                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>




                            {data.map(
                                (value, index) => {


                                    return <>
                                    

                                        
                                                <tr>

                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                </tr>

                                        

                                    </>
                                }
                            )}
                                </tbody>
                                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard