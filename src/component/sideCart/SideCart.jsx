import React from 'react';

const SideCart = ({bookmark}) => {
    // console.log(bookmark);

    let totalTime = 0;
    for(const times of bookmark){
        totalTime = totalTime + parseInt(times.time);
    }

    return (
        <div>
             <h4 className = "bg-danger-subtle text-bold py-3 rounded ">Spent time on read:{totalTime} min</h4>
                <h4>Bookmarked Blogs: {bookmark.length}</h4>
        </div>
    );
};

export default SideCart;