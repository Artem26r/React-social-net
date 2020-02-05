import React from 'react';
import classes from './Profile_info.module.css';


const Profile_info = () => {
    return (
        <div className={classes.content}>

            <div>
                <img src='https://img1.goodfon.com/original/3000x2208/7/48/art-tsujiki-lyudi-nebo-zvezdy.jpg' alt=''/>
            </div>
            <div className={classes.discription_block}>
                avatar + disc
            </div>
        </div>
    )
}

export default Profile_info;

