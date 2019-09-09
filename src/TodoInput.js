import React, { Component} from 'react';
import shortid from 'shortid';

export default class TodoInput extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text:this.state.text,
            complete: false
        })

        this.setState({
            text:""
        })


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="input-group mb-3">
                  <input value={this.state.text} onChange={this.handleChange} type="text" class="form-control" placeholder="Activity To do..." aria-label="Activity To do..." aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit" >Add</button>
                  </div>
                </div>
            </form>
            
        );
    }
}

