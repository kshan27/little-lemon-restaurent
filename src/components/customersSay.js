import { Card, CardHeader,CardBody } from '@chakra-ui/card';
import person1 from 'assets/person1.jpg';
import person2 from 'assets/person2.jpg';
import person3 from 'assets/person3.jpg';
import person4 from 'assets/person4.jpg';

function CustomersSay() {
    return (
        <div style={{ backgroundColor: "#495E57", paddingBottom: "20px"}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h2 style={{marginLeft: "120px", marginRight: "120px", marginTop: "40px",marginBlock: "40px", color: "white"}}>Testimonials </h2>   
            </div>
            <div style={{display:"flex", flexWrap: "wrap", marginLeft: "120px", marginRight: "120px", gap: "10px"}}>
                    <div style={{flex: 2}}>
                    <Card>
                        <CardHeader>
                            <div style={{color: '#F4CE14', fontSize: '24px'}}>★★★★★</div>
                           <img src={person1} alt="customer1" style={{width: "420px", height: "200px", border: "1px solid green", borderRadius: '16px'}}/>
                        </CardHeader>
                        <CardBody>
                            <p> This is true to good experience and dinner. Really amazing.</p>
                        </CardBody>
                    </Card>
                    </div>
                    <div style={{flex: 2}}>
                    <Card>
                        <CardHeader>
                        <div style={{color: '#F4CE14', fontSize: '24px'}}>★★★★★</div>   
                        <img src={person2} alt="customer2" style={{width: "300px", height: "200px",  border: "1px solid green", borderRadius: '16px'}}/>
                        </CardHeader>
                        <CardBody>
                            <p>View a summary of all your customers over the last month.</p>
                        </CardBody>
                    </Card>
                    </div>
                    <div style={{flex: 2}}>
                    <Card>
                        <CardHeader>
                        <div style={{color: '#F4CE14', fontSize: '24px'}}>★★★★★</div>
                        <img src={person3} alt="customer3" style={{width: "300px", height: "200px",  border: "1px solid green", borderRadius: '16px'}}/>
                        </CardHeader>
                        <CardBody>
                            <p>View a summary of all your customers over the last month.</p>
                        </CardBody>
                       
                    </Card>
                    </div>
                    <div style={{flex: 2}}>
                    <Card>
                        <CardHeader>
                        <div style={{color: '#F4CE14', fontSize: '24px'}} >★★★★★</div>
                        <img src={person4} alt="customer4" style={{width: "300px", height: "200px",  border: "1px solid green", borderRadius: '16px'}}/>
                        </CardHeader>
                        <CardBody>
                            <p>View a summary of all your customers over the last month.</p>
                        </CardBody>
                       
                    </Card>
                    </div>
            </div>
        </div>
    );
}

export default CustomersSay;