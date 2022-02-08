import React, { Component } from 'react';
import axios from 'axios';

export default class EditBlog extends Component {

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

    // componentDidMount() {
    //     console.log(this.props.match.params.id);
    //     axios.get('http://localhost:4000/editbutton/'+this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 authorid: response.data.authorid,
    //                 author: response.data.author,
    //                 title: response.data.title,
    //                 content: response.data.content
    //             })   
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }


    onSubmit(e) {
        e.preventDefault();
        const obj = {
            authorid: this.state.authorid,
            author: this.state.author,
            title: this.state.title,
            content: this.state.content
        };
        console.log(obj);
        axios.post('http://localhost:4000/editblog/'+this.props.match.params.id,)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Edit Blog</h3>
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
                        <input type="submit" value="Edit Blog" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

