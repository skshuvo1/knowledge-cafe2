import React, { useEffect, useState } from 'react';
import Storage from '../storage/Storage';
// import List from '../nameList/List';


const SideCart = ({bookmark,times,watchName}) => {
    const [name, setName] = useState(watchName);

    useEffect(() => {
        const getName = localStorage.getItem('name');
        setName(getName);
    },[watchName])

    let totalTime = 0;
    for(const time of times){
        totalTime = totalTime + parseInt(time);
    }
//   
    

    return (
        <div>
              {
                bookmark.map(mark => <Storage mark = {mark}></Storage>)
            }
             
              <h4 className = "bg-danger-subtle text-bold py-3 rounded ">Spent time on read:{totalTime} min</h4>
             <h4>Bookmarked Blogs: {bookmark.length}</h4>
             <div>
             <h4>{name}</h4>
             </div>
            
             
        </div>
    );
};

export default SideCart;