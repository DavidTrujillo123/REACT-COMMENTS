import './App.css';
import Comments from './components/Coments'

function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <h1>Comentarios de suscriptores</h1>
        <Comments
          name='Emma Bostian'
          country='Suesia'
          work='Ingeniera de Software'
          business='Spotify'
          comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti dolores expedita qui architecto commodi laborum cum iusto cumque quidem illum, ex, nostrum maxime accusamus magnam, itaque at suscipit eligendi.'
          img='1'
        />

        <Comments
          name='Emma Bostian'
          country='Suesia'
          work='Ingeniera de Software'
          business='Spotify'
          comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti dolores expedita qui architecto commodi laborum cum iusto cumque quidem illum, ex, nostrum maxime accusamus magnam, itaque at suscipit eligendi.'
          img='1'
        />
      </div>
    </div>
  );
}

export default App;
