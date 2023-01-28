export const Vacancy = () => {
    return (
        <section className="vacancy-section">
            <div className="container">
                <h2 className="heading-primary">Free vacancy</h2>
                <p className="heading-describtion">
                    Jobs that are available from us and looking for their own people! Browse our
                    vacancies and find the one that is right for you!
                </p>
                <div className="vacancies-header">
                    <h3 className="vacancy-header-title">Position</h3>
                    <h3 className="vacancy-header-title">Departament</h3>
                    <h3 className="vacancy-header-title">Location</h3>
                </div>
                <div className="vacancy">
                    <h4 className="vacancy-title">Motion Designer</h4>
                    <p className="vacancy-department">Design</p>
                    <p className="vacancy-location">San Francisko</p>
                </div>
                <div className="vacancy">
                    <h4 className="vacancy-title">Art Director</h4>
                    <p className="vacancy-department">Design</p>
                    <p className="vacancy-location">San Francisko</p>
                </div>
                <div className="vacancy">
                    <h4 className="vacancy-title">Customer Relations</h4>
                    <p className="vacancy-department">Support</p>
                    <p className="vacancy-location">New York</p>
                </div>
                <div className="vacancy btn-margin">
                    <h4 className="vacancy-title">React Developer</h4>
                    <p className="vacancy-department">Engineering</p>
                    <p className="vacancy-location">San Francisko</p>
                </div>

                <button className="btn">Don't see a good fit? Submit your resume</button>
            </div>
        </section>
    );
};
