import "../styles/mainComponent.css";
import Section1 from "../Section/section1";
import Section2 from "../Section/section2";
import Section3 from "../Section/section3";
import Section4 from "../Section/section4";
import Section5 from "../Section/section5";
import Section6 from "../Section/section6";



const MainComponent = () => {


    return (

        <main className="main bg-image-section-1">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
        </main>
    )

}

export default MainComponent; 