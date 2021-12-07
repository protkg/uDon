import { useState, useEffect } from 'react'
import Axios from 'axios'


const Store = () => {


    const [Finalurl, setFinalurl] = useState('')

    const ClientId = "_Ogd0KPXSTi_VNh356wC";
    const ClientSecret = "KoX2DSVdV4";

    const headerdata = {
        'X-Naver-Client-Id' : ClientId,
        'X-Naver-Client-Secret' : ClientSecret
    }
    

    useEffect( () => {
        
        console.log("실행됌???????????????????????")

        const url = "https://openapi.naver.com/v1/search/local.json?";
        let params = encodeURI('query') + '=' + '서울맛집';
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

        } ).then( (res) => console.log(res) )


    }  )



    return (
        <div>

            <h1>{Finalurl}</h1>


        </div>
    )
}

export default Store




