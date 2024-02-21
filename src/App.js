import './App.css';
import Comments from './components/Coments'

const obj = [
  {
    name:'Emma Bostian',
    country: 'Suesia',
    work: 'Ingeniera de Software',
    business: 'Spotify',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti dolores expedita qui architecto commodi laborum cum iusto cumque quidem illum, ex, nostrum maxime accusamus magnam, itaque at suscipit eligendi.',
    strongcomment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    img: '1',
  },
  {
    name: 'Shawn  Wang',
    country: 'Singapur',
    work: 'Ingeniera de Software',
    business: 'Amazon',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti dolores expedita qui architecto commodi laborum cum iusto cumque quidem illum, ex, nostrum maxime accusamus magnam, itaque at suscipit eligendi.',
    img: '2'
  }
]

function App() {
  return (
    <div className="App">
      <div className='container-main'>
        <h1>Comentarios de suscriptores</h1>
        {obj.map((element, index) => (
          <Comments
            key={index} // Se recomienda usar una clave única para cada elemento en la lista
            name={element.name}
            country={element.country}
            work={element.work}
            business={element.business}
            comment={element.comment}
            img={element.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
