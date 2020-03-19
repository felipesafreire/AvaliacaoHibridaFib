import React, { useEffect, useState } from "react";
import { IonList, IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { Book } from "../models/Book";
import { BookService } from "../services/BookService";
import semFoto from "../assets/imgs/sem-foto.jpg";
import { useHistory } from "react-router";

const AuthorList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const history = useHistory();

  const getBooks = async () => {
    const books: Array<Book> = await BookService.getBooks();
    setBooks(books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <IonList>
      {books.map(book => {
        return (
          <IonItem
            href={`/books/${book.objectId}`}
            button
            key={book.objectId}>
            {}
            <IonThumbnail slot="start">
              <img src={book.cover ?? semFoto} />
            </IonThumbnail>
            <IonLabel>
              <h2>
                <strong>{book.title}</strong>
              </h2>
              <p>
                <strong>Quantidade:</strong> {book.quantity}
              </p>
              <p>
                <strong>Autor:</strong> {book.author.name}
              </p>
            </IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default AuthorList;
