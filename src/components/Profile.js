import React from 'react'

const Profile = (props) => {

    let { username, avatar, experience_bar} = props
    
    return (
        <div className="profile">
            <h3>User Profile</h3>
            {username}
            
        </div>
    )

}


export default Profile