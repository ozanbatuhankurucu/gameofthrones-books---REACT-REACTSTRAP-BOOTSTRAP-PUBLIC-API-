import React,{useState} from 'react';
import './App.css';
import { Spinner,Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import randomColor from 'randomcolor';  
import Header from './Header';
import axios from 'axios';
function App() {
  
  const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
  const [books,setBooks] = useState([]);
  const [spinnerControl,setSpinnerControl] = useState(false);

  function editAuthorsText(authors){
    let aText = "";

    if(authors.length===1){
      aText= authors[0];
    }else{
      for(var i=0; i<authors.length; i++){
        if(i!==authors.length-1){
          aText +=  authors[i]+", ";
        }else{
          aText +=authors[i];
        }
      }
    }
   
    return aText;
  }

function getBooks(){
  setSpinnerControl(true);
axios.get(apiURL).then( (res) => {
  console.log(res.data);
  setBooks(res.data);
  setSpinnerControl(false);
}).catch( err => console.log(err));
}
  function getCards(){
    if(spinnerControl){
      return <div className='text-align justify-content-center d-flex mt-5'><Spinner color='primary' style={{ width: '3rem', height: '3rem' }} /></div>;
    }else{
      const cards = books.map((book,index) => {
        return <div className='col-lg-4 my-5'>
          <Card className='book-card' key={index} style={{borderColor:randomColor(),backgroundColor:randomColor()
          }}>
        <CardBody>
          <CardTitle style={{fontSize:'1.8rem'}} className='mb-3 text-center font-weight-bold'>{book.name}</CardTitle>
          <CardSubtitle>{editAuthorsText(book.authors)}</CardSubtitle>
          <CardText>Number of Pages: {book.numberOfPages}</CardText>
          <CardText>Publisher: {book.publisher}</CardText>
          <CardText>Released: {book.released}</CardText>
          <CardText>Media Type: {book.mediaType}</CardText>
        </CardBody>
      </Card>
        </div>
      });
      return <div className='container'>
        <div className='row'>
          {cards}
        </div>
      </div>
    }
  }

  return (
    <div className='w-100 h-100'>
     <Header getBook={getBooks}/>
     {getCards()}
    </div>
  );
}

export default App;
