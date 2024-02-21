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
        {/* <p className='name-comment'>Emma Bostian en Suesia</p> */}
        <p className='name-comment'>{props.name} en {props.country}</p>
        {/* <p className='work-comment'>Ingeniera de Software en Spotify</p> */}
        <p className='work-comment'>{props.work} en {props.business}</p>
        {/* <p className='text-comment'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti dolores expedita qui architecto commodi laborum cum iusto cumque quidem illum, ex, nostrum maxime accusamus magnam, itaque at suscipit eligendi."</p> */}
        <p className='text-comment'>"{props.comment}"</p>
      </div>
    </div>
  );
}

export default Comments;