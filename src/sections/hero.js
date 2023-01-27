import heroimg from "../img/heroimg.jpg";

export const Hero = () => {
    return (
        <section className="section-hero">
            <div className="container section-hero-content">
                <div classNameName="hero-text-box">
                    <h1 classNameName="heading-primary">
                        We are a small
                        <br />
                        team that thinks <br />
                        big!
                    </h1>
                    <p className="heading-describtion">
                        Have you been looking for a job for a long time <br />
                        where you will be welcome? Send your resume <br />
                        to work with us!
                    </p>
                    <div className="find-link">
                        <a href="#" className="header-link">
                            Find an opening &rarr;
                        </a>
                    </div>
                </div>
                <div className="hero-picture">
                    <img className="hero-img" src={heroimg} alt="people hands together" />
                </div>
            </div>
        </section>
    );
};
