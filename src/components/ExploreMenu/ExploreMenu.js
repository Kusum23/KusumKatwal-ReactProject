import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assests/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">choose your favourite food from the top list counted here,
            you might find awesome and excellent food here. Please come and have a look here. 
            Who knows what is left here to eat. You may find your favourite food here so 
            please help yourself.
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu