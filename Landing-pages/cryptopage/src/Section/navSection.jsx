import "../styles/navSection.css"



const NavBar = () => {

    return (


        <div className="navBar nav nav-tabs">
            <a className="k-title" href="#">Krypto</a>
            <div className="navLinks">
                <a href="#" className="navLink" id="howItWorks">HOW IT WORKS</a>
                <a href="#" className="navLink" id="pricing">CRYPTOS</a>
                <a href="#" className="navLink" id="contact">TESTIMONIAL</a>
                <a href="#" className="navLink" id="login">FEATURES</a>
                <a href="#" className="navLink" id="signUp">UNIVERSITY</a>
            </div>
            <div id="languageSection" class="languageSection ">
                
                    <div class="dropdown text-end">
                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <span class="caret"></span></button>
                        <ul class="dropdown-menu dropdown-menu-end bg-dark ">
                            <li><a href="#">en-US</a></li>
                            <li><a href="#">es-ES</a></li>
                            <li><a href="#">fr-FR</a></li>
                        </ul>
                   

                </div>


            </div>



        </div>



    )
}

export default NavBar;