import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class BookTable extends Component {
  constructor() {
    super();
    this.state = {
        data : []
    }
  }


  componentDidMount() {
    axios.get("https://anapioficeandfire.com/api/books")
    .then(response => {
        console.log(response);
        this.setState({
            data:response.data
        })
      
    })
    .catch(error => console.log(error));
  } 


  render() {
    return (
        <table className="table table-hover">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Pages</th>
                <th>Country</th>
                <th>Characters</th>
                </thead>
        <tbody>{this.state.data.map((item, key) => (
               
                    <tr key = {key}>
                        <td>{item.url.split('/')[5]}</td>
                        <td>{item.name}</td>
                        <td>{item.numberOfPages}</td>
                        <td>{item.publisher}</td>
                        <td>{item.characters.length}</td>
                    </tr>
                )
               
               )}</tbody>
         </table>
    );
    }
  }
export default BookTable;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<BookTable />, wrapper) : false;