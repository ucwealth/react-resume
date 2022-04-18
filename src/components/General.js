import pic from "../assets/face.png"

const GeneralInfo = () => {
    return ( 
        <div className="top-section">
            <div className="top-info">
                <div>
                    <h1>Uche Okeke</h1>
                    <p>Innovative Frontend Developer with 2 years experience in the industry. Proficient with React. Used problem-solving aptitude to enhance application performance by 17%. Created data visualization tools and integrated designs. </p>
                </div>
                <div className="top-img">
                    <img src={pic} alt="mon pishur" width="150px" height="150px" />
                </div>
            </div>

            <div className="bottom-info">
                <p>16 Adena Road, Ajah Lagos</p>
                <p>Email: ucheokeke16@gmail.com</p>
                <p>Phone No: +2348009002022</p>
            </div>
        </div>
     );
}
 
export default GeneralInfo;