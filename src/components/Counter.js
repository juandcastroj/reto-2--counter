import React, { useEffect, useRef, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
 import "../style/Counter.css"



const Counter = () => {

  const [timerDays,settimerDays]= useState('00');
  const [timerHours,settimerHours]= useState('00');
  const [timerMinutes,settimerMinutes]= useState('00');
  const [timerSeconds,settimerSeconds]= useState('00');


 let interval = useRef()

  const startTimer = () => {
    const countDate = new Date('Mar 5, 2022 00:00:00 ').getTime();

    interval = setInterval(() => {
        const now = new Date().getTime()
        const diference = countDate - now

        const days = Math.floor(diference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) ))
        const minutes = Math.floor((diference % (1000 * 60 * 60 * 24))  / (1000 * 60) )
        const seconds = Math.floor((diference % (1000 * 60)) / 1000 )

        if ( diference < 0){
          //detener el contador
          clearInterval(interval.current)
        }else{
          //actuyaliza el contador
          settimerDays(days)
          settimerHours(hours)
          settimerMinutes(minutes)
          settimerSeconds(seconds)
        }
    }, 1000);
  }

  useEffect(() => {
    startTimer()
     return () => {
      clearInterval(interval.current)
    }
  });
  


  return (
    <section className='timer-container' >
      
        <div className='title' >
          <h1>We're Launching soon</h1>
        
        </div>
       

      
    <Row>
    <Col>
      <Card className='bodyCard' >
       
        <Card.Body   >
          <Card.Title  > <h2>{timerDays}</h2>
          </Card.Title>
          
        </Card.Body>
        <h4>Days</h4>
      </Card>
    </Col>

    <Col>
      <Card className='bodyCard' >
        
        <Card.Body>
          <Card.Title  > <h2>{timerHours}</h2>
          </Card.Title>
          
        </Card.Body>
        
        <h4>Hours</h4>
      </Card>
    </Col>

    <Col>
      <Card className='bodyCard' >
        
        <Card.Body>
          <Card.Title   > <h2>{timerMinutes}</h2>
          </Card.Title>
            
        </Card.Body>
        
        <h4>Minutes</h4>
      </Card>
    </Col>

    <Col>
      <Card  className='bodyCard' >
       
        <Card.Body>
          <Card.Title   > <h2>{timerSeconds}</h2>
          </Card.Title>
          
        </Card.Body>
        
        <h4>Seconds</h4>
      </Card>
    </Col>
    </Row>

    
    <img  src='https://restoringvision.org/wp-content/uploads/2020/09/FB.png' alt='' width="45px"  />
    <img  src='https://d2kq0urxkarztv.cloudfront.net/607abc0cfb6a09173817cc71/2746722/upload-c20573b3-babe-4869-9c08-2a34c2ce7244.png?w=171' alt='' width="50px"  />
    <img  src='https://www.freeiconspng.com/uploads/white-pinterest-logo-png--30.png' alt='' width="47px"  />

    </section>
  )
}

export default Counter
