interface Column {
  key: string;
  label: string;
}

interface Row {
  [key: string]: string;
}

interface Props {
  columns: Column[];
  rows: Row[];
  title?: string;
}

export default function DataTable({ columns, rows, title }: Props) {
  return (
    <div className="no-break">
      {title && (
        <h4 className="text-sm font-semibold text-[#1e3a5f] mb-3">{title}</h4>
      )}
      <div className="overflow-hidden rounded-lg border border-[#d9e0ed]">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#1e3a5f]">
              {columns.map((col) => (
                <th key={col.key} className="px-3 py-2.5 text-left font-semibold text-white first:rounded-r-none last:rounded-l-none">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-[#d9e0ed] even:bg-[#f8fafc]">
                {columns.map((col) => (
                  <td key={col.key} className="px-3 py-2.5 text-[#475569]">{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
