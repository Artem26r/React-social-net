import React from 'react';
import classes from './Profile_info.module.css';
import Preloader from "../../../../common/preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.content}>

            <div>
                <img src='https://img1.goodfon.com/original/3000x2208/7/48/art-tsujiki-lyudi-nebo-zvezdy.jpg' alt=''/>
            </div>
            <div className={classes.discription_block}>
                <img src={props.profile.photos.large} alt=""/>
                avatar + disc
            </div>
        </div>
    )
}

export default ProfileInfo;

