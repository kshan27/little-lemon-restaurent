import greeksalad from 'assets/greeksalad.jpg';
import lemondessert from 'assets/lemon-lasagna.png';
import bruschetta from 'assets/bruschetta.jpg';
import Button from './Button/button';
import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import { Link } from "react-router-dom";
import 'components/Specials.css';

function Specials() {
    return (
        <section >
            <div style={{display: "flex", justifyContent: "start", marginLeft: "120px", marginRight: "180px", marginBottom: "20px", marginTop: "20px"}}>
                <h2>This week specials!</h2>
                <div style={{flexGrow: 1, maxWidth: "60%"}}>
                </div>
                <div className="btn-container">
                    <Link className="button-primary btn btn-a" to="/order">
                            Online Menu
                    </Link>
                </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center", marginLeft: "120px", marginRight: "120px" }}>
                <div style={{flex: 2}}>
                <Card maxW='sm' style={{overflow: 'hidden', backgroundColor: '#EDEFEE'}}>
                    <CardBody>
                        <img
                            style={{height:"12.5rem", width: "100%", objectFit: 'cover', marginBottom: '0.9375rem'}}
                            src={greeksalad}
                            alt='GreekSalad'
                            borderRadius='lg'
                        />
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "5px", marginBottom: "5px" }} >
                            <h2>GreekSalad</h2>
                            <span style={{color: '#EE9972', fontWeight:'bold', justifySelf: 'center', alignSelf: 'center'}}>
                                $12.99
                            </span>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>

                    </CardBody>

                    <CardFooter>
                        <Button>
                            Order Online
                            <span style={{margin: "5px"}}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                            </span>
                        </Button>
                    </CardFooter>
                </Card>
                </div>
                <div style={{flex: 2}}>
                <Card maxW='sm' style={{overflow: 'hidden', backgroundColor: '#EDEFEE'}}>
                    <CardBody>
                        <img
                            style={{height:"12.5rem", width: "100%", objectFit: 'cover', marginBottom: '0.9375rem'}}
                            src={lemondessert}
                            alt='LemonDessert'
                            borderRadius='lg'
                      />
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "5px", marginBottom: "5px" }} >
                            <h2>LemonDessert</h2>
                            <span style={{color: '#EE9972', fontWeight:'bold', justifySelf: 'center', alignSelf: 'center'}}>
                                $10.99
                            </span>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>

                    </CardBody>

                    <CardFooter>
                        <Button>
                            Order Online
                            <span style={{margin: "5px"}}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                            </span>
                        </Button>
                    </CardFooter>
                </Card>
                </div>
                <div style={{flex: 2}}>
                <Card maxW='sm' style={{overflow: 'hidden', backgroundColor: '#EDEFEE'}}>
                    <CardBody>
                        <img
                            style={{height:"12.5rem", width: "100%", objectFit: 'cover', marginBottom: '0.9375rem'}}
                            src={bruschetta}
                            alt='Bruschetta'
                            borderRadius='lg'
                        />
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "5px", marginBottom: "5px" }} >
                            <h2>Bruschetta</h2>
                            <span style={{color: '#EE9972', fontWeight:'bold', justifySelf: 'center', alignSelf: 'center'}}>
                                $8.99
                            </span>
                        </div>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            garnished.
                        </p>
                    </CardBody>

                    <CardFooter>
                        <Button>
                            Order Online
                            <span style={{margin: "5px"}}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" class="svg-inline--fa fa-truck " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                            </span>
                        </Button>
                    </CardFooter>
                </Card>
                </div>
            </div>
        </section>
    )
}

export default Specials;