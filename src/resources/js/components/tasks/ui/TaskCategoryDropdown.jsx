import React, { useState } from 'react';

const TaskCategoryDropdown = ({ categories, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // ドロップダウンボタン押した時の挙動
  const handleClick = (event) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({ top: rect.bottom, left: rect.left });
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  const dropdownOptions = [
    { value: null, label: 'すべて' },
    ...Object.entries(categories).map(([id, name]) => ({
      value: id,
      label: name,
    })),
  ];

  return (
    <>
      <div className="relative">
        <a onClick={handleClick} className="cursor-pointer text-blue-600 underline">
          種別
        </a>

        {isOpen && (
          <ul
            className="fixed bg-white shadow-md rounded-md z-50 mt-2"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            {dropdownOptions.map(({ value, label }) => (
              <li key={value ?? 'all'}>
                <a
                  onClick={() => handleSelect(value)}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TaskCategoryDropdown;
