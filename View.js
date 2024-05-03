import React from 'react';
import { useEffect , useState} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function View(){

    const [data, setData] = useState([])
    const {state} = useLocation();
    const [view, setView] = useState([]);

    const id = state.id
    const region = state.region;
  
   
    const navigate = useNavigate();
  

    useEffect(() => {
      
        axios.get(`http://localhost:8081/view/${id}/${region}`)
        .then((res) => {
            setView(res.data)
            
        })
        .catch(err => console.log(err));
      }, [])


      const renderTableRows = () => {
        return view.map((row) => (
          
          <tr key={row.id}>

            <td className="text-center">{row.id}</td> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
            <br/> <br/>
            <td className="text-center">{row.Email}</td> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; 
            <td className="text-center">{row.Region}</td> 
            <Link  to= "/update" state= {{id:row.id, email:row.Email}}><button className='btn btn-info'>Update Reason</button></Link>

          </tr>
        ));
      };
    
      return (

        <div className="d-flex  bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3 form-control">
          <h1>Details of Outage Sites</h1>
          <br/>
          <br/>
          

            <Link to= '/' className='btn btn-dark' >Go to home page</Link> 

          <br/><br/>
          <table>
            <thead>
              <tr>

                <th className="text-center">Site-ID</th>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <th className="text-center">Date</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
                
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
        </div>
      );
    };

export default View;
