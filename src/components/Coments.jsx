import React from 'react';
import '../stylesheet/Comments.css';

function Comments(props) {
  return(
    <div className='container-comments'>
      <img 
        className='img-comment'
        src={require(`../images/t${props.img}.jpg`)}
        alt='Foto de perfil'
      />
      <div className='container-text-comment'>
        <p className='name-comment'>
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className='work-comment'>
          {props.work} en {props.business}
        </p>
        <p className='text-comment'>"{props.comment}"</p>
      </div>
    </div>
  );
}

export default Comments;