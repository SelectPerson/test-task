import React from 'react';
import {Link} from "react-router-dom";

const GeneralCard = ({ id, title, userId, content, link }) => {
  return (
    <div className="card">
      <div className="card-body">
        {title && id && (<h5 className="card-title">{id}. {title}</h5>)}
        {userId && <h6>Used id: {userId}</h6>}
        {content && <p className="card-text"> {content}</p>}
        {link && <Link to={'/'} className="btn btn-primary">Get details</Link>}
      </div>
    </div>
  );
};

export default GeneralCard;