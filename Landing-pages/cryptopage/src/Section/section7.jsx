import PostPreview from "../components/postPreview"
import "../styles/section7.css"
import { posts } from "../components/postdb" 


const Section7 = () => {

    return (
        <div className="section-7">
            <div class="title-container-s7">
                <h2 class="text-center title-s7 text-light">30 Million Users Worldwide</h2>
                <p class="title-subject text-center">Cryptocurrency investments are subject to market risks</p>
            </div>
            <div className="container-7">
            <PostPreview postImg={posts[0].postPrevPic}  postTitle={posts[0].postTitle} postPrevTxt={posts[0].postPrevText} postLink={posts[0].postLink} />
            <PostPreview postImg={posts[1].postPrevPic}  postTitle={posts[1].postTitle} postPrevTxt={posts[1].postPrevText} postLink={posts[1].postLink} />
            <PostPreview postImg={posts[2].postPrevPic}  postTitle={posts[2].postTitle} postPrevTxt={posts[2].postPrevText} postLink={posts[2].postLink} />
            <PostPreview postImg={posts[3].postPrevPic}  postTitle={posts[3].postTitle} postPrevTxt={posts[3].postPrevText} postLink={posts[3].postLink} />
            </div>
            <div className="enrollCont">
            <a className="enrollUniversity" href="#">Enroll crypto University</a>
            </div>
        </div>
    )
}

export default Section7