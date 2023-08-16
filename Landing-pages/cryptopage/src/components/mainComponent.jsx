import "../styles/mainComponent.css";
import Section1 from "../Section/section1";
import Section2 from "../Section/section2";
import Section3 from "../Section/section3";



const MainComponent = () => {


    return (

        <main className="main bg-image-section-1">
            <Section1/>
            <Section2/>
            <Section3/>
        </main>
    )

}

export default MainComponent; 