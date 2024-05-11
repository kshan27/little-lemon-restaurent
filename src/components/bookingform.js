import 'App.css';
import Button from './Button/button';
import { useState, useRef } from 'react';
import { Card, CardHeader, CardBody } from '@chakra-ui/card';
import { useNavigate } from 'react-router-dom';


function BookingForm(props) {
    const navigate = useNavigate();

    const navigateToConfirmPage = () => {
        navigate('/confirm');
    }

    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");

    const bookingDateRef = useRef(new Date());
    const bookingTimeRef = useRef();
    const guestsRef = useRef();
    const occasionRef = useRef("");

    const onBookingDateChange = (e) => {
        const bookingDate = e.target.value;
        setBookingDate(bookingDate);
        console.log(bookingDate);
    }

    const onBookingTimeChange = (e) => {
        const bookingTime = e.target.value;
        setBookingTime(bookingTime);
        console.log(bookingTime);
    }

    const NoOfGuests = (e) => {
        const guests = e.target.value;
        setGuests(guests);
        console.log(guests);
    }

    const onOccasionChange = (e) => {
        const occasion = e.target.value;
        setOccasion(occasion);
        console.log(occasion);
    }

    const validateBookingTimeError = () => {
        const booking_error = document.getElementById("res-time-error");
        console.log(bookingTimeRef.current.value);
        if (!bookingTimeRef.current.value) {
            booking_error.textContent = "Enter Booking Time.";
            booking_error.className = "error";

            return false;
        } else {
            booking_error.textContent = "";
            booking_error.className = "";
        }
        return true;
    }

    const validateBookingGuestsError = () => {
        const booking_error = document.getElementById("res-guest-error");
        console.log("Guests: "+guestsRef.current.value);
        if (!guestsRef.current.value || guestsRef.current.value === "0") {
            booking_error.textContent = "Enter Number of Guests.";
            booking_error.className = "error";

            return false;
        } else {
            booking_error.textContent = "";
            booking_error.className = "";
        }
        return true;
    }

    const validateBookingDate = () => {
        const booking_date_error = document.getElementById("res-date-error");
        if (!bookingDateRef.current.value) {
            bookingDateRef.current.setCustomValidity("Enter Booking Date.");
            booking_date_error.textContent = "Enter Booking Date.";
            booking_date_error.className = "error";

            return false;
        } else {
            booking_date_error.textContent = "";
            booking_date_error.className = "";
        }
        return true;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if (!validateBookingDate() || !validateBookingTimeError() || !validateBookingGuestsError()) {
            return false;
        }

        const formValues = {
            bookingDate,
            bookingTime,
            guests,
            occasion,
        };
        const areAllFieldsFilled = Object.values(formValues).every(
            (value) => value
        );

        navigateToConfirmPage();
        props.formSubmit(formValues);
        return true;
    }

    return (
        <>
            <div style={{ margin: "10px", display: "grid", placeItems: "center" }} >
                <Card variant="filled">
                    <CardHeader>
                        <h2 style={{ fontSize: "larger", marginLeft: "120px", marginRight: "120px", marginTop: "40px", fontWeight: "inherit" }}>
                            Book a Table
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <form
                            onSubmit={(e) => handleFormSubmit(e)}
                            style={{
                                display: "grid",
                                maxWidth: "200px",
                                gap: "20px"
                            }} >
                            <label htmlFor="res-date"><span> Choose date </span> </label>
                            <input ref={bookingDateRef} aria-label='Date' type="date" id="res-date" value={bookingDate} onChange={onBookingDateChange} required />
                            <span className="error" id="res-date-error" aria-live="polite"></span>

                            <label htmlFor="res-time">Choose time</label>
                            <select ref={bookingTimeRef} aria-label="Time" id="res-time " value={bookingTime} onChange={onBookingTimeChange} required>
                                {props.availableTimes.map((time) => <option key={time}>{time}</option>)}
                            </select>
                            <span className="error" id="res-time-error" aria-live="polite"></span>


                            <label htmlFor="guests">Number of guests</label>
                            <input ref={guestsRef} aria-label="Guests" type="number" value={guests} placeholder="1" min="1" max="10" id="guests" onChange={NoOfGuests} />
                            <span className="error" id="res-guest-error" aria-live="polite"></span>

                            <label htmlFor="occasion">Occasion</label>
                            <select ref={occasionRef} aria-label="occasion" id="occasion" value={occasion} onChange={onOccasionChange} required>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            <span className="error" id="res-occasion-error" aria-live="polite"></span>

                            <Button aria-label="On Click" onClick={handleFormSubmit}>Reserve Table</Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}

export default BookingForm;