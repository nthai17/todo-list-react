import React, {Component} from 'react';
class Sort extends Component {
    renderSort = () => {
        let {sortType, sortOder} = this.props;
        if (sortOder !== '' && sortType !== '') {
            return(
                <span className="label label-success label-medium text-uppercase hide-on-mobile">
                    {sortType} - {sortOder}
                </span>
            )
        }
    }
    render(){
        return(
            <div className="dropdown isFlexbox">
                <button className="btn btn-default dropdown-toggle mr-7 m-ml--8" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort by <span className="caret" />
                </button>
                <ul className="dropdown-menu m-l--78">
                    <li onClick={()=>this.props.handleSort('name', 'asc')}>
                        <a href="#" role="button">Name ASC</a></li>
                    <li onClick={()=>this.props.handleSort('name', 'desc')}>
                        <a href="#" role="button">Name DESC</a></li>
                    <li role="separator" className="divider" />
                    <li onClick={()=>this.props.handleSort('level', 'asc')}>
                        <a href="#" role="button">Level ASC</a></li>
                    <li onClick={()=>this.props.handleSort('level', 'desc')}>
                        <a href="#" role="button">Level DESC</a></li>
                </ul>
                {this.renderSort()}
            </div>
        )
    }
}

export default Sort;