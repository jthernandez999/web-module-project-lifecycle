import React from "react";

class Followers extends React.Component {

    render () {
        
        const { followers } = this.props

        return <div className='follower-card'>
            <img className='followers-img' width='200px' alt='followersimg' src={followers.avatar_url} />
            <h3 className='name'>{followers.name}</h3>
            <p className='followersname'>{followers.login}</p>
            <p>Location: {followers.location}</p>
            <p>Profile: {followers.html_url}</p>
            <p>Followers: {followers.followers_url.length}</p>
            <p>Following: {followers.following_url.length}</p>
            <p>Bio: {followers.bio}</p>
            </div>
    }
}

export default Followers