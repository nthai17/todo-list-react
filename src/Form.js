import React, {Component} from 'react';
class Form extends Component {
    renderLevel(){
        let {arrLever} = this.props;
        return arrLever.map((level)=>{
            switch (level) {
                case 0:
                    return <option value={level}>Small</option>
                case 1:
                    return <option value={level}>Medium</option>
                default:
                    return <option value={level}>Hight</option>  
            }
        })
    }
    render(){
        if (this.props.showForm === false) return null;
        return(
            <form className="form-inline flex-j-b" onSubmit={()=>this.props.addItem()}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Item Name" 
                    onChange={(event)=> this.props.handleAddInputChange(event.target.value)}/>
                </div>
                <div className="form-group">
                    <select className="form-control"
                    onChange={(event) => this.props.handleAddSelectChange(event.target.value)}>
                        {this.renderLevel()}
                    </select>
                </div>
                <button type="button" className="btn btn-primary"
                onClick={() => this.props.addItem()}>Submit</button>
                <button type="button" className="btn btn-default"
                onClick={() => this.props.handleCloseAddForm()}>Cancel</button>
            </form>
        )
    }
}

export default Form;