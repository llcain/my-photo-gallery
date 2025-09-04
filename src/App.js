import './App.scss';
import photo21 from './images/photo21.jpg';
import photo22 from './images/photo22.jpg';
import photo25 from './images/photo25.jpg';
import photo23 from './images/photo23.jpg';
import photo1 from './images/photo1.jpg';
import photo16 from './images/photo16.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';
import photo6 from './images/photo6.jpg';
import photo7 from './images/photo7.jpg';
import photo8 from './images/photo8.jpg';
import photo9 from './images/photo9.jpg';
import photo10 from './images/photo10.jpg';
import photo11 from './images/photo11.jpg';
import photo12 from './images/photo12.jpg';
import photo13 from './images/photo13.jpg';
import photo14 from './images/photo14.jpg';
import photo15 from './images/photo15.jpg';
import photo17 from './images/photo17.jpg';
import photo26 from './images/photo26.jpg';
import photo19 from './images/photo19.jpg';
import photo20 from './images/photo20.jpg';

function App() {
  const photos = [
    photo21, photo22, photo25, photo23, photo1, photo16, photo2, photo3,
    photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11,
    photo12, photo13, photo14, photo15, photo17, photo26, photo19, photo20,
  ];

  return (
    <>
      <h1>My Photo Image Gallery</h1>
      <div className="container">
        <div className="img-grid">
          {photos.map((src, index) => (
            <img key={index} src={src} alt={`gallery-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
