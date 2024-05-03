import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';


function Update(){

  const navigate = useNavigate();
  const [region, setRegion] = useState([]);
  const {state} = useLocation();

// const [data,setData] = useState([]); 
// useEffect(() => {
//   axios.get('http://localhost:8081/search/'+id)
//   .then(res => setData(res.data))
//   .catch(err => console.log(err))
// }, [])

  const handleSumbit = async (event) => {
    event.preventDefault();
    const id = state.id;
    const email = state.email;
    console.log(email);
    console.log(id);
  
    axios.put(`http://localhost:8081/update/${id}/${email}`, {region})
    .then((req ,res) => {
      console.log("Updated Successfully");
      navigate("/");
      alert("Updated Succesfully")
      })
      .catch((error) => {
      console.log(error);
      });
   

  } 

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
               
     <form onSubmit={handleSumbit}>      
                
    <h2> Update the data</h2>

    <div className='mb-3'>
      <label htmlfor=""><strong>Region</strong></label>
      <input type='text'  
      name='region'    
      placeholder='Enter the reason for Site outage'  
      className='form-control rounded-0'
      onChange={event => setRegion(event.target.value)} />
        

    </div> 

    <button type='submit' className='btn btn-info w-100 rounded-0'><strong> Add Reason to the Database </strong></button>
    </form>
  </div>
  </div>
    )


}

export default Update;
