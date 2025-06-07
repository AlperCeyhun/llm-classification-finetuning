'use client';

import React from 'react';

interface DisplayRowProps {
  row: any;
}

const DisplayRow: React.FC<DisplayRowProps> = ({ row }) => {
  if (!row) return null;

  return (
    <div className="mt-8 w-full max-w-2xl bg-gray-900 text-white rounded p-4 shadow">
      <div className="mb-2"><span className="font-semibold">prompt:</span>
        <pre className="whitespace-pre-wrap break-all text-xs bg-gray-800 p-2 rounded">{row.prompt}</pre>
      </div>
      <div className="mb-2"><span className="font-semibold">response_a:</span>
        <pre className="whitespace-pre-wrap break-all text-xs bg-gray-800 p-2 rounded">{row.response_a}</pre>
      </div>
      <div className="mb-2"><span className="font-semibold">response_b:</span>
        <pre className="whitespace-pre-wrap break-all text-xs bg-gray-800 p-2 rounded">{row.response_b}</pre>
      </div>
      <div className="mb-2"><span className="font-semibold">winner_model_a:</span> {row.winner_model_a}</div>
      <div className="mb-2"><span className="font-semibold">winner_model_b:</span> {row.winner_model_b}</div>
      <div className="mb-2"><span className="font-semibold">winner_tie:</span> {row.winner_tie}</div>
    </div>
  );
};

export default DisplayRow;