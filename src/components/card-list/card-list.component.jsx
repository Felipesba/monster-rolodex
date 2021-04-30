import React from 'react';
import './card-list.component.style.css';
import {Card} from '../card/card.component';


export const Cardlist = props => (
 <div className='card-list'> 
    {props.monsters.map(monsters => (
            <Card key={monsters.id} monsters={monsters}/>
        ))}
 </div>
);  

