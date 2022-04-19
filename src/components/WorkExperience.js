import Job from "./Job";

const WorkExperience = () => {
    const role = [
        { first: "Built and maintained several websites and blogs", second: "Was tasked with managing all our social media pages" },
        { first: "Worked as a Sales Rep in the field", second: "Came up with various strategies to boost sales" }
    ]
    return ( 
        <>
        <h2 style={{ textAlign: "center" }}>Work Experience</h2>
        <div className="work">
            <Job title="Web Designer" company="Midaspage International" date="March 2019 - Dec 2021" role={role[0]} />
            <Job title="Sales Executive" company="TD Africa" date="Jan 2017 - Feb 2019" role={role[1]}/>
        </div>
        </>
     );
}
 
export default WorkExperience;