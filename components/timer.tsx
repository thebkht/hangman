import React, { useState, useEffect } from 'react';
import { useSudokuContext } from '@/components/sudoku-provider';

/**
 * React component for the Timer in Status Section.
 * Uses the 'useEffect' hook to update the timer every minute.
 */
export const Timer = () => {
     let [currentTime, setCurrentTime] = useState(new Date());
     let { timeGameStarted, won } = useSudokuContext();

     useEffect(() => {
          if (!won)
               setTimeout(() => tick(), 1000);
     });

     function tick() {
          setCurrentTime(new Date());
     }

     function getTimer() {
          let secondsTotal = Math.floor((currentTime.getTime() - new Date(timeGameStarted).getTime()) / 1000);
          if (secondsTotal <= 0)
               return '00:00';
          let hours = Math.floor(secondsTotal / 3600);
          let minutes = Math.floor((secondsTotal - (hours * 3600)) / 60);
          let seconds = secondsTotal - (hours * 3600) - (minutes * 60);
          let stringTimer = '';

          stringTimer += hours ? (hours < 10 ? '0' : '') + hours + ':' : '';
          stringTimer += minutes ? (minutes < 10 ? '0' : '') + minutes + ':' : '00:';
          stringTimer += seconds < 10 ? '0' + seconds : seconds;

          return stringTimer;
     }

     return (
          <div className="status__time">{getTimer()}
          </div>
     )
}