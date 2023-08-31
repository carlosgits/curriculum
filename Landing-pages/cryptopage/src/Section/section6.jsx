import CommentCard from "../components/commentcard"
import "../styles/section6.css"
import { Info } from "../components/comments"

const Section6 = () => {
    return (
        <div className="section6">
            <div class="title-container-s6">
                <h2 class="text-center title-s6 text-light">30 Million Users Worldwide</h2>
                <p class="title-subject text-center">Cryptocurrency investments are subject to market risks</p>
                </div>
                <div className="comments-container ">
                    <CommentCard text={Info[0].Comment} name={Info[0].name}  title={Info[0].title} img={Info[0].profilePic} />
                    <CommentCard text={Info[1].Comment} name={Info[1].name} title={Info[1].title} img={Info[1].profilePic} />
                    <CommentCard text={Info[2].Comment} name={Info[2].name} title={Info[2].title} img={Info[2].profilePic} />
                </div>
           
        </div>
    )
}

export default Section6