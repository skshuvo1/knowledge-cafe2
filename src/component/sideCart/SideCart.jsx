import React, { useEffect, useState } from 'react';
import Storage from '../storage/Storage';



const SideCart = ({bookmark, watchName}) => {
    const [name, setName] = useState(watchName);

    useEffect(() => {
        const getName = localStorage.getItem('name');
        setName(getName);
    },[watchName])

    return (
        <div>
              {
                bookmark.map(mark => <Storage mark = {mark}></Storage>)
            }
            
             <h4>Bookmarked Blogs: {bookmark.length}</h4>
             <div>
             {name}
             </div>
            
             
        </div>
    );
};

export default SideCart;