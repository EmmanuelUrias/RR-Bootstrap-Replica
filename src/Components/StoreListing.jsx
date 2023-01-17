import Card from 'react-bootstrap/card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function StoreListing () {

    return(
        <div>
         <Card style={{backgroundColor: '#d3edd7'}}>
           <Card.Img style={{marginLeft: '1000px', height: '250px', width: '450px', objectFit: 'cover'}} src="./homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.webp" alt="Card image" />
              <Card.ImgOverlay>
               <Card.Title style={{color: 'black', textAlign: 'left', marginLeft: '150px', marginTop: '40px', fontSize: 'xxx-large'}}>Order groceries for delivery<br/> or pickup today</Card.Title>
             <Card.Text style={{color: '#383838', textAlign: 'left', marginLeft: '150px', fontSize: 'medium'}}>
                Whatever you want from local stores, brought right to your door.
                </Card.Text>
          </Card.ImgOverlay>
         </Card>

         <h2>Browse stores in Houston</h2>

<Container style={{ marginTop: "40px", textAlign: "center" }} >
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row lg={3}>
            <Col xs=".5" >
                <Image src="./download.jpeg" roundedCircle />
                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                <p>Delivery * Pickup</p>
            </Col>
            <Col>
            <Image src="./brand.gif" roundedCircle />

                <h5 style={{ fontWeight: "bold" }}>Smith's</h5>
                <p>Delivery * Pickup</p>
            </Col>
            <Col xs=".5">
                <Image src="./download.png" roundedCircle />
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Row lg={3}>
            <Col xs=".5">
                <Image src="./download.png" roundedCircle />
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
            <Col xs=".5" >
                <Image style={{height: '180px'}} src="./Kroger_logo_(1961-2019).svg.png" roundedCircle />
                <h5 style={{ fontWeight: "bold"}}>Kroger</h5>
                <p>Delivery</p>
            </Col>
            <Col xs=".5" >
                <Image src="./downloadAlbert.png" roundedCircle />
                <h5 style={{ fontWeight: "bold"}}>Albertsons</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Row lg={3}>
              <Col xs=".5" >
                <Image src="./downloadElSuper.png" roundedCircle />
                <h5 style={{ fontWeight: "bold"}}>El Super</h5>
                <p>Delivery * Pickup</p>
            </Col>
            <Col xs=".5" >
                <Image src="./VonsLogo.png" roundedCircle />
                <h5 style={{ fontWeight: "bold"}}>Vons</h5>
                <p>Delivery * Pickup</p>
            </Col>              <Col xs=".5" >
                <Image src="./CVSPharma.png" roundedCircle />
                <h5 style={{ fontWeight: "bold"}}>CVS Pharmacy</h5>
                <p>Pickup</p>
            </Col>
        </Row>
    </Row>
    </Container>
        </div>
    )
}

export default StoreListing