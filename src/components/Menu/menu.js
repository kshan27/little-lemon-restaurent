
import './menu.css';
import {menu_items} from './foods.js';
import Button from '../Button/button';
import { Card, CardBody, CardFooter } from '@chakra-ui/card';
import 'components/Specials.css';

export default function Menu() {
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    return (
        <div className='main'>
            {
                Object.entries(menu_items).map(([category, items]) => {
                    return (
                    <section class="menu-category">

                        {/* <div style={{display: "flex", justifyContent: "start", marginLeft: "120px", marginRight: "180px", marginBottom: "20px", marginTop: "20px"}}>
                        </div> */}
                        <h1> {capitalize(category)} </h1>

                        <div class="menu-grid">
                                {
                                    items.map((item, index) => {
                                        return (
                                            <MenuItem key={item.idMeal} item={item} />
                                        )
                                    })
                                }
                        </div>
                    </section>
                    )
                })
            }
        </div>
    )
}

function MenuItem({item}) {
    return (
        <Card maxW='sm' style={{overflow: 'hidden', backgroundColor: '#EDEFEE'}} className="menu-item">
        <CardBody>
            <img
                style={{height:"8.5rem", width: "100%", objectFit: 'cover', marginBottom: '0.9375rem'}}
                src={`${item.strMealThumb}`}
                alt={item.strMeal}
                borderRadius='lg'
            />
            {/* <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", marginTop: "5px", marginBottom: "5px" }} > */}
            <div class="item-details">
                <h2>{item.strMeal}</h2>
                <span style={{color: '#EE9972', fontWeight:'bold', justifySelf: 'center', alignSelf: 'center'}}>
                    $12.99
                </span>
            </div>
            <p>
                {item.strDesc}
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
    )
}