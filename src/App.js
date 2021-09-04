import React, { Component } from 'react';
import ListItem from './ListItem';
import Form from './Form';
import Sort from './Sort';
import Search from './Search';
import Title from './Title';
import Items from './mockdata/Items'; 

class App extends Component {
    constructor(props) {    
        super(props);
        let arrLever = [];
        if (Items.length > 0) {
            for (let i=0; i < Items.length; i++) {
                if (arrLever.indexOf(Items[i].level) === -1) {
                    arrLever.push(Items[i].level)
                }
            }
        }
        arrLever.sort((a, b) => a - b)
        this.state = {
            showForm: false,
            arrLever: arrLever,
            addItemName: '',
            addItemLevel: 0,
            sortType: '',
            sortOder: '',
            items: Items,
            searchValue: '',
            isSearch: false,
            itemsSearch: []
        }
    }
    handleShowForm = () => {
        this.setState({
            showForm: !this.state.showForm,
        })
    }
    handleAddInputChange = (value) => {
        this.setState({
            addItemName: value
        })
    }
    handleAddSelectChange = (value) => {
        this.setState({
            addItemLevel: value
        })
    }
    
    addItem = () => {
        if((Items.some((item) => {return item.name == this.state.addItemName})) || this.state.addItemName == '') {
            alert('Trường dữ liệu không được bỏ trống hoặc trùng');
        } else {
            let newItem = {
                id: (Items.length + 1).toString(),
                name: this.state.addItemName,
                level: +this.state.addItemLevel
            }
            Items.push(newItem);
            this.setState({
                addItemName: '',
                addItemLevel: 0,
                showForm: false
            })
        }
    }
    handleCloseAddForm = () => {
        this.setState({showForm: false})
    }
    handleSort = (sortType, sortOder) => {
        let {items} = this.state;
        this.setState({
            sortType: sortType,
            sortOder: sortOder
        });
        if (sortType === 'name' && sortOder === 'asc'){
            items = items.sort((a, b) => {
                if(a.name < b.name) {return -1}
            })
        };
        if (sortType === 'name' && sortOder === 'desc'){
            items = items.sort((a, b) => {
                if(a.name < b.name) {return -1}
            }).reverse()
        };
        if (sortType === 'level' && sortOder === 'asc'){
            items = items.sort((a, b) => {
                return a.level - b.level
            })
        };
        if (sortType === 'level' && sortOder === 'desc'){
            items = items.sort((a, b) => {
                return a.level - b.level
            }).reverse();
        };
    }
    handleSearch = (value) => {
        let {items} = this.state;
        let itemsSearch = [...items]
        let newItems = [];
        if (value.length <= 0) {
            this.setState({isSearch:false})
        } else {
            value.toLowerCase();
            for (let item of itemsSearch) {
                if (item.name.toLowerCase().indexOf(value) > -1 ){
                    newItems.push(item)
                }
            }
            this.state.isSearch = true;
        }
        this.setState({
            itemsSearch: newItems,
            searchValue: value
        })
    }
    render() {
        return (
            <div className="container">
                <Title/>
                <div className="row">
                    <div className="col-xs-9 col-sm-4 col-md-4 col-lg-4">
                        <Search handleSearch={this.handleSearch} searchValue={this.state.searchValue}/>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Sort sortType={this.state.sortType} sortOder={this.state.sortOder} handleSort={this.handleSort}/>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block marginB10 m-mt-16"
                            onClick={this.handleShowForm}>
                            {(this.state.showForm) ? 'Close form' : 'Add item'}
                        </button>
                    </div>
                </div>
                <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <Form showForm={this.state.showForm}
                        arrLever={this.state.arrLever}
                        handleAddInputChange={this.handleAddInputChange}
                        handleAddSelectChange={this.handleAddSelectChange}
                        handleCloseAddForm={this.handleCloseAddForm}
                        addItem={this.addItem}
                        />
                    </div>
                </div>
                <ListItem isSearch={this.state.isSearch} itemsSearch={this.state.itemsSearch}/>     
            </div>
        );
    }
}

export default App;
 