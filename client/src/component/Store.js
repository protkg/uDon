import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Carousel, Card, Row } from "react-bootstrap"

const Store = () => {


    const [Finalurl, setFinalurl] = useState('')
    const [StoreData, setStoreData] = useState([])

    const ClientId = "_Ogd0KPXSTi_VNh356wC";
    const ClientSecret = "KoX2DSVdV4";



    const headerdata = {
        'X-Naver-Client-Id' : ClientId,
        'X-Naver-Client-Secret' : ClientSecret
    }
    

    useEffect( () => {
        
        const url = "/naver/v1/search/local.json?";
        let params = encodeURI('query') + '=' + '서울 음식점';
        params += '&' + encodeURI('display') + '=' + '4';
        params += '&' + encodeURI('start') + '=' + '1';
        params += '&' + encodeURI('soft') + '=' + 'comment';
    
        const Finalsurl = url + params;
    
        //setFinalurl(Finalsurl)


        Axios( {
           method : 'get' ,
           url : Finalsurl,
           headers : headerdata,
           withCredentials : true

        } ).then( (res) => {
        setStoreData(res.data.items)
        })


    } ,[] )



    return (
        <div>
            <br/>
            <h3>네이버 지역 API</h3>

            <Row md ={4} style = {{ width : '100%' }} >
             {StoreData.map( (data) => {
             return   (
             <>

                 <Card>
                        {/* <Card.Img variant="top" src="./../img/pexels-lisa-1279330.jpg" /> */}
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                            {data.link}<br/>
                            {data.address}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{data.category}</small>
                        </Card.Footer>
                    </Card>

             
             </>

             )
            }

            )}

            </Row>            

        </div>
    )
}

export default Store




