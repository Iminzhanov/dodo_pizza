import React from 'react';
import classNames from 'classnames';


const Types = ({ types }) => {
    const [activeItem, setActiveItem] = React.useState(types[0]);
    const typesItem = ['Тонкое', 'Традиционное'];
    const handleClickActive = (index) => setActiveItem(index);
    return (
        <ul>
            {typesItem.map((item, index) => (
                <li 
                onClick={() => handleClickActive(index)}
                className={classNames({
                                          active: activeItem === index,
                                          disable: !types.includes(index),
                })}>
                    {item}
                    </li>
            ))}
        </ul>
    );
};

export default Types;