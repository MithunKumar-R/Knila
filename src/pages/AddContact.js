import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import './AddContact.css'
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, updateForm } from "../redux/store";
import { useNavigate, useSearchParams } from "react-router-dom";


const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
        .required("*"),
    lastName: Yup.string()
        .required("*"),
    email: Yup.string()
        .required("*")
        .email("Please enter the valid email."),
    phoneNumber: Yup.string()
        .required("*")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Invalid phone number"
        ),
    address: Yup.string()
        .required("*"),
    city: Yup.string()
        .required("*"),
    state: Yup.string()
        .required("*"),
    country: Yup.string()
        .required("*"),
    postalCode: Yup.string()
        .required("*")
})

const AddContact = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => {
        return state.form
    })

    const [searchParams] = useSearchParams();
    let queryString = searchParams.get('id');

    const [initialValue, setInitialValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: ''
    })

    useEffect(() => {
        if (queryString) {
            let filteredData = data.filter((filteredContact) => filteredContact.id === queryString).map((item) => {
                return {
                    id: item.id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    email: item.email,
                    phoneNumber: item.phoneNumber,
                    address: item.address,
                    city: item.city,
                    state: item.state,
                    country: item.country,
                    postalCode: item.postalCode
                }
            })
            setInitialValue(filteredData[0]);
        }
    }, [queryString, data])

    const handleFirstNameChange = (e) => {
        let temp = { ...initialValue };
        temp.firstName = e.target.value;
        setInitialValue(temp);
    }

    const handleLastNameChange = (e) => {
        let temp = { ...initialValue };
        temp.lastName = e.target.value;
        setInitialValue(temp);
    }

    const handleEmailChange = (e) => {
        let temp = { ...initialValue };
        temp.email = e.target.value;
        setInitialValue(temp);
    }

    const handlePhoneNumberChange = (e) => {
        let temp = { ...initialValue };
        temp.phoneNumber = e.target.value;
        setInitialValue(temp);
    }

    const handleAddressChange = (e) => {
        let temp = { ...initialValue };
        temp.address = e.target.value;
        setInitialValue(temp);
    }

    const handleCityChange = (e) => {
        let temp = { ...initialValue };
        temp.city = e.target.value;
        setInitialValue(temp);
    }

    const handleStateChange = (e) => {
        let temp = { ...initialValue };
        temp.state = e.target.value;
        setInitialValue(temp);
    }

    const handleCountryChange = (e) => {
        let temp = { ...initialValue };
        temp.country = e.target.value;
        setInitialValue(temp);
    }

    const handlePostalCodeChange = (e) => {
        let temp = { ...initialValue };
        temp.postalCode = e.target.value;
        setInitialValue(temp);
    }

    const updateContact = (values) => {
        dispatch(updateForm(values));
    }

    return <div className="add-base">
        <Formik
            initialValues={initialValue}
            validationSchema={ContactSchema}
            onSubmit={values => {
                if (queryString) {
                    updateContact(values);
                } else {
                    dispatch(submitForm(values));
                }
                navigate('/');
            }}
            enableReinitialize>
            {({ errors, touched }) => (
                <Form>
                    <Row>
                        <Col md='3' xs='1'>

                        </Col>
                        <Col md='6' xs='10' >
                            <Row>
                                <Col xs='12' className="form-header">
                                    Enter your contact details
                                </Col>
                            </Row>
                            <Row className="form-base">
                                <Col xs='11'>
                                    <input placeholder="First Name" name="firstName" value={initialValue.firstName} onChange={handleFirstNameChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.firstName && touched.firstName &&
                                        (<span className="validation ">{errors.firstName}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <input placeholder="Last Name" name="lastName" value={initialValue.lastName} onChange={handleLastNameChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.lastName && touched.lastName &&
                                        (<span className="validation ">{errors.lastName}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <input placeholder="Email" name="email" value={initialValue.email} onChange={handleEmailChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.email && touched.email &&
                                        (<span className="validation ">{errors.email}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <input placeholder="Phone Number" name="phoneNumber" value={initialValue.phoneNumber} onChange={handlePhoneNumberChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.phoneNumber && touched.phoneNumber &&
                                        (<span className="validation ">{errors.phoneNumber}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <textarea placeholder="Address" name="address" value={initialValue.address} onChange={handleAddressChange} className="adr-input" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.address && touched.address &&
                                        (<span className="validation ">{errors.address}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <input placeholder="City" name="city" value={initialValue.city} onChange={handleCityChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.city && touched.city &&
                                        (<span className="validation ">{errors.city}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <input placeholder="State" name="state" value={initialValue.state} onChange={handleStateChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.state && touched.state &&
                                        (<span className="validation ">{errors.state}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <input placeholder="Country" name="country" value={initialValue.country} onChange={handleCountryChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.country && touched.country &&
                                        (<span className="validation ">{errors.country}</span>)
                                    }
                                </Col>
                                <Col xs='11'>
                                    <input placeholder="Postal Code" name="postalCode" value={initialValue.postalCode} onChange={handlePostalCodeChange} className="input-base" />
                                </Col>
                                <Col xs='1'>
                                    {
                                        errors.postalCode && touched.postalCode &&
                                        (<span className="validation ">{errors.postalCode}</span>)
                                    }
                                </Col>
                                <Col xs='12' className="btn-base">
                                    <Button type="submit" className="submit-btn" >{queryString ? 'Update Contact' : 'Submit'}</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md='3' xs='1'>

                        </Col>
                    </Row>
                </Form>
            )}
        </Formik>
    </div>
}

export default AddContact;
