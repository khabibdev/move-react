import icon from "../img/icon.svg";
import icon2 from "../img/icon-2.svg";
import icon3 from "../img/icon-3.svg";
import icon4 from "../img/icon-4.svg";
export const Offer = () => {
    return (
        <section className="section-offer">
            <div className="offer-text-box">
                <h1 className="heading-primary">What we offer</h1>
                <p className="heading-describtion">
                    We offer you a huge number of advantages when applying for a job with us. Check
                    <br />
                    out a few basic but important ones below.
                </p>
            </div>
            <div className="offer-div container grid grid--2-cols">
                <div className="offer">
                    <img className="offer-icon" src={icon} alt="" />
                    <p className="offer-title">Full social package</p>
                    <p className="offer-text">
                        Our company offers you a full social package when you apply <br />
                        for a job with us.
                    </p>
                </div>
                <div className="offer">
                    <img className="offer-icon" src={icon2} alt="" />
                    <p className="offer-title">Equipped workplace</p>
                    <p className="offer-text">
                        We will equip your workplace at the expense of the company. <br />
                        You can order everything you need for your work.
                    </p>
                </div>
                <div className="offer">
                    <img className="offer-icon" src={icon3} alt="" />
                    <p className="offer-title">Free meals</p>
                    <p className="offer-text">
                        During breaks between work, you can eat in our cafe for free. <br />
                        You will have a huge selection of food available.
                    </p>
                </div>
                <div className="offer">
                    <img className="offer-icon" src={icon4} alt="" />
                    <p className="offer-title">Game room</p>
                    <p className="offer-text">
                        If you are too tired you can distract yourself from thinking <br />
                        about working in the game room.
                    </p>
                </div>
            </div>
        </section>
    );
};
