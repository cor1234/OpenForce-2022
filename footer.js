import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <>
        <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "0px",
                   textDecorationLine:"underline"}}>
        Made By CodeFlow
      </h1>
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
            <Footer.Column>
            <Footer.Link href="#"><img src="./openforce Logo 1 (1).jpg" alt="" style={{}}></img></Footer.Link>
                <Footer.Title>Social Media </Footer.Title>

                
                   
                   
                    {/* <Footer.Link href="#"><Icon className="fab fa-instagram" /></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" /></Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" /></Footer.Link> */}
                   
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" /><Icon className="fab fa-instagram" /><Icon className="fab fa-youtube" /><Icon className="fab fa-twitter" /></Footer.Link>
                    {/* <a href="#"><Icon className="fab fa-facebook-f" /></a>
                    <a href="#"><Icon className="fab fa-instagram" /></a>
                    <a href="#"><Icon className="fab fa-youtube" /></a>
                    <a href="#"><Icon className="fab fa-twitter" /></a> */}
                </Footer.Column>
                <Footer.Column> 
                 <Footer.Title>Company</Footer.Title>
                    <Footer.Link href="#">About us</Footer.Link>
                    <Footer.Link href="#">Our Services</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Affiliated Program</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Get Help</Footer.Title>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Codeflow</Footer.Link>
                    <Footer.Link href="#">Message</Footer.Link>
                    <Footer.Link href="#">Payment Detail</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Prize</Footer.Title>
                    <Footer.Link href="#">Watch</Footer.Link>
                    <Footer.Link href="#">Bagpack</Footer.Link>
                    <Footer.Link href="#">Shoes</Footer.Link>
                    <Footer.Link href="#">Dress</Footer.Link>
                </Footer.Column>
               
                
            
            </Footer.Row>
            </Footer.Wrapper>
            
        </Footer>
        
        </>
    ) 
}