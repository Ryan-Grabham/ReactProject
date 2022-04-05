import React, {useState, useEffect} from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap'
import Loader from '../Components/Loader'


function AddProductScreen() {

    const submitHandler = async () => {
        SetPosting(true)
        var input = document.getElementById('upload')
        var formData = new FormData(input)
        var data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })

        let response = await fetch("https://localhost:7214/api/products",
        {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        console.log(response)


    }

    return <div>

        <h1 className="py-3 text-center">Add Product</h1>
        <FormContainer>

            <Form Id="upload">

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Product Name..."
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Product Price (£)..."
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Product Description..."
                        onChange={(e) => SetDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="image" className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>

                <Button
                    variant="primary"
                    className="w-100"
                    onClick={submitHandler}
                >  {posting ? <Loader /> : (<div>Add Product</div>)}   </Button>
            </Form>



        </FormContainer>


    </div>;
}

export default AddProductScreen;