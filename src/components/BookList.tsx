import React, { useEffect, useState } from "react";
import { IonList, IonItem, IonLabel, IonAvatar } from "@ionic/react";
import { Book } from "../models/Book";
import { BookService } from "../services/BookService";
import semFoto from "../assets/imgs/sem-foto.jpg";

export type BookListProps = {
  authorId?: string
}

const AuthorList: React.FC<BookListProps> = ({ authorId }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = async () => {
    const books: Array<Book> = await BookService.getBooks('', authorId);
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
            <IonAvatar slot="start">
              <img src={book.cover ?? semFoto} alt={book.title} />
            </IonAvatar>
            <IonLabel>
              <h2>
                <strong>{book.title}</strong>
              </h2>
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
