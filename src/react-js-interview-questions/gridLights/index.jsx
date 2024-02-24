import {useState} from "react";
import "./styles.css";

function Cell({filled, onClick, disabled}) {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        let newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat().filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{gridTemplateColumns: `repeat(${config[0].length},1fr)`}}
      >
        {config.flat().map((val, idx) => {
          return val ? (
            <Cell
              key={idx}
              filled={order.includes(idx)}
              onClick={() => activateCells(idx)}
              disabled={order.includes(idx) || isDeactivating}
            />
          ) : (
            <span key={idx}></span>
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
