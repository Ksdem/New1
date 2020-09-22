import React from "react";
import f from './UserPhoto.module.css';

let Users = (props) => {
    if (props.users.length===0){
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://st4.depositphotos.com/12985790/19659/i/450/depositphotos_196591746-stock-photo-attractive-woman-pink-hair-pink.jpg',
            followed: false,
            fullName: 'Xeniya',
            status: 'I am a boss',
            location: {city: 'Kazan', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: 'https://st4.depositphotos.com/12985790/19659/i/450/depositphotos_196591746-stock-photo-attractive-woman-pink-hair-pink.jpg',
            followed: true,
            fullName: 'Alex',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://st4.depositphotos.com/12985790/19659/i/450/depositphotos_196591746-stock-photo-attractive-woman-pink-hair-pink.jpg',
            followed: false,
            fullName: 'Tom',
            status: 'I am a boss too',
            location: {city: 'Syktyvkar', country: 'Russia'}
        }
    ])}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={f.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                </div>
            </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                      <span>
                          <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                      </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;