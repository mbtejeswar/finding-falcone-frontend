import React from 'react';
import {useSelect} from 'downshift';
import PropTypes from 'prop-types';

// import DownArrowIcon from '../../assets/arrow-down.png';

import styles from './styles.module.css';

function Dropdown({
  items,
  label,
  placeholder,
  className,
  onChange,
  name,
  ...props
}) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: arg => {
      if (onChange) {
        onChange({
          target: {
            type: 'select',
            value: arg.selectedItem,
            name,
          },
        });
      }
    },
  });

  return (
    // <div className={`${styles['dropdown']} ${className}`} {...props}>
    //   <label className={styles['label']} {...getLabelProps()}>
    //     {label || ''}
    //   </label>
    //   <button
    //     className={styles['select-button']}
    //     type="button"
    //     {...getToggleButtonProps()}
    //   >
    //     <div>{selectedItem || placeholder || ''}</div>
    //     <img src={DownArrowIcon} alt="" />
    //   </button>
    //   <ul className={styles['dropdown-list']} {...getMenuProps()}>
    //     {isOpen &&
    //       items.map((item, index) => (
    //         <li
    //           className={styles['dropdown-list-item']}
    //           key={`${item}${index}`}
    //           {...getItemProps({item, index})}
    //         >
    //           {item}
    //         </li>
    //       ))}
    //   </ul>
    // </div>
  );
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export {Dropdown};
