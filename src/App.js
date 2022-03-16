import React, {useState,useEffect} from 'react';
import './App.css';
import Check from './img/icon-check.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import InputRange from 'react-input-range';
import Switch from "react-switch";

function App() {

  const [slide, setSlide] = useState(3)
  const [price, setPrice] = useState()
  const [page, setPage] = useState()
  const [yearly, setYearly] = useState(false)

  useEffect(()=>{
    if(slide == 1){
      setPrice(8)
      setPage('10K')
      if(yearly){
        setPrice(8-(8*0.25))
      }
    }
    if(slide == 2){
      setPrice(12)
      setPage('50K')
      if(yearly){
        setPrice(12-(12*0.25))
      }
    }
    if(slide == 3){
      setPrice(16)
      setPage('100K')
      if(yearly){
        setPrice(16-(16*0.25))
      }
    }
    if(slide == 4){
      setPrice(24)
      setPage('500K')
      if(yearly){
        setPrice(24-(24*0.25))
      }
    }
    if(slide == 5){
      setPrice(36)
      setPage('1M')
      if(yearly){
        setPrice(36-(36*0.25))
      }
    }

  })

  function handleYearly(){
    if(yearly == false){
      setYearly(true)
    }
    if(yearly == true){
      setYearly(false)
    }
  }

  return (
    <div className='App'>

      <div className='Title'>
        <h1>Simple, traffic-based pricing</h1>
        <h2>Sing-up for our 30-day trial No Credit card required</h2>
      </div>
      
      <div className='Card'>
        <div className='CardTop'>
          
          <div className='TopDivWeb'>

          <p1>{page} PAGEVIEWS</p1>

          <div className='SliderDiv'>
            <input type="range" min="1" max="5" defaultValue={slide} class="slider" id="myRange" onChange={(event) => setSlide(event.target.value)} step="1"/>
          </div>

            <div className='CardPrice'>
              <p1>${price}.00</p1>
              <p2>/month</p2>
            </div>
          
          </div>

            <div className='MonYarSelect'>
              <p1>Monthly Billing</p1>
              {/* <div className='Select' onClick={()=>{}}>
                <div className='Circle'/>
              </div> */}
              {/* <input type="checkbox" name="name" id="id" className='Select'/> */}
              <Switch 
                onChange={handleYearly} 
                checked={yearly} 
                handleDiameter={15}
                height={23}
                width={42}
                offColor="#D0D8EF"
                onColor="#11D8C5"
                offHandleColor="#FFFFFF"
                onHandleColor="#FFFFFF"
                uncheckedIcon={''}
                checkedIcon={''}
                activeBoxShadow=''
              />

              <p1>Yearly Billing</p1>
              <div className='Percentage'>
                <p1>-25%</p1>
                <p3>-25% DISCOUNT</p3>
              </div>
            </div>

            <div className='Line'/>

            <div className='CardBotton'>

              <div className='BottonInfo'>
                <div className='Info'>
                  <img src={Check}/>
                  <p1>Unlimited websites</p1>
                </div>
                <div className='Info'>
                  <img src={Check}/>
                  <p1>100% data ownership</p1>
                </div>
                <div className='Info'>
                  <img src={Check}/>
                  <p1>Email reports</p1>
                </div>
              </div>

              <div className='ButtonStart'>
                <p1>Start my trial</p1>
              </div>

            </div>

        </div>
      </div>

    </div>
  );
}

export default App;
