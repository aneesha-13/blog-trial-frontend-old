import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = props => (
    <tr>
        <td>{props.blog.authorid}</td>
        <td>{props.blog.author}</td>
        <td>{props.blog.title}</td>
        <td>{props.blog.content}</td>
        <td>
            <Link to={"/edit/"+props.blog._id}>Edit</Link>
        </td>
    </tr>
)

export default class BlogsList extends Component {

    constructor(props) {
        super(props);
        this.state = {blogs: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then(response => {
                this.setState({ blogs: response.data });
                console.log("component mounted");

            })
            .catch(function (error){
                console.log("error");
            })
    }

    blogList() {
        return this.state.blogs.map(function(currentblog, i){
            console.log("in bloglist()");
            return <Blog blog={currentblog} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Blog List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.blogList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
// import React, { Component } from 'react';
// export default class BlogList extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Welcome to Display Blogs</p>
//             </div>
//         )
//     }
// }