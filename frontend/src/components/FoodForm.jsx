import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { createFood } from '../features/foods/foodSlice'

function FoodForm() {

  const [formData, setfromData] = useState({
    foodName: "",
    foodWeight: "",
    courseType: "",
  })
  const {foodName, foodWeight, courseType} = formData;

  const dispatch = useDispatch()

  const onChange = (e) => {
    setfromData((prevState)=> ({
        ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // dispatch(createFood( formData ))
    
    await dispatch(createFood( formData )).then((result)=>{
      console.log(result);
    })

    setfromData({
        foodName: "",
        foodWeight: "",
        courseType: "",
    })
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
              <Form className="mb-3" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="foodNameWhat">
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control type="text" placeholder="pasta al sugo" name="foodName" value={foodName} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="foodWeightWhat">
                    <Form.Label>Food Name</Form.Label>
                    <Form.Control type="number" placeholder="100 gr" name="foodWeight" value={foodWeight} onChange={onChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="foodNameWhat">
                    <Form.Label>Pasto</Form.Label>
                    <Form.Control type="text" placeholder="pranzo cena merenda" name="courseType" value={courseType} onChange={onChange} />
                </Form.Group>

                <Button variant="primary" type="submit" style={{width:"100%"}}>
                    Submit
                </Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FoodForm
