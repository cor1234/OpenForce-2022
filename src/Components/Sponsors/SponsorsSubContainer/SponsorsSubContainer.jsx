import React from 'react';
import './SponsorsSubContainer.css';
import SponsorsCard from './SponsorsCard/SponsorsCard';

function SponsorsSubContainer(props){
    return (
        <div className="sponsors-sub-container">
            <h3 className="sponsors-sub-heading"># {props.subheading}</h3>
            <div className="sponsors-sub-container-flexbox">
                {props.links.map((link)=>{
                    return <SponsorsCard key={link} link={link}/>
                })}
            </div>
        </div>
    );
}

export default SponsorsSubContainer;