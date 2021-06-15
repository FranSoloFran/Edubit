import React, { useEffect, useState } from "react";

// Limite de tiempo inicial: 5 minutos
let limitTime = new Date(new Date().getTime() + 300000);

export const TradingCountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = limitTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      limitTime = new Date(new Date().getTime() + 300000);
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      Los valores se actualizarán en:{" "}
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>Actualizando valores</span>
      )}
    </div>
  );
};
