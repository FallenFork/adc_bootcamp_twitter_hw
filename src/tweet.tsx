// Tweet.js
import { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

function Tweet({ username, content, timestamp, likes } :
     { username : string, content : string, timestamp : string, likes : number } ){
    
    const [numLikes , setNumLikes] = useState(likes)
    const [liked, setLiked] = useState(false)

    function handleClick() {
        if(liked) {
            setNumLikes(numLikes - 1)
        } else {
            setNumLikes(numLikes + 1)
        }

        setLiked(!liked)
    }


    return (
        <div className='tweet'>
            <h4>@{username}</h4>
            <p>{content}</p>
            <small><p>{timestamp} ago</p></small>
            {liked ? <button onClick = {handleClick}>❤️ {numLikes} Likes</button> : <button onClick = {handleClick}>🤍 {numLikes} Likes</button> }
        </div>
    )
}

export default Tweet;
// export default Tweet;
// the two variables that need start are the number of likes and the heart 
