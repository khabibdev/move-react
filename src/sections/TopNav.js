import logo from "../img/Logo.svg";
import chevron from "../img/chevron.svg";

export const TopNav = () => {
    return (
        <header className="header nav-open container">
            <a href="#">
                {" "}
                <img className="logo" alt="Move logo" src={logo} />
            </a>

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a className="main-nav-link" href="#">
                            Home
                        </a>
                        <img className="chevron-down" src={chevron} alt="chevron-down" />
                    </li>
                    <li>
                        <a className="main-nav-link" href="#">
                            Pages
                        </a>
                        <img className="chevron-down" src={chevron} alt="chevron-down" />
                    </li>

                    <li>
                        <a className="main-nav-link" href="#">
                            Blog
                        </a>
                        <img className="chevron-down" src={chevron} alt="chevron-down" />
                    </li>

                    <li>
                        <a className="main-nav-link" href="#">
                            Portfolio
                        </a>
                        <img className="chevron-down" src={chevron} alt="chevron-down" />
                    </li>
                    <button className="btn-nav">Get Started</button>
                </ul>
            </nav>
            <button className="btn-mobile-nav">
                <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
                <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
            </button>
        </header>
    );
};
