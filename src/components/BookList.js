import React from "react";
import Book from "./Book";
import './BookList.css';
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
class BookList extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>{(contextTheme) => (
            
           
            <BookContext.Consumer>
                {contextBook => {  
                const {isDarkTheme, dark, light} = contextTheme; 
                const {books} = contextBook; 
                const theme = isDarkTheme ? dark : light;

              
                    return (
                        <section className="page-section" style= {{background : theme.bg, color:theme.txt}} id="portfolio">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase">KOC BookShop</h2>
                                    <h3 className="section-subheading text-muted">This the best until we will make the better one.</h3>
                                </div>
                                <div className="row">

                                    {books.map((book, i) => {
                                        return <Book book={book} key={i} />
                                    })}

                                </div>
                            </div>
                        </section>
                    )
                }}
            </BookContext.Consumer>)}


                

            </ThemeContext.Consumer>

        )
    }
}

export default BookList;