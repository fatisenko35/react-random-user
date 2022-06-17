import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import email from './assets/email.svg';
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";
import "../App.css"
export default function Avatars({ user }) {
    React.useEffect(() => {console.log(user.dob.age)}, [user]);
    return (
        <div className="wrapper" >
            <Stack direction="column" spacing={2} >

                <div className="card-container">
                    <Avatar alt="Remy Sharp" src={user?.picture?.large} sx={{ width: 100, height: 100 }} />
                    <p>{user?.name?.title} {user?.name?.first}  {user?.name?.last}</p>

                </div>

                <div className="card-container">
                    <Avatar alt="Travis Howard" src={email} style={{marginLeft:"1.7rem"}} />
                    <p>{user?.email}</p>
                </div>

                <div className="card-container">
                    <Avatar alt="Cindy Baker" src={phone} style={{marginLeft:"1.7rem"}}  />
                    <p>{user?.cell}</p>
                </div>

                <div className="card-container">
                    <Avatar alt="Cindy Baker" src={location} style={{marginLeft:"1.7rem"}} />
                    <p>{user?.location?.city} {user.location?.country}</p>
                </div>
                <div className="age">
                    <p>Age: {user?.dob?.age}</p>
                    <p>Register Date: {user?.registered?.date.slice(0,10)}</p>
                </div>
            </Stack>
        </div>

    );
}
