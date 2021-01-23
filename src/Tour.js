import React, { useState } from 'react';

const Tour = ({id, author, download_url, removeTour}) => {
    const info = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos commodius agimus. At multis se probavit. Post enim Chrysippum eum non sane est disputatum. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Duo Reges: constructio interrete. Ille enim occurrentia nescio quae comminiscebatur; Tum Torquatus: Prorsus, inquit, assentior; Nescio quo modo praetervolavit oratio.';
    const price = 2000 ;
    const [readMore, setReadMore] = useState(false);

    return (
       <article className="single-tour">
        <img src={download_url} alt={author}/>
        <footer>
            <div className="tour-info">
                <h4>{author}</h4>
                <h4 className="tour-price">£{price}</h4>
            </div>
            <p>{ readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={ () => setReadMore(!readMore) }><small>{readMore ? 'show less' : 'read more'}</small></button> </p>
           <button className="delete-btn" onClick={() => removeTour(id)}>
                Close
           </button>
        </footer>
       </article>
    );
};


export default Tour;