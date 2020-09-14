import React from 'react';
import "./Home.css";
import Product from './Product.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className='home'> 
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
                />
                
                <Row className="home__row">
                    <Col lg md sm="auto" className="home__border">
                    <Product
                        id="123456781" 
                        title="OnePlus 7T Pro (Haze Blue, 8GB RAM,4085mAH Battery)"
                        price={47999}
                        image="https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SL1500_.jpg"
                        rating={5}
                    />
                    </Col>

                    <Col lg md sm="auto" className="home__border">
                    <Product
                        id="123456782" 
                        title="Apple iPhone 11 (64GB, 4000 mAH Battery) - Black"
                        price={63999}
                        image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
                        rating={4}
                    />
                    </Col>

                    <Col lg md sm="auto" className="home__border"> 
                    <Product
                        id="123456784"
                        title="OPPO A5 2020 (Dazzling White, 3GB RAM, 64GB Storage)"
                        price={10990}
                        image="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SX679_.jpg"
                        rating={4}
                    />
                    </Col>
                </Row>

                <Row className="home__row"> 
                    <Col lg md sm="auto" className="home__border">
                    <Product
                        id="123456785" 
                        title="Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED TV 43X7400H (Black) (2020 Model)"
                        price={52999}
                        image="https://images-na.ssl-images-amazon.com/images/I/81bijHipk4L._SX679_.jpg"
                        rating={5}
                    />
                    </Col>

                    <Col lg md sm="auto" className="home__border">
                    <Product
                        id="123456786"
                        title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV UA55TU8000KXXL (Black) (2020 Model)"
                        price={71000}
                        image="https://images-na.ssl-images-amazon.com/images/I/917QAUQorDL._SX679_.jpg"
                        rating={4}
                    />
                    </Col>
                </Row>
                <Row className="home__row">
                    <Col lg md sm="auto" className="home__border">
                    <Product 
                        id="123456787"
                        title="Bose Quiet Comfort 35 II Wireless Headphone (Silver)"
                        price={29363}
                        image="https://images-na.ssl-images-amazon.com/images/I/71%2BiQZU-dVL._SY450_.jpg"
                        rating={5}
                    />
                    </Col>

                    <Col lg md sm="auto" className="home__border">
                    <Product 
                        id="123456788"
                        title="JBL T460BT Extra Bass Wireless On-Ear Headphones (Black)"
                        price={2999}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ynIMjwgwL._SY450_.jpg"
                        rating={4}
                    />
                    </Col>

                    <Col lg md sm="auto" className="home__border"> 
                    <Product 
                        id="123456789"
                        title="Skullcandy Hesh2 Wireless Headphone with Mic (Black)"
                        price={5499}
                        image="https://images-na.ssl-images-amazon.com/images/I/71CavBXpBTL._SY450_.jpg"
                        rating={4}
                    />
                    </Col>
                </Row>

                
            </div>
        </div>
    )
}

export default Home
