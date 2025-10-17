import React from "react";


const Profile = ({url, name, role, about}) => {


    return(
<>
<img src={url} alt="profile" width="170px" height="150px"/>
<h2>My name is {name}</h2>
<h3>I am an {role}</h3>
<p>{about}</p></>


    )
}
export default Profile