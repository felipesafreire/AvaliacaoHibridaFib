import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButtons,
  IonBackButton
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BookService } from "../services/BookService";
import { Book } from "../models/Book";
import semFoto from "../assets/imgs/sem-foto.jpg";
import { Review } from "../models/Review";

type BookDetailParams = {
  bookId?: string;
};

const BookDetailPage: React.FC = () => {
  const params: BookDetailParams = useParams();
  if (params.bookId === undefined) {
    throw new Error("Id do livro obrigatório");
  }

  const id = params.bookId;

  const [book, setBook] = useState<Book>();
  const [reviews, setReviews] = useState<string>(' - ');

  const getBook = async (id: string) => {
    const book = await BookService.getBook(id);
    setBook(book);
    const reviews = await BookService.getReviews(book);
    setQuantityReview(reviews);
  };

  function setQuantityReview(reviews: Review[]){
    if(reviews.length > 0){
      let review = 0;
      for(let i = 0; i < reviews.length; i++){
          review += reviews[i].rating;
      }
      const reviewBook = (review / reviews.length).toFixed(0)
      setReviews(reviewBook);
    }
  }

  useEffect(() => {
    getBook(id);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/books" />
          </IonButtons>
          <IonTitle>{book?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <div style={{ textAlign: "center" }}>
              <h1 style={{color: '#3880FF'}}>{book?.title}</h1>
              <br />
              <img src={book?.cover ?? semFoto} width={200} alt={book?.title} />
            </div>
            <div>
              <p>
                <strong>Por:</strong> {book?.author.name}
              </p>
              <p>
                <strong>Quantidade disponível:</strong> {book?.quantity}
              </p>
              <p>
                <strong>Nota:</strong> {reviews}
              </p>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BookDetailPage;
