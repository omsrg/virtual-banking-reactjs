import React from 'react'
import Icon1 from '../../images/discount.svg';
import Icon2 from '../../images/mobile-login.svg';
import Icon3 from '../../images/finance.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, 
          ServicesH2, ServicesP, ServicesCard } from './ServicesElements'

const Services = () => {
     return (
          <ServicesContainer id='services'>
               <ServicesH1>Our Services</ServicesH1>
               <ServicesWrapper>
                    <ServicesCard>
                         <ServicesIcon src={Icon1}/>
                         <ServicesH2>Reduce Expenses</ServicesH2>
                         <ServicesP>We help reduce your fees and income your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                         <ServicesIcon src={Icon2}/>
                         <ServicesH2>Virtual Offices</ServicesH2>
                         <ServicesP>You can access our platform online anywhere in the wolrd.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                         <ServicesIcon src={Icon3}/>
                         <ServicesH2>Premium Benefit</ServicesH2>
                         <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                    </ServicesCard>
               </ServicesWrapper>
          </ServicesContainer>
     )
}

export default Services
