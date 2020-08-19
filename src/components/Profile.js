import React from 'react'
import ProgressBar from './ProgressBar'
import image1 from '../images/Stage1.jpg'
import image2 from '../images/Stage2.jpg'
import image3 from '../images/Stage3.jpg'
import image4 from '../images/Stage4.jpg'
import image5 from '../images/Stage5.jpg'
import image6 from '../images/Stage6.jpg'

const Profile = (props) => {

    let { username, experience_bar} = props

    let value = '1'

    let checkExp = () => {
        if (parseInt(experience_bar, 10) < 40){
            value = '0'
            return image1
        } else if (parseInt(experience_bar, 10) >= 40 && parseInt(experience_bar, 10) < 80){
            value = '10'
            return image1
        } else if (parseInt(experience_bar, 10) >= 80 && parseInt(experience_bar, 10) < 110){
            value = '20'
            return image2
        } else if (parseInt(experience_bar, 10) >= 110 && parseInt(experience_bar, 10) < 140){
            value = '30'
            return image2
        } else if (parseInt(experience_bar, 10) >= 140 && parseInt(experience_bar, 10) < 180){
            value = '40'
            return image3
        } else if (parseInt(experience_bar, 10) >= 180 && parseInt(experience_bar, 10) < 220){
            value = '50'
            return image3
        } else if (parseInt(experience_bar, 10) >= 220 && parseInt(experience_bar, 10) < 260){
            value = '60'
            return image4
        }   else if (parseInt(experience_bar, 10) >= 260 && parseInt(experience_bar, 10) < 300){
            value = '70'
            return image4
        }  else if (parseInt(experience_bar, 10) >= 300 && parseInt(experience_bar, 10) < 340){
            value = '80'
            return image5
        } else if (parseInt(experience_bar, 10) >= 340 && parseInt(experience_bar, 10) < 380){
            value = '85'
            return image5
        } else if (parseInt(experience_bar, 10) >= 380 && parseInt(experience_bar, 10) < 420){
            value = '90'
            return image6
        } else if (parseInt(experience_bar, 10) >= 420 && parseInt(experience_bar, 10) < 1000000){
            value = '100'
            return image6
        }
        
    }


    return (
        <div className="profile">
            <h3>User Profile</h3>
            {username}
            <div><img className='profile-picture' src={checkExp()} alt='profile-pic' /></div>
            <div>{`Experience: ${experience_bar}`}</div>
            <ProgressBar done={value} />
            {/* <ProgressBar done={'10'} /> */}
            {/* <ProgressBar done={'40'} /> */}
            {/* <ProgressBar done={'100'} /> */}
        </div>
    )

}


export default Profile