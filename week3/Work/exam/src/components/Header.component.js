import Lottie from "lottie-react";
import anim from "../Animations/44177-quiz.json"
const Header = () => {

    return(<>

    <div class="container">
        <div class="row">
            <div class="col">
                <Lottie animationData={anim} loop={true}/>
            </div>
            <div class="col">
                <p class="h1">Industrial Training Weekly Test Instructions:<br></br></p>
                <p class="h2">30 Marks<br></br></p>
                <p class="h3">MCQ Type<br></br></p>
                <p class="h4">Limited Time<br></br></p>
                <button class="btn btn-primary m-2">Open WEB Dev Test</button><br></br>
                <button class="btn btn-primary m-2">Open APP Dev Test</button><br></br>
            </div>
        </div>
    </div>
    
    </>)
}
export default Header;