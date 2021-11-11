import React from 'react'
import { Form, FormControl,  Button} from "react-bootstrap";

const Search = (props) => {
    return (
        <>
            {props.display == 'd-flex' ? props.display : ('')}
            <Form method="GET" className={props.display}>
                <FormControl
                type="text"
                placeholder="إبحث عن صورة"
                name="searchimg"
                style={{fontSize: '20px'}}
                className="m-auto"
                />
                {props.position == 'center' ? (<br/>) : ('')}
                <Button className="m-1 btn" type="submit" style={{fontSize: '20px'}} variant="light"><b>بحث</b></Button>
            </Form>
        </>
    )
}

export default Search
