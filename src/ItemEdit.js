import React, {Component} from 'react';

class ItemEdit extends Component {
    render() {
        let {index, levelItem, handleCancelEdit} = this.props;
        return(
            <tr>
                <td className="text-center">{index}</td>
                <td>
                    <input type="text" className="form-control" 
                    value={this.props.nameEdit}
                    onChange={(event) => this.props.handleEditInputChange(event.target.value)}/>
                </td>
                <td className="text-center">
                    <select className="form-control" 
                    value={levelItem}
                    onChange={(event) => this.props.handleEditSelectChange(event.target.value)}>
                        <option value='0'>Low</option>
                        <option value ='1'>Medium</option>
                        <option value='2'>High</option>
                    </select>
                </td>
                <td>
                    <button type="button" className="btn btn-default btn-sm mr-3" 
                    onClick={() => handleCancelEdit()}>
                        Cancel
                    </button>
                    <button type="button" className="btn btn-success btn-sm m-save-edit-btn"
                    onClick={()=> this.props.handleEditClickSubmit()}>
                        Save
                    </button>
                </td>
            </tr>
        )
    }
}

export default ItemEdit;