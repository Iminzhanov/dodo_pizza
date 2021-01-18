import React from 'react';
import classNames from 'classnames';


const  Sizes = ([ sizes ]) => {
    const [activeItem, setActiveItem] = React.useState(0);
    const sizesItems = [26, 30, 40];
    const handleClickActive =(index) => setActiveItem(index);
    return (
        <ul>
            {sizeItems.map((item, index) => (
                <li
                onClick={() => handleClickActive(index)}
                className={classNames({
                    active: index === activeItem && sizes.includes(item),
                    disable: !sizes.icludes(item),
                })}>
                    {item}
                </li>
            ))}
        </ul>
    );
            };

export default Sizes;