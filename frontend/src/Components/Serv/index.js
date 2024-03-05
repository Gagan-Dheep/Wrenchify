import React from 'react';
import './service.css';
import shield from '../../Images/shield.png';
import oil from '../../Images/oil.webp'
import brake from '../../Images/brake.jpg'
import tire from '../../Images/Tire.jpg'
import Engine from '../../Images/engine.jpg'
import Suspension from '../../Images/suspension.png'
import Battery from '../../Images/battery.jpg'
import Diagnostic from '../../Images/diagnostic.png'
import Fuel from '../../Images/fuel.jpg'
import service from '../../Images/servi.webp'
import location from '../../Images/location.jpg'
import call from '../../Images/call.webp'
import vehicle from '../../Images/vehicle.jpg'
import bg from '../../Images/bg.jpg'
function Serv() {
  return (
    <div>
  
      <div className='main'>
        <h1>Services</h1>
      </div>
      <div className="service-container">
    <div className='service'>
        <div id='head'>
            <h1>Assurances:</h1>
        </div>
        <div id='para'><p>"Explore the Range of Guaranteed Services Commonly Offered Through Our Extensive Network of Affiliated Garages." </p></div>
        <div className='shield'>
            <div className="image-with-text">
                <img src={shield} alt=" " className="shield-img" />
                <p>Service Quality Guarantee</p>
            </div>
            <div className="image-with-text">
                <img src={shield} alt=" " className="shield-img" />
                <p>Customer Satisfaction Guarantee</p>
            </div>
            <div className="image-with-text">
                <img src={shield} alt=" " className="shield-img" />
                <p>Transparent Pricing Guarantee</p>
            </div>
        </div>
    </div>
    <div className='enhancement'>
      
        <div className='box'>
          
            {/* Content of the box */}
        </div>
    </div>


      </div>
      <div class="circle-container">
      <h1>Services We Offer:</h1>
    <div class="circle-row">
      <div class="circle">
        <img src={oil} alt="Image 1"/>
        <div class="circle-description"> Oil Change</div>
      </div>
      <div class="circle">
        <img src={brake} alt="Image 2"/>
        <div class="circle-description">Brake repair</div>
      </div>
      <div class="circle">
        <img src={tire} alt="Image 3"/>
        <div class="circle-description">Tire Service</div>
      </div>
      <div class="circle">
        <img src={Engine} alt="Image 4"/>
        <div class="circle-description">Engine Tune-Ups</div>
      </div>
    </div>
    <div class="circle-row">
      <div class="circle">
        <img src={Suspension} alt="Image 5"/>
        <div class="circle-description">Suspension Repair</div>
      </div>
      <div class="circle">
        <img src={Battery} alt="Image 6"/>
        <div class="circle-description">Battery Service</div>
      </div>
      <div class="circle">
        <img src={Diagnostic} alt="Image 7"/>
        <div class="circle-description">Diagnostic Service</div>
      </div>
      <div class="circle">
        <img src={Fuel} alt="Image 8"/>
        <div class="circle-description">Fuel Maintainence</div>
      </div>
    </div>
    <p>and more....</p>
  </div>
<div className='Why'><h1>Why Choose WrenchiFy!?</h1></div>
  <div class="flex-container">
 
    <div class="rectangle-box">
      <div class="circlular-container">
        <div class="circlular-image">
          <img src={service} alt="Image 1"/>
        </div>
      </div>
      <div class="description-text">
      <h1> 24/7 on-spot Service</h1>
      <p>Our services are available round-the-clock, ensuring assistance whenever you need it
      </p>
      </div>
    </div>

    <div class="rectangle-box">
      <div class="circlular-container">
        <div class="circlular-image">
          <img src={location} alt="Image 2"/>
        </div>
      </div>
      <div class="description-text">
       <h1>Local garage showcase</h1>
       <p>Explore our local garage showcase to discover nearby automotive service providers.</p>
      </div>
    </div>

    <div class="rectangle-box">
      <div class="circlular-container">
        <div class="circlular-image">
          <img src={vehicle}alt="Image 3"/>
        </div>
      </div>
      <div class="description-text">
       <h1>Vehicle retrieval </h1>
       <p>We offer convenient vehicle pickup from your designated location.
       </p>
      </div>
    </div>

    <div class="rectangle-box">
      <div class="circlular-container">
        <div class="circlular-image">
          <img src={call} alt="Image 4"/>
        </div>
      </div>
      <div class="description-text">
      <h1>Emergency Roadside Assistance:</h1>
      <p>Get instant roadside assistance for emergencies like towing, jump-starts, and tire changes</p>
      <p></p>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Serv;
