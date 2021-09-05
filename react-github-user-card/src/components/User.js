import React from "react";
import Followers from "./Followers";

class User extends React.Component {

    render () {
        
        const { user, followers } = this.props

        return <div className='card'>
                <img alt='userimg'  src={user.avatar_url} />
                <div className='card-info'>
                    <h3 className='name'>{user.name}</h3>
                    <p className='username'>{user.login}</p>
                    <p>Location: {user.location}</p>
                    <p>Profile: {user.html_url}</p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Bio: {user.bio}</p>
                </div>
                <div className='followerCard-container'>
                    <h1>Followers: </h1>
                    {followers && followers.map((followers) => (
                        <Followers followers={followers} key={followers.id} />
                    ))}
                </div>
                </div>
        }
}

export default User