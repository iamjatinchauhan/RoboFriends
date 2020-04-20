import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        <div>
            {
            robots.map((user, i)=> {
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                );
            })
        }
        </div>
    );
}

export default CardList;


// NOTE:
// whenever you do loop in react you have to give a unique key - Key prop should have something that doesnt change.
// For example, index(or i in our case) could change if array items get moved.
// so a better key in this case would be something unique like id.