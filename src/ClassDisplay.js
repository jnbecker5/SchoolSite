import React, { Component } from "react";
import { ClassTable } from "./ClassTable"
import { ClassEditor } from "./ClassEditor";

export class ClassDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedContent: null
        }
    }
    startEditing = (content) => {
        this.setState({ showEditor: true, selectedContent: content })
    }

    createcontent = () => {
        this.setState({ showEditor: true, selectedContent: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedContent: null })
    }

    saveClass = (content) => {
        this.props.saveCallback(content);
        this.setState({ showEditor: false, selectedContent: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <ClassEditor 
                key={ this.state.selectedContent.id || -1 }
                content={ this.state.selectedContent } 
                saveCallback={ this.saveClass }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <ClassTable 
                    rowContent={ this.props.rowContent }
                    editCallback={ this.startEditing } />            
                      
            </div>
        }
    }
}