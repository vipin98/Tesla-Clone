import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
            title="Model s" 
            discription="Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftButton="custom-order"
            rightButton="Existing invetory"
            />
            <Section 
            title="Model Y" 
            discription="Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftButton="custom-order"
            rightButton="Existing invetory"
            />
             <Section 
            title="Model 3" 
            discription="Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftButton="custom-order"
            rightButton="Existing invetory"
            />
            <Section 
            title="Model X" 
            discription="Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftButton="custom-order"
            rightButton="Existing invetory"
            />
             <Section 
            title="Lowest Cost Solar Panel in America" 
            discription="Money-back gaurantee"
            backgroundImg="solar-panel.jpg"
            leftButton="Order-now"
            rightButton="Learn more"
            />
             <Section 
            title="Solar for New Roofs" 
            discription="Solor Roof Coast Less Than a New Roof"
            backgroundImg="solar-roof.jpg"
            leftButton="Order-now"
            rightButton="Learn more"
            />
             <Section 
            title="Accessories" 
            discription=""
            backgroundImg="accessories.jpg"
            leftButton="Shop now"
           
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`
