import React, { Component } from "react";

export class ClassTableRow extends Component {

    render() {
        let r = this.props.content;
        return (
        <tr className = "text-center">
            <td>{ r.id }</td>
            <td>{ r.description }</td>
            <td>{ r.semester}</td>
            <td>{ r.prefix }</td>
            <td>{ r.number }</td>
            <td>{ r.grade}</td>
            <td>
                <div className="col-md-12 text-center">
                <button className="text-center btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(r) }>
                        Edit
                </button>
                </div>    
            </td>
        </tr>)
    }
}
