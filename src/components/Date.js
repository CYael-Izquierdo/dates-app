import React from "react";
import PropType from "prop-types"

const Date = ({date, deleteDate}) => (
    <div className="date">
        <p>Pet: <span>{date.pet}</span></p>
        <p>Owner: <span>{date.owner}</span></p>
        <p>Date: <span>{date.day}</span></p>
        <p>Hour: <span>{date.hour}</span></p>
        <p>Symptoms: <span>{date.symptoms}</span></p>
        {/* onClick should be an arrow function to wait until the user clicks on delete button */}
        <button
            className=" button delete u-full-width"
            onClick={() => deleteDate(date.id)}
        >Delete &times;</button>
    </div>
);

// is not necessary document the key property
Date.propTypes = {
    date: PropType.object.isRequired,
    deleteDate: PropType.func.isRequired
}

export default Date;