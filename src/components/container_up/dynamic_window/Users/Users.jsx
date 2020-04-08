import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../../../assets/images/NoPhoto.jpg";
import {CustomButton} from "../../../components_element/componentsElement";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                                 onClick={ () => {props.onPageChanged(p);} }>
                           {p}
                       </span>
                })}
            </div>
            {
                props.users.map( u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile' + u.id}>
                            <div className={classes.content}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                            </div>
                        </NavLink>
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
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}


export default Users;