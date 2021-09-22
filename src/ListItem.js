import React, {Component} from 'react';
import Items from './mockdata/Items'
import Item from './Item';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import ItemEdit from './ItemEdit';

class ListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: Items,
            showAlert: false,
            titleAlert: '',
            idAlert:'',
            idEdit: '',
            nameEdit: '',
            levelEditItem: 0
        }
    }
    renderItem = () => {
        let {items} = this.state;
        if(this.props.isSearch) {
            items = this.props.itemsSearch;
        }
        if (items.length === 0){
            return <Item item={0}/>
        }
        return items.map((item, index) => {
            if (item.id === this.state.idEdit) {
                return <ItemEdit key={index} item={item} 
                        index={item.id}
                        nameEdit={this.state.nameEdit}
                        levelItem={this.state.levelEditItem} 
                        handleCancelEdit={this.handleCancelEdit}
                        handleEditInputChange={this.handleEditInputChange}
                        handleEditSelectChange={this.handleEditSelectChange}
                        handleEditClickSubmit={this.handleEditClickSubmit}
                        />
            }
            return (
                <Item item={item} key={index} index={item.id}
                handleAlert={this.handleAlert} 
                handleEdit={this.handleEdit} />
            )
        })
    }
    handleCancelEdit = () => {
        this.setState({
            idEdit: ''
        })
    }
    handleEdit = (itemIsEdit) => {
        this.setState({
            idEdit : itemIsEdit.id,
            nameEdit : itemIsEdit.name,
            levelEditItem: itemIsEdit.level
        })
    }
    handleEditInputChange = (value) => {
        this.setState({
            nameEdit: value
        })
    }
    handleEditSelectChange = (value) => {
        this.setState({
            levelEditItem: value
        })
    }
    handleEditClickSubmit = () => {
        if (Items.length > 0) {
            if((Items.some((item) => {return ((item.name == this.state.nameEdit) && item.id != this.state.idEdit)})) || this.state.nameEdit == '') {
                alert('Trường dữ liệu không được bỏ trống hoặc trùng');
            }else{
                for (let i = 0; i < Items.length; i++) {
                    if (Items[i].id == this.state.idEdit) {
                        Items[i].name = this.state.nameEdit;
                        Items[i].level = +this.state.levelEditItem;
                        break;
                    }
                    
                }
            }
            this.setState({
            idEdit: ''
            })
        }
    }   
    handleAlert = (itemAlert) => {
        this.setState({
            showAlert: true,
            titleAlert: itemAlert.name,
            idAlert: itemAlert.id
        })
    }
    deleteItem = () => {
        let {items, idAlert} = this.state;
        if (items.length > 0) {
            for (let i = 0; i < items.length; i++){
                if (items[i].id === idAlert) {
                    items.splice(i, 1);
                    break;
                }
            }
        }
        this.setState({
            showAlert: false
        })
    }
    render() {
        return(
            <div className="panel panel-success">
                <SweetAlert
                show={this.state.showAlert}
                title='Delete item'
                text={this.state.titleAlert}
                showCancelButton
                onOutsideClick={()  => this.setState({ showAlert: false })}
                onEscapeKey={()     => this.setState({ showAlert: false })}
                onCancel={()        => this.setState({ showAlert: false })}
                onConfirm={()       => this.deleteItem()}
                />
                <div className="panel-heading">List Item</div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }} className="text-center">#</th>
                            <th>Name</th>
                            <th style={{ width: '15%' }} className="text-center">Level</th>
                            <th style={{ width: '15%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItem()}  
                    </tbody>
                </table>
            </div>
                )
            }
}
export default ListItem;