import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ClearIcon from "@mui/icons-material/Clear";

// eslint-disable-next-line react/prop-types
const DateCell = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const date = data.getValue();
  // eslint-disable-next-line react/prop-types
  const { updateData } = data.table.options.meta;

  // eslint-disable-next-line react/display-name, react/prop-types
  const DateCustomInput = forwardRef(({ value, onClick, clearDate }, ref) => (
    <div onClick={onClick} ref={ref}>
      {value ? (
        <>
          {
            <div>
              {value}
              <ClearIcon
                fontSize="sm"
                className="text-red-950 ml-4"
                onClick={(e) => {
                  e.stopPropagation();
                  clearDate();
                }}
              />
            </div>
          }
        </>
      ) : (
        <CalendarTodayIcon />
      )}
    </div>
  ));

  return (
    <>
      <DatePicker
        wrapperClassName="cursor-pointer text-center w-full flex justify-center items-center"
        dateFormat="dd/MM/yyyy"
        selected={date}
        // eslint-disable-next-line react/prop-types
        onChange={(date) => updateData(data.row.index, data.column.id, date)}
        customInput={
          <DateCustomInput
            clearDate={() => updateData(data.row.index, data.column.id, null)}
          />
        }
      />
    </>
  );
};

export default DateCell;
