import logo from "../img/Logo.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="company__brand">
                    <img src={logo} alt="Move" className="company__logo" />
                    <p>
                        Move - Multipurpose Design Template will help you develop your website
                        design.
                    </p>
                    <div className="company__socials">
                        <ion-icon className="social-icon" name="logo-dribbble"></ion-icon>
                        <ion-icon className="social-icon" name="logo-facebook"></ion-icon>
                        <ion-icon className="social-icon" name="logo-twitter"></ion-icon>
                        <ion-icon className="social-icon" name="logo-youtube"></ion-icon>
                    </div>
                </div>
                <div className="company__links">
                    <h6>Home</h6>
                    <ul>
                        <li>
                            <a href="#" className="nav__link">
                                Desktop App
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Mobile App
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                SaaS
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Event
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Software
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="company__links">
                    <h6>Pages</h6>
                    <ul>
                        <li>
                            <a href="#" className="nav__link">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Case Studies
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="company__links">
                    <h6>Blog</h6>
                    <ul>
                        <li>
                            <a href="#" className="nav__link">
                                Blog Listing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Blog Article
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Newsroom
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="company__links">
                    <h6>Portfolio</h6>
                    <ul>
                        <li>
                            <a href="#" className="nav__link">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav__link">
                                Single Case
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="company__legal">
                <p className="copyright">&#169; 2021-2022 Move Multipurpose Design Template.</p>
            </div>
        </footer>
    );
};
