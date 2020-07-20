import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ ser, resault }) => {
    return(
        <div>
            {<p id='result'>Search resault:  {resault}</p>}
            {
                ser.map((user, i)=>{
                    return (
                        <Card
                            key={i} 
                            id={ser[i].id}
                            name={ser[i].name}
                            email={ser[i].email}
                        />
                    )
                    
                })
            }
        </div>
    )
}

export default CardList;