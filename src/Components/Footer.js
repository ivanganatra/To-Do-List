import React, { Component } from 'react'
import './Footer.css'
import { createPortal } from 'react-dom'
// npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from '@iconify/react';
import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';

class Footer extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            color:"black"
        }
    }
    list_creator(classname,header,name,id_code){
        let loop=0;
        console.log(classname,header,name);
        let list_feature=name.map((name)=>{
            loop+=1;
            let id='item-'+id_code+loop;
            return(
                <div key={id} id={id}>{name}</div>
                )
            });
            return (
                <div className={classname}>
                    <h3>{header}</h3>
                    {list_feature}
                </div>
                );
        }
        render() {
            let feature=["How it Works","For Teams","Pricing","Templates"];
            let resources=["Download Apps","Help Center","Productivity Methods","Refer a friend","Integrations","Channel Partners","Developer API"];
            let company=["Download Apps","Help Center","Productivity Methods","Refer a friend","Integrations","Channel Partners","Developer API"];
            let list_feature=this.list_creator("Feature-list","Features",feature,"f");
            let list_resource=this.list_creator("Resource-list","Resources",resources,"r");
            let list_company=this.list_creator("Company-list","Company",resources,"c");
        return (
            <div className="Footer">
                <div id="statement">
                    <h4>Join millions of people who organize work and life with todolist.</h4>
                    <h4>Our Social Networks</h4>
                    <p>Follow us at our twitter handles to get all the updates.</p>
                    <div className="social-links">
                    <Icon icon={bxlTwitter} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                    <Icon icon={bxlFacebook} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                    <Icon icon={bxlInstagram} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                    <Icon icon={bxlLinkedin} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                    <Icon icon={bxlFacebook} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                    </div>
                </div>
                <div className="list-section">
                {list_feature}
                {list_resource}
                {list_company}
                </div>
            </div>
        )
    }
}
export default Footer