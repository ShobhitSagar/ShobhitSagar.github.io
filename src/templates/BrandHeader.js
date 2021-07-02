import React from "react";
import "./styles/BrandHeader.css";
import { SiCodeigniter } from 'react-icons/si'

function BrandHeader() {
  return (
        <div id="brand-header">
            <SiCodeigniter id='SiCodeigniter' size={150}/>
            <div id='brand-title'>
                <strong>Shobhit Sagar</strong>
                <sub>DEVELOPER</sub>
            </div>
        </div>
  );
}

export default BrandHeader;
