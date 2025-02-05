import { format } from 'date-fns';

interface Props {
  columns: TableColumn[];
  data: any[];
}

export interface TableColumn {
  label: string;
  key: string;
  render?: (row: any) => any;
  format?: 'text' | 'date' | 'datetime';
}

export function Table({ columns, data }: Props) {
  return (
    <div className="rounded-lg overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="text-left text-sm font-medium text-bunker-500 tracking-wider p-3 py-2">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.key} className="p-3">
                  {renderColumn(column, row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderColumn(column: TableColumn, row: any) {
  if (column.render) {
    return column.render(row);
  } else if (column.format === 'date') {
    return formatDate(row[column.key]);
  } else if (column.format === 'datetime') {
    return formatDateTime(row[column.key]);
  } else {
    return row[column.key];
  }
}

function formatDate(date: string) {
  return format(new Date(date), 'PP');
}

function formatDateTime(date: string) {
  return format(new Date(date), 'PPpp');
}
