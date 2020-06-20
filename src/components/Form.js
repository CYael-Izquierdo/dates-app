import React, {Fragment, useState} from 'react';
import uuid from "uuid/dist/v4";
import PropTypes from 'prop-types';

const Form = ({createDate}) => {
    // Date states
    const initialDateState = {
        pet: "",
        owner: "",
        day: "",
        hour: "",
        symptoms: ""
    };
    const [date, updateDate] = useState(initialDateState);

    const clearForm = () => {
        // it restart the form because input field values' point to date state
        updateDate({...initialDateState});
    }

    // Error State
    const [error, updateError] = useState(false);

    // function to update state when a user input some value
    const handleChange = e => {
        updateDate({
            ...date,
            [e.target.name]: e.target.value
        });
    }

    // extract values
    const {pet, owner, day, hour, symptoms} = date;

    // when user click submit button
    const submitDate = e => {
        e.preventDefault();

        // Validate fields
        if (pet.trim() === "" || owner.trim() === "" || day.trim() === "" || hour.trim() === "" || symptoms.trim() === "") {
            updateError(true);
            return;
        }

        // delete error message
        updateError(false);

        // Assign id
        // library to generate id: npm i uuid
        date.id = uuid();

        // Create date
        createDate(date);

        // Restart form
        clearForm();
    }

    return (
        <Fragment>
            <h2>Add Date</h2>

            {error ? <p className="error-alert">All fields are required</p> : null}
            <form
                onSubmit={submitDate}
            >
                <label>Pet's Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's Name"
                    onChange={handleChange}
                    value={pet}
                />
                <label>Owner's Name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's Name"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Date</label>
                <input
                    type="date"
                    name="day"
                    className="u-full-width"
                    onChange={handleChange}
                    value={day}
                />
                <label>Hour</label>
                <input
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />
                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add Date
                </button>
            </form>
        </Fragment>
    );
}

// Document component properties and validate property types
Form.propTypes = {
    createDate: PropTypes.func.isRequired
};

export default Form;