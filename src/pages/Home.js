import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import './Home.css'
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import MapView from "../components/MapView";

const Home = () => {

    const stateData = useSelector((state) => {
        return state.form
    })

    const [data, setData] = useState(stateData);
    const [isAcending, setIsAcending] = useState({
        type: '',
        acending: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const EditContact = (id) => {
        navigate(({
            pathname: '/addcontact',
            search: '?id=' + id,
        }))
    }

    const tableHeaders = ['FirstName', 'LastName', 'Email', 'PhoneNumber', 'Address', 'City', 'State', 'Country', 'PostalCode', 'Action'];

    const Sort = (type) => {
        switch (type) {
            case 'FirstName':
                const firstNameAscending = [...data].sort((a, b) => a.firstName > b.firstName ? 1 : -1,);
                const firstNameDescending = [...data].sort((a, b) => b.firstName > a.firstName ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(firstNameDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(firstNameAscending);
                }
                break;
            case 'LastName':
                const lastNameAscending = [...data].sort((a, b) => a.lastName > b.lastName ? 1 : -1,);
                const lastNameDescending = [...data].sort((a, b) => b.lastName > a.lastName ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(lastNameDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(lastNameAscending);
                }
                break;
            case 'Email':
                const emailAscending = [...data].sort((a, b) => a.email > b.email ? 1 : -1,);
                const emailDescending = [...data].sort((a, b) => b.email > a.email ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(emailDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(emailAscending);
                }
                break;
            case 'PhoneNumber':
                const phoneNumberAscending = [...data].sort((a, b) => a.phoneNumber > b.phoneNumber ? 1 : -1,);
                const phoneNumberDescending = [...data].sort((a, b) => b.phoneNumber > a.phoneNumber ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(phoneNumberDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(phoneNumberAscending);
                }
                break;
            case 'Address':
                const addressAscending = [...data].sort((a, b) => a.address > b.address ? 1 : -1,);
                const addressDescending = [...data].sort((a, b) => b.address > a.address ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(addressDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(addressAscending);
                }
                break;
            case 'City':
                const cityAscending = [...data].sort((a, b) => a.city > b.city ? 1 : -1,);
                const cityDescending = [...data].sort((a, b) => b.city > a.city ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(cityDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(cityAscending);
                }
                break;
            case 'State':
                const stateAscending = [...data].sort((a, b) => a.state > b.state ? 1 : -1,);
                const stateDescending = [...data].sort((a, b) => b.state > a.state ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(stateDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(stateAscending);
                }
                break;
            case 'Country':
                const countryAscending = [...data].sort((a, b) => a.country > b.country ? 1 : -1,);
                const countryDescending = [...data].sort((a, b) => b.country > a.country ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(countryDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(countryAscending);
                }
                break;
            case 'PostalCode':
                const postalCodeAscending = [...data].sort((a, b) => a.postalCode > b.postalCode ? 1 : -1,);
                const postalCodeDescending = [...data].sort((a, b) => b.postalCode > a.postalCode ? 1 : -1,);
                if (isAcending.type === type && isAcending.acending) {
                    setIsAcending({
                        type: type,
                        acending: false
                    })
                    setData(postalCodeDescending)
                } else {
                    setIsAcending({
                        type: type,
                        acending: true
                    })
                    setData(postalCodeAscending);
                }
                break;

            default:
                break;
        }
    }

    return <div className="home-base">
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    {tableHeaders.map((item) => <th >
                        <span className="table-header">
                            {item}
                            {item !== 'Action' && <span className="sort-icon" onClick={() => Sort(item)}>
                                <FontAwesomeIcon icon={faSort} />
                            </span>}
                        </span>
                    </th>)}
                </tr>
            </thead>
            {data.map((item) => {
                return (
                    <tbody key={item.id}>
                        <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.address}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.country}</td>
                            <td>{item.postalCode}</td>
                            <td>
                                <Button className="edit-btn" onClick={() => EditContact(item.id)} >Edit</Button>
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
        <MapView />
    </div>
}

export default Home;