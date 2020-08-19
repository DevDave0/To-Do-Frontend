import React from 'react'
import image1 from '../images/Stage1.jpg'
import image2 from '../images/Stage2.jpg'
import image3 from '../images/Stage3.jpg'
import image4 from '../images/Stage4.jpg'
import image5 from '../images/Stage5.jpg'
import image6 from '../images/Stage6.jpg'

const Profile = (props) => {

    let { username, avatar, experience_bar} = props

    let checkExp = () => {
        if (parseInt(experience_bar, 10) < 50){
            return image1
        } else if (parseInt(experience_bar, 10) >= 50 && parseInt(experience_bar, 10) < 80){
            return image2
        } else if (parseInt(experience_bar, 10) >= 80 && parseInt(experience_bar, 10) < 120){
            return image3
        } else if (parseInt(experience_bar, 10) >= 120 && parseInt(experience_bar, 10) < 160){
            return image4
        } else if (parseInt(experience_bar, 10) >= 160 && parseInt(experience_bar, 10) < 200){
            return image5
        } else if (parseInt(experience_bar, 10) >= 200 && parseInt(experience_bar, 10) < 1000000){
            return image6
        }
        
    }

    return (
        <div className="profile">
            <h3>User Profile</h3>
            {username}
            <div><img className='profile-picture' src={checkExp()} alt='profile-pic'/></div>
            <div>{`Experience: ${experience_bar}`}</div>
        </div>
    )

}


export default Profile