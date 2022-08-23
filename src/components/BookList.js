import React from "react";
import Book from "./Book";
import './BookList.css';
import  BookContext from "../contexts/BookContext";

class BookList extends React.Component {
    static contextType = BookContext;

    render() {
        const bookList = this.context.map((book, i) => {
            return <Book book={book} key={i} />
        });

        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">KOC BookShop</h2>
                        <h3 className="section-subheading text-muted">This the best until we will make the better one.</h3>
                    </div>
                    <div className="row">

                        {bookList}

                    </div>
                </div>
            </section>

        )
    }
}

export default BookList;