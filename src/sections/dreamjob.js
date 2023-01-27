import heroimg1 from "../img/heroimg.jpg";
export const Dreamjob = () => {
    return (
        <section className="section-dream-job container">
            <div className="dream-job-img">
                <img className="job-img" src={heroimg1} alt="People smiling" />
            </div>
            <div className="dream-job-text">
                <h2 className="heading-primary">
                    Find your <br />
                    dream job in our <br />
                    company
                </h2>
                <p className="heading-describtion">
                    We hope that you will find a job that you have <br />
                    been dreaming about for a long time. If we don't <br />
                    have any vacancies send us your resume!
                </p>
            </div>
        </section>
    );
};
