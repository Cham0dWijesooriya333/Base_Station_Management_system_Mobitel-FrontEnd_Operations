import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import react, { useEffect , useState} from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";


function Create(){

    const navigate= useNavigate()
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [region, setRegions] = useState("");

    const handleSumbit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/student', {id, name, email, region})
        .then(res => {
           console.log(res);
           navigate('/')
       })
           .catch(err => console.log(err)); 
        }

    return (
        <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
               
     <form onSubmit={handleSumbit}>     
                
    <h2> Add new data</h2>

    <div className='mb-3'>
     <label htmIfor="email"> <strong>ID </strong></label>
     <input type="ID" placeholder='ID' name='email' className=' form-control rounded-0' onChange={(event) => {
        setId(event.target.value)
      }} />
    </div>
    
    <div className='mb-3'>
      <label htmlfor="password"><strong>Technology</strong></label>
      <input type='username' placeholder='Enter Name' name='password' className='form-control rounded-0' onChange={(event) => {
        setName(event.target.value)
      }} />
    </div>


    <div className='mb-3'>
      <label htmlfor="password"><strong>Date</strong></label>
      <input type='username' placeholder='Enter Email' name='password' className='form-control rounded-0' onChange={(event) => {
        setEmail(event.target.value)
      }} />
    </div>

    <div className='mb-3'>
      <label htmlfor="password"><strong>Region</strong></label>
      <input type='username' placeholder='Enter Region' name='password' className='form-control rounded-0' onChange={(event) => {
        setRegions(event.target.value)
      }} />
    </div>

    <button type='submit' className='btn btn-info w-100 rounded-0'><strong> Include Information </strong></button>
    <br/> <br/> <br/>
    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    <Link to={'/'} className="btn btn-danger">Back to homepage</Link>

    
    
    </form>
  </div>
  </div>

    
    )

}

export default Create;