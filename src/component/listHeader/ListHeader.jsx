import React from 'react';

const ListHeader = ({times}) => {

    let totalTime = 0;
    for(const time of times){
        totalTime = totalTime + parseInt(time);
    }
    return (
        <div>
             <h4 className = "bg-danger-subtle text-bold py-3 rounded ">Spent time on read:{totalTime} min</h4>
        </div>
    );
};

export default ListHeader;