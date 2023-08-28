import './Home.css'
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const PuntosVerdes = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos) {
        const crd = pos.coords;

        console.log("Tu ubicación actual es:");
        console.log(`Latitud : ${crd.latitude}`);
        console.log(`Longitud: ${crd.longitude}`);
        console.log(`Más o menos ${crd.accuracy} metros.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    return(
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13133.343686924292!2d-58.4287612!3d-34.6209504!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1693230312933!5m2!1ses!2sar" width="600" height="450" allowFullScreen=""  loading="lazy" className='centrarJust'></iframe>
        </>
    )
}


export default PuntosVerdes