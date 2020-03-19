import React, { useEffect, useState } from "react";
import { IonList, IonItem, IonLabel } from "@ionic/react";
import { Author } from "../models/Author";
import { AuthorService } from "../services/AuthorService";

const BookList: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  const getBooks = async () => {
    const authors: Array<Author> = await AuthorService.getAuthors();
    setAuthors(authors);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <IonList>
      {authors.map(author => {
        return (
          <IonItem button key={author.objectId}>
            <IonLabel>{author.name}</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default BookList;
