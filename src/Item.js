import React, {Component} from 'react';

class Item extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        let {item, index, handleEdit} = this.props;
        if (item === 0) {
            return (
                <tr>
                    <td colSpan="4" className="text-center">
                        <h4>No Item</h4>
                    </td>
                </tr>
            )
        }
        let classNameLabel = '';
        let nameLabel = '';
        switch (item.level) {
            case 1:
                classNameLabel = 'label label-warning';
                nameLabel = 'Medium';
                break;
            case 2:
                classNameLabel = 'label label-danger';
                nameLabel = 'High';
                break;
            default:
                classNameLabel = 'label label-info';
                nameLabel = 'Low';
                break;
        }
        return(
            <tr>
                <td className="text-center">{index}</td>
                <td>{item.name}</td>
                <td className="text-center"><span className={classNameLabel}>{nameLabel}</span></td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm mr-7" 
                    onClick={() => handleEdit(item)} >Edit
                    </button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.handleAlert(item)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Item;