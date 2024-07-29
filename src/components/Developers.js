import "./DevStyles.css";
import bgimagerest from '../assets/bgrestimg.jpg';
import DevData from "./DevData";
import prasadpic from '../assets/prasadpic.jpeg';
import niharikapic from '../assets/niharikapic.jpeg';
import pallavipic from '../assets/pallavipic.jpeg';

function Developers(){
    return(
        <>
        <div className="dev">
        <h1>Building Dine N Eat Together</h1>
            <p>Who we are</p>
            <div className="devcard">
                <DevData
                image={prasadpic}
                heading="SLVV PRASAD"
                text="Founder & Developer"
                />
                <DevData
                image={niharikapic}
                heading="U.NIHARIKA"
                text="Developer"
                />
                <DevData
                image={pallavipic}
                heading="S.PALLAVI"
                text="Developer"
                />
                </div>
            </div>
      </>
    )
}

export default Developers;
