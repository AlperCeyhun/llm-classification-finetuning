'use client';

import React, { useEffect, useState } from 'react';
import { fetchCsvData } from '@/util/api/getCsv';

interface CsvTableProps {
  url: string; // e.g., "/data/example.csv"
}

const DisplayCsv: React.FC<CsvTableProps> = ({ url }) => {
  const [data, setData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCsv = async () => {
      try {
        const csv = await fetchCsvData(url);
        setData(csv);
      } catch (error) {
        console.error('Failed to load CSV data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCsv();
    console.log(loadCsv)
  }, [url]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-4">Loading CSV data...</p>;
  }

  if (data.length === 0) {
    return <p className="text-center text-red-500 mt-4">No data found.</p>;
  }

  return (
    <div className="p-4 font-mono text-xs whitespace-pre">
      {data.map((row, rowIndex) => row.join(", ")).join("\n")}
    </div>
  );
};

export default DisplayCsv;