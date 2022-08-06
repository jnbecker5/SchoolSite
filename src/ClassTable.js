import React, { Component } from "react";
import { ClassTableRow } from "./ClassTableRow";
import { ClassTableBanner} from "./ClassTableBanner"

export class ClassTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        
                    <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
                    {
                        this.props.rowContent.map(c => 
                            <ClassTableBanner
                                content={ c } 
                                key={ c.tableName }/>)
                    }
                    </th>
                    </tr>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Semester</th>
                        <th className="text-center">Prefix</th>
                        <th className="text-center">Number</th>
                        <th className="text-center">Grade</th>
                        <th className="text-center">Editing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.rowContent.map(r => 
                            <ClassTableRow
                                content={ r } 
                                key={ r.id }
                                editCallback={ this.props.editCallback } />)
                    }
                </tbody>
            </table>        
    }
}
