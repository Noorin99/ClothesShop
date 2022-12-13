import './cart-icon.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { ToggleCartContext } from '../../contexts/toggleCart';

const CartIcon = () => {
    const {setToggle, toggle} = useContext(ToggleCartContext);
    const {quantity} = useContext(ToggleCartContext);

    const handleToggle = () => {
      setToggle(!toggle);
    }
    
    return(
        <div className='cart-icon-container' onClick={handleToggle}>
          <ShoppingIcon className='shopping-icon' />
          <span className='item-count'>{quantity}</span>
        </div>
    )
};

export default CartIcon;
