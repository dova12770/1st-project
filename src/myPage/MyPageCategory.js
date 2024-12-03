
import React from 'react';

function MyPageCategory({ name, index, selectedIndex, setSelectedIndex }) {
    const isSelected = selectedIndex === index;
    return (
        <li 
            onClick={() => setSelectedIndex(index)}
            style={{
                borderBottom: isSelected ? '2px solid #40A578' : 'none',
                cursor: 'pointer',
                textalign: 'center'
            }}
        >
            {name}
        </li>
    );
}

export default MyPageCategory;
