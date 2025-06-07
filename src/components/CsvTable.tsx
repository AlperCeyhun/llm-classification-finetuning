'use client';

import React, { useEffect, useState } from 'react';

interface CsvRow {
  [key: string]: string | number;
}

const CsvTable = () => {
  const [data, setData] = useState<CsvRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/csv')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching CSV:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (data.length === 0) return <p className="text-center">No data found.</p>;

  const headers = Object.keys(data[0]);

  return (
    <div className="w-full overflow-x-auto p-4">
      <table className="min-w-[800px] w-full table-auto border border-gray-300 rounded-lg shadow-sm text-sm">
        <thead className="bg-gray-200 sticky top-0 z-10">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border px-4 py-2 text-left font-semibold text-gray-700 whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-gray-50">
              {headers.map((key) => (
                <td
                  key={key}
                  className="border px-4 py-2 max-w-xs truncate hover:whitespace-normal hover:bg-white transition"
                  title={String(row[key])}
                >
                  {`${row[key]}`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvTable;