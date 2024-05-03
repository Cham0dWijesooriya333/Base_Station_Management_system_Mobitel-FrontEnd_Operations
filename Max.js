import React from 'react';
import { useEffect , useState} from "react";
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css' 


function Max(){

    const [data, setData] = useState([])
    const [count, setCounts] = useState([]);
    
    

    useEffect(() => {
        axios.get('http://localhost:8081/max/')
        .then((result) => {
            setCounts(result.data)
            console.log(count)
        })
        .catch(err => console.log(err));
      }, [])

      console.log(count);
      const renderTableRows = () => {
        return count.map((row) => (
          <tr key={row.id}>
            <td className="text-center">{row.id}</td> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
            <br/> <br/>
            <td className="text-center">{row.count}</td> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; 
            <td className="text-center">{row.Region}</td> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; 
            
            <Link to="/view" state= {{id:row.id, region:row.Region}}><button className='btn btn-primary'>View Details</button></Link>
           
          </tr>
        ));
      };
    
      return (

        <div className="d-flex  bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3 form-control">
          <h1>Higherst Broken down Sites</h1>
          <br/>
          <br/>
          

            <Link to= '/' className='btn btn-dark' >Go to home page</Link> 

          <br/><br/>
          <table>
            <thead>
              <tr>
                <th>Site-ID</th>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <th>Count</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <th>Month</th> 
                
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
        </div>
      );
    };

export default Max;
