import React from "react";
import PropTypes from 'prop-types';


class EditBurgerForm extends React.Component {
    static propTypes = {
        burger: PropTypes.shape({
            image: PropTypes.string, 
            name: PropTypes.string, 
            price: PropTypes.number, 
            desc: PropTypes.string, 
            status: PropTypes.string
        }),
        index: PropTypes.string,
        updateBurger: PropTypes.func,
        deleteBurger: PropTypes.func
    }

    handleChange = (event) => {
        const updatedBurger = {
            ...this.props.burger,
            [event.currentTarget.name]: (event.currentTarget.name === 'price') ? parseFloat(event.currentTarget.value) || 0 : event.currentTarget.value
        }
        this.props.updateBurger(this.props.index, updatedBurger)
    }
    render(){
        return(
            <div className="burger-edit">
                
                <input onChange={this.handleChange} value={this.props.burger.name} name='name' type='text' /> 
                <input onChange={this.handleChange} value={this.props.burger.price} name='price' type='text' />
                <select 
                    onChange={this.handleChange}
                    value={this.props.burger.status} 
                    name='status' className="status"
                    >
                    <option value='available'>Доступно</option>
                    <option value='unavailable'>Убрать из меню</option>
                </select>
                <textarea onChange={this.handleChange} value={this.props.burger.desc} name='desc' />
                <input onChange={this.handleChange} value={this.props.burger.image} name='image' type='text' />
                <button onClick={() => this.props.deleteBurger(this.props.index)}>
                    Удалить из меню
                </button>
            </div>
        )
    }
}

export default EditBurgerForm;