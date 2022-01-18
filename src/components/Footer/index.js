import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
          FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, 
          SocialIcons, SocialIconLink } from './FooterElements';


const Footer = () => {
     const toggleHome = () => {
          scroll.scrollToTop();
     }
     return (
          <FooterContainer>
               <FooterWrap>
                    <FooterLinksContainer>
                         <FooterLinksWrapper>
                              <FooterLinkItems>
                                   <FooterLinkTitle>About us </FooterLinkTitle>
                                        <FooterLink to='/'>How it works</FooterLink>
                                        <FooterLink to='/'>Testimonial</FooterLink>
                                        <FooterLink to='/'>Careers</FooterLink>
                                        <FooterLink to='/'>Investor</FooterLink>
                                        <FooterLink to='/'>Terms of Services</FooterLink>                                 
                              </FooterLinkItems>
                              <FooterLinkItems>
                                   <FooterLinkTitle>Contact us</FooterLinkTitle>
                                        <FooterLink to='/'>Contact</FooterLink>
                                        <FooterLink to='/'>Support</FooterLink>
                                        <FooterLink to='/'>Destination</FooterLink>
                                        <FooterLink to='/'>Sponsorhip</FooterLink>                               
                              </FooterLinkItems>
                         </FooterLinksWrapper>
                         <FooterLinksWrapper>
                              <FooterLinkItems>
                                   <FooterLinkTitle>Videos</FooterLinkTitle>
                                        <FooterLink to='/'>Submit Videos</FooterLink>
                                        <FooterLink to='/'>Ambassador</FooterLink>
                                        <FooterLink to='/'>Agency</FooterLink>
                                        <FooterLink to='/'>Influencer</FooterLink>                                
                              </FooterLinkItems>
                              <FooterLinkItems>
                                   <FooterLinkTitle>Social Media</FooterLinkTitle>
                                        <FooterLink to='/'>Instagram</FooterLink>
                                        <FooterLink to='/'>Facebook</FooterLink>
                                        <FooterLink to='/'>Youtube</FooterLink>
                                        <FooterLink to='/'>Twitter</FooterLink>                                
                              </FooterLinkItems>
                         </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                         <SocialMediaWrap>
                              <SocialLogo to='/' onClick={toggleHome}>Dolla</SocialLogo>
                              <WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                              <SocialIcons>
                                   <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                                        <FaFacebook />
                                   </SocialIconLink>
                                   <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                        <FaInstagram />
                                   </SocialIconLink>
                                   <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                                        <FaYoutube />
                                   </SocialIconLink>
                                   <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                        <FaTwitter />
                                   </SocialIconLink>
                                   <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                                        <FaLinkedin />
                                   </SocialIconLink>
                              </SocialIcons>
                         </SocialMediaWrap>
                    </SocialMedia>
               </FooterWrap>
          </FooterContainer>
     )
}

export default Footer
