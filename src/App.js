import React, {Fragment, useState, useEffect} from 'react';
import Form from "./components/Form";
import Date from "./components/Date";

function App() {
    // Local storage dates
    // local storage only contain strings, so we have to parse
    // lsDates will be the initial state's value
    let lsDates = JSON.parse(localStorage.getItem("dates"));

    // Date Array States
    const [dates, saveDates] = useState(lsDates ? lsDates : []);

    // Use effect to realize operation when the state changes
    useEffect(() => {
        localStorage.setItem("dates", JSON.stringify(dates));
    }, [dates]); // When dates is updated, the arrow function will be executed

    // function to add new date
    const createDate = date => {
        saveDates([
            ...dates,
            date
        ]);
    }

    const deleteDate = id => {
        const newDates = dates.filter(date => date.id !== id);
        saveDates(newDates);
    }

    // Conditional message
    const title = dates.length === 0 ? "There is no date" : "Manage your dates"
    return (
        <Fragment>
            <h1>Patients Manager</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form
                            createDate={createDate}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{title}</h2>
                        {dates.map(date => (
                            <Date
                                key={date.id}
                                date={date}
                                deleteDate={deleteDate}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
