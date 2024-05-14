import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { Link } from 'react-router-dom';

const FoodDisplay = ({ category, searchTerm }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoodList = food_list.filter(
    (item) =>
      (category === 'All' || category === item.category) &&
      (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          <Link to={`/product/${item._id}`} key={index}>
            <FoodItem id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
