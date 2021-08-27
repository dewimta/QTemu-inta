import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
// import { useDispatch } from 'react-redux'

export default function CreateMeetForm(props) {
    const[date, setDate] = useState(new Date())
    const[name, setName] = useState("")
    const[org, setOrg] = useState("")
    const[desc, setDesc] = useState("")

    // const dispatch = useDispatch();

    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeOrg = (e) => {
        setOrg(e.target.value)
    }

    const changeDesc = (e) => {
        setDesc(e.target.value)
    }

    const subbbmit = (e) => {
        e.preventDefault()
        // dispatch
        setDate(new Date())
        setName("")
        setOrg("")
        setDesc("")
    }

    return (
        <div>
            <br />
            <Form onSubmit={subbbmit}>         
                <Form.Group className="mb-2">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" value={date} onChange={changeDate} placeholder="Enter date" />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={changeName} placeholder="Enter your event name" />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Organizer</Form.Label>
                    <Form.Control type="text" value={org} onChange={changeOrg} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={changeDesc} as="textarea" rows={3} placeholder="Enter description" />
                </Form.Group>
                <br />
                <Button type="submit">submit</Button>
            </Form>
        </div>
    )
}
