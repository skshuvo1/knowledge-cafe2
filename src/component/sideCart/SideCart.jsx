import React from 'react';
import Storage from '../storage/Storage';
// import List from '../nameList/List';


const SideCart = ({bookmark,times}) => {
    // console.log(bookmark);

    let totalTime = 0;
    for(const time of times){
        totalTime = totalTime + parseInt(time);
    }
//     console.log(totalTime);
//  localStorage.setItem('name', mark)
    

    return (
        <div>
              {
                bookmark.map(mark => <Storage mark = {mark}></Storage>)
            }
             
              <h4 className = "bg-danger-subtle text-bold py-3 rounded ">Spent time on read:{totalTime} min</h4>
             <h4>Bookmarked Blogs: {bookmark.length}</h4>
             {/* <div>
             <List></List>
             </div> */}
            
             
        </div>
    );
};

export default SideCart;