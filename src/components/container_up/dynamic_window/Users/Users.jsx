import React from 'react'
import classes from './Users.module.css';
import {CustomButton} from '../../../components_element/componentsElement';
import * as axios from 'axios';
import userPhoto from '../../../../assets/images/NoPhoto.jpg'




let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        }
    };

    return (
        <div>
            <button onClick={getUsers}>HHH</button>
            {
                props.users.map( u => <div key={u.id}>
                    <div>
                        <div className={classes.content}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </div>
                        <div>
                            { u.followed
                                ? <CustomButton onClick={ () => {props.unfollow(u.id)} }>unfollow</CustomButton>
                                : <CustomButton onClick={ () => {props.follow(u.id)} }>follow</CustomButton>
                            }

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <dib>{'u.location.country'}</dib>
                            <dib>{'u.location.city'}</dib>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;