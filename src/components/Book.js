import React from "react";

class Book extends React.Component {
    render() {
        return (
          <div>{this.props.book.title}</div> 
    )
    }

}
export default Book;