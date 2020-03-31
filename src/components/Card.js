import React from "react";

function Card(props) {
    return (
        < div >
            <div className="card mt-4 mr-2 text-center" style={{width: "18rem"}}>
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <ul className="list-group list-group-flush" style={{fontSize: "20px"}}>
                    Technologies Used
                    {props.technologies.map( element => (
                        <li className="list-group-item" style={{fontSize: "15px"}}>{element}</li>
                    ))}
                </ul>
                <div className="card-body">
                    <a href={props.github} className="card-link">Github Link</a>
                    <a href={props.demo} className="card-link">Demo Link</a>
                </div>
            </div>
        </div >

    )
}

export default Card;