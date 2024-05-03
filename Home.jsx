import react, { useEffect , useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Link } from "react-router-dom";


function Home(){

   const [datas, setData] = useState([]);
   
   
   function renderTableRows() {
    return datas.map((row) => (
      <tr key={row.id}>
        &nbsp;
        <td className="text-center" >{row.id}</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <td className="text-center">{row.Name}</td> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
        <td className="text-center">{row.Email}</td> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
         <td className="text-center">{row.Region}</td> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 
         <td className="text-center">{row.Reason}</td> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
  
      </tr>
    ));
  };

   

   useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])


return (
        

    <div className="d-flex  bg-dark justify-content-center align-items-center"  >
        <div className="w-50 bg-white rounded p-3 form-control">
            <h1> INFORMATION</h1>
            <div className="d-flex justify-content-end">
               <Link to="/create" className='btn btn-success'> Create a new data + </Link>      
            </div>
            <br/>
            <br/>
            
            <div>   <Link to="/max" className='btn btn-danger'> Find Highest Site Outages in this Month </Link> 
            </div>
            &nbsp;

            <thead className="thead-light">
                <tr>
                &nbsp;&nbsp;&nbsp;
                    <th className="text-center">Site-ID</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <th className="text-center">Technology</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <th className="text-center">Date</th>&nbsp;&nbsp;&nbsp;
                    <th className="text-center">Month</th>  &nbsp;&nbsp;&nbsp;
                    <th className="text-center">Reason</th>  

                    
                </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
        </div>
    </div>
        


)
}

export default Home;