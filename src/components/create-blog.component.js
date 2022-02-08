import React, { Component } from 'react';
import axios from 'axios';


export default class CreateBlog extends Component {

    constructor(props) {
        super(props);

        this.onChangeauthorid = this.onChangeauthorid.bind(this);
        this.onChangeauthor = this.onChangeauthor.bind(this);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangecontent = this.onChangecontent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            authorid: '',
            author: '',
            title: '',
            content: ''
        }
    }

    onChangeauthorid(e) {
        this.setState({
            authorid: e.target.value
        });
    }

    onChangeauthor(e) {
        this.setState({
            author: e.target.value
        });
    }

    onChangetitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    onChangecontent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        // console.log(`Form submitted:`);
        // console.log(`authorid: ${this.state.authorid}`);
        // console.log(`author: ${this.state.author}`);
        // console.log(`title: ${this.state.title}`);
        // console.log(`content: ${this.state.content}`);

        // this.setState({
        //     authorid: '',
        //     author: '',
        //     title: '',
        //     content: ''
        // })
        const user = {
            authorid: this.state.authorid,
            author: this.state.author,
            title: this.state.title,
            content: this.state.content
        };
        return fetch('http://localhost:4000/AddData', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => console.log(data));

            

        // axios.post('http://localhost:4000/AddData',{user})
        //     .then(response => {
        //         console.log(response.data);
        //         console.log("in post");

        //     })
        //     .catch(function (error){
        //         console.log("error");
        //     })
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Create New Blog</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Id: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.authorid}
                            onChange={this.onChangeauthorid}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeauthor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangetitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.content}
                            onChange={this.onChangecontent}
                        />
                    </div>
                    <div></div>
                    <div className="form-group">
                        <input type="submit" value="Create Blog" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
// function CreateBlog() {
//     return (
//         <div>
//             <p>Welcome to Create Blog Component!!</p>
//         </div>
//     )
// }
// export default CreateBlog;