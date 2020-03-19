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

  const getBook = async (id: string) => {
    const book = await BookService.getBook(id);
    setBook(book);
  };

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
          <IonTitle>Livros</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <div style={{ textAlign: "center" }}>
              <h1>{book?.title}</h1>
              <br />
              <img src={book?.cover ?? semFoto} width={200} />
            </div>
            <div>
              <p>
                <strong>Quantidade:</strong> {book?.quantity}
              </p>
              <p>
                <strong>Autor:</strong> {book?.author.name}
              </p>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BookDetailPage;
