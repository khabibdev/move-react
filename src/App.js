import "./sections/styles/index.css";
import { TopNav } from "./sections/TopNav";
import { Hero } from "./sections/hero";
import { Offer } from "./sections/offer";
import { Dreamjob } from "./sections/dreamjob";

const App = () => {
    return (
        <>
            <TopNav />
            <Hero />
            <Offer />
            <Dreamjob />
        </>
    );
};
export default App;
