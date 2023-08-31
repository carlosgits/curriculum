import Quotation from "../icons/quotations"
import "../styles/commentcard.css"

/*require text for the comment of the clients, name of who does the comment, title example FX developer or Twitter manager*/
const CommentCard = ({ text: text, name: name, title: title, img: img }) => {

    return (
        <div className="comment-card">
            <div className="quotation-container">
                <Quotation width="80px" height="80px" />
            </div>
            <div className="comnt-content"><p className="comnt-text">{text}</p></div>
            <div className="profile-info">
                <div className="picture-cont">
                    <img src={img} width="48px" height="48px" className="picture" />
                </div>
                <div className="profile-title-cont">
                    <p className="name-info  text-center">{name}</p>
                    <p className="name-title text-center">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentCard