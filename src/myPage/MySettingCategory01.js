import React from 'react';

function MySettingCategory01({ name, index, selectedIndex, setSelectedIndex }) {
    const isSelected = selectedIndex === index;
    return (
        <li 
            onClick={() => setSelectedIndex(index)}
            style={{
                borderBottom: isSelected ? '2px solid #F08080' : 'none',
                cursor: 'pointer',
                textalign: 'center'
            }}
        >
            {name}
        </li>
    );
}

export default MySettingCategory01;