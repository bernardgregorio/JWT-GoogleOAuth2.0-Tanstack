import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const InputCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const handleUpdate = () => {
    table.options?.meta.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(getValue());
  }, [getValue]);

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleUpdate}
        className="w-full p-2 rounded-md border-none   focus:bg-white"
      />
    </>
  );
};

export default InputCell;
