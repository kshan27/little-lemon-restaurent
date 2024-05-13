import 'App.css';
import './booking.css';
import Button from './Button/button';
import { useState, useRef } from 'react';
import { Card, CardHeader, CardBody } from '@chakra-ui/card';
import {
    AbsoluteCenter,
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Container,
    Divider,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    RadioGroup,
    Radio,
    HStack,
    Select,
    Stack
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

import { useNavigate } from 'react-router-dom';

const seatingOptions = ['Indoors', 'Outdoors'];

function BookingForm(props) {
    const navigate = useNavigate();

    const navigateToConfirmPage = () => {
        navigate('/confirm');
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState("");
    const [seating, setSeating] = useState(seatingOptions[0]);

    const bookingDateRef = useRef(new Date());
    const bookingTimeRef = useRef();
    const guestsRef = useRef();
    const occasionRef = useRef("");

    const onBookingDateChange = (e) => {
        const bookingDate = e.target.value;
        setBookingDate(bookingDate);
    }

    const onBookingTimeChange = (e) => {
        const bookingTime = e.target.value;
        setBookingTime(bookingTime);
    }

    const NoOfGuests = (e) => {
        const guests = e.target.value;
        setGuests(guests);
    }

    const onOccasionChange = (e) => {
        const occasion = e.target.value;
        setOccasion(occasion);
    }

    const validateBookingTimeError = () => {
        const booking_error = document.getElementById("res-time-error");
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
            <Container maxW='container.md'>
                <Card variant="outline" size="lg">
                    <CardHeader>
                        <Heading as='h3' size='lg'>
                            Reserve a Table
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <form
                            onSubmit={(e) => handleFormSubmit(e)}
                            style={{
                                display: "grid",
                                gap: "20px"
                            }} >
                            <Stack spacing='4'>
                                <FormControl as='fieldset'>
                                    <FormLabel as='legend'>Seating preferences</FormLabel>
                                    <RadioGroup defaultValue='indoor'>
                                        <HStack spacing='24px'>
                                            <Radio value='indoor'>Indoor Seating</Radio>
                                            <Radio value='outdoor'>Outdoor</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </FormControl>
                                <HStack >
                                    <FormControl>
                                        <FormLabel>Choose Date</FormLabel>
                                        <Input ref={bookingDateRef} aria-label='Date' type="date" id="res-date" value={bookingDate} onChange={onBookingDateChange} required />
                                        <FormHelperText>Select reservation date</FormHelperText>
                                        <span className="error" id="res-date-error" aria-live="polite"></span>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Choose Time</FormLabel>
                                        <Select placeholder='Select option' ref={bookingTimeRef} value={bookingTime} onChange={onBookingTimeChange} required>
                                            {props.availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                                        </Select>
                                        <FormHelperText>Select reservation Time</FormHelperText>
                                        <span className="error" id="res-time-error" aria-live="polite"></span>
                                    </FormControl>
                                </HStack>
                                <HStack >
                                    <FormControl>
                                        <FormLabel>Number of guests</FormLabel>
                                        <Input ref={guestsRef} aria-label="Guests" type="number" value={guests} placeholder="1" min="1" max="10" id="guests" onChange={NoOfGuests} />
                                        <FormHelperText>Enter number</FormHelperText>
                                        <span className="error" id="res-guest-error" aria-live="polite"></span>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Occasion</FormLabel>
                                        <Select ref={occasionRef} aria-label="occasion" id="occasion" value={occasion} onChange={onOccasionChange} required>
                                            <option>Birthday</option>
                                            <option>Anniversary</option>
                                        </Select>
                                        <FormHelperText>Select Number of guests</FormHelperText>
                                        <span className="error" id="res-occasion-error" aria-live="polite"></span>
                                    </FormControl>
                                </HStack>
                                <Box position='relative' padding='10'>
                                    <Divider />
                                    <AbsoluteCenter bg='white' px='4'>
                                        <strong> Contact Details </strong>
                                    </AbsoluteCenter>
                                </Box>
                                <HStack >
                                    <FormControl isRequired>
                                        <FormLabel>First name</FormLabel>
                                        <Input aria-label='first name' type="text" id="firstname" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input aria-label='last name' type="text" id="lastname" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </FormControl>
                                </HStack>
                                <HStack >
                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <Input aria-label='Email' type="email" id="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Phone number</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement pointerEvents='none'>
                                                <PhoneIcon color='gray.300' />
                                            </InputLeftElement>
                                            <Input type='tel' placeholder='Phone number' aria-label='Phone number' id="phonenumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                        </InputGroup>
                                    </FormControl>
                                </HStack>
                                <Button aria-label="On Click" onClick={handleFormSubmit}>Reserve a Table</Button>
                            </Stack>
                        </form>
                    </CardBody>
                </Card>
            </Container>
        </>
    );
}

export default BookingForm;