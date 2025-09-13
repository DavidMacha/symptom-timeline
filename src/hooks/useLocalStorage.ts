import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initialValue;
      
      const parsed = JSON.parse(item);
      
      // Handle date conversion for symptom timeline data
      if (key === 'symptomTimeline' && Array.isArray(parsed)) {
        return parsed.map((entry: any) => ({
          ...entry,
          date: new Date(entry.date),
          symptoms: entry.symptoms.map((symptom: any) => ({
            ...symptom,
            startDate: new Date(symptom.startDate),
            endDate: symptom.endDate ? new Date(symptom.endDate) : undefined
          }))
        }));
      }
      
      return parsed;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}