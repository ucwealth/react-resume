const Job = ({ title, company, date, role }) => {
    return ( 
        <div>     
            <h4>{title}</h4>
            <p style={{ color: "#888888" }}>{company}</p>
            <p>{date}</p>
            <ul>
                <li>{role.first}</li>
                <li>{role.second}</li>
            </ul>
        </div>
     );
}
 
export default Job;