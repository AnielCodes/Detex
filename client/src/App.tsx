import './App.css'
import Header from './BasicComponents/Header'
import Footer from './BasicComponents/Footer'
import Carousel from './BasicComponents/Carousel'

function App() { 
  const images = [
    'https://www.detex.com/wp-content/uploads/2020/02/10-Series.jpg',
    'https://www.detex.com/wp-content/uploads/2019/12/Auditorium-Door-Function.jpg',
    'https://www.detex.com/wp-content/uploads/2023/11/ryobi-banners-detex.gif',
  ];

  return (
  <>
  <Header />
  <Carousel images={images}/>
  <Footer />
  </>
)}

export default App
