import Papa, { ParseResult } from 'papaparse';

export const fetchCsvData = async (url: string): Promise<string[][]> => {
  try {
    const response = await fetch(url);
    const csvText = await response.text();

    return new Promise<string[][]>((resolve) => {
      Papa.parse<string[]>(csvText, {
        complete: (results: ParseResult<string[]>) => {
          resolve(results.data);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching CSV:', error);
    return [];
  }
};