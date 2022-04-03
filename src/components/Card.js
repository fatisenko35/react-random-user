import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import axios from 'axios';
import Avatars from './Avatar';
import "../App.css";
import Button from './Button';

export default function MediaCard() {
    const [user, setUser] = useState([])
    const getData = async () => {
       const {data} = await axios.get("https://randomuser.me/api/");
       const {results} = await data;
       setUser(results[0]);
       
    }
    useEffect(() => {
     getData()
          }
    , []);

    useEffect(() => {
    console.log(user)
    }, [user])
    
  return (
   
     <div className="media-card" style={{width: '450px'}}>
       <Card >
       <Avatars user = {user}/>
       </Card>
       <div className="btn-div">
       <Button getData = {getData}/>
       </div>
     </div>
     

  );
}
