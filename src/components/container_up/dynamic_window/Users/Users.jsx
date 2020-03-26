import React from 'react'
import classes from './Users.module.css';
import {CustomButton} from '../../../components_element/componentsElement';
import * as axios from 'axios';
import userPhoto from '../../../../assets/images/NoPhoto.jpg'



class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map( u => <div key={u.id}>
                        <div>
                            <div className={classes.content}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </div>
                            <div>
                                { u.followed
                                    ? <CustomButton onClick={ () => {this.props.unfollow(u.id)} }>unfollow</CustomButton>
                                    : <CustomButton onClick={ () => {this.props.follow(u.id)} }>follow</CustomButton>
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
}


export default Users;