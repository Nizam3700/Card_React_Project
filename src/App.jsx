// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Compounds/header/Header';
import Card_profile from './Compounds/header/card/Card_profile';
import Card from './Compounds/header/card/People';
import Project from './Compounds/header/card/People';
import People from './Compounds/header/card/People';



function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <Header/>
      <div  className='profile_Card'>
      <Card_profile UserName = "Backend Developer" Skills ="Java, SpingBoot..etc" Profession="https://youtu.be/fO9HN3nvDLI?si=ryUkLywwpfJo4CjW" source_img="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/12/28135752/shutterstock_605291450.jpg"/>
      <Card_profile UserName = "Frontend Developer" Skills ="Javascript, React.js..etc" Profession="https://youtu.be/s6156ZBcfGk?si=ku2bzeryzS4r93ai" source_img="https://www.shutterstock.com/image-photo/businessman-browsing-front-end-website-260nw-1189720678.jpg" />
      <Card_profile UserName = "Full Stack Developer" Skills ="Node.js, MySql..etc" Profession="https://youtu.be/0yqKZ9ogsyU?si=5uK7yF-1KVO0VH_T" source_img="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/300174156/original/4c51832b2d5964f77e2c85c15071dbda6ab5dc1f/be-your-custom-full-stack-web-developer.png" />
      <Card_profile UserName = "DevOps" Skills ="Docker, Cloud, GitHub..etc" Profession="https://youtu.be/P77GhVfvuKQ?si=y0Zq3k92El8A7wUe" source_img="https://media.licdn.com/dms/image/D5612AQEAomvSnPgEpw/article-cover_image-shrink_720_1280/0/1681931504150?e=2147483647&v=beta&t=QY6NDAERSiOgXxSzrxKY5qappN45IkGM40Z3ReORKJQ"/>
      </div>
      <People/>
    </>
  )
}

export default App;
