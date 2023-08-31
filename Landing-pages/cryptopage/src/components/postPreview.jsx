
import "../styles/postpreview.css"

const PostPreview = ({ postImg: postImg, postPrevTxt: postPrevTxt, postTitle: postTitle,postLink: postLink }) => {
    return (
        <div className="postPrevContainer">
            <div className="post-photo-container">
                <img src={postImg} className="postImg" />
            </div>
            <div className="postInfo">
                <h3 className="postTitle">{postTitle}</h3>
                <p className="postPrevTxt">{postPrevTxt}</p>
                <a className="learnmore" href={postLink}>Learn more</a>
            </div>
           
        </div>
    )
}

export default PostPreview