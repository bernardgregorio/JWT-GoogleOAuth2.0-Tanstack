import { data, status as STATUSES } from "../../constants/constant";
import Tanstack from "../../components/table/Tanstack";
import InputCell from "../../components/table/InputCell";
import SelectCell from "../../components/table/SelectCell";
import DateCell from "../../components/table/DateCell";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
    footer: "ID",
    cell: (props) => <div className="text-center">{props.getValue()}</div>,
  },
  {
    accessorKey: "tasks",
    header: "Task",
    footer: "Task",
    cell: InputCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: "Status",
    cell: (props) => <SelectCell data={props} selection={STATUSES} />,
  },
  {
    accessorKey: "dueDate",
    header: "Due",
    footer: "Due",
    cell: (props) => {
      return (
        <div className="flex flex-row justify-center items-center">
          <DateCell data={props} />
        </div>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    footer: "Notes",
    cell: (row) => <p>{row.getValue()}</p>,
    enableSorting: false,
  },
];

const Users = () => {
  return (
    <div>
      <Tanstack DATA={data} columns={columns} />
    </div>
  );
};

export default Users;
