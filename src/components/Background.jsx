import { useEffect, useState } from "react";

import { PiYarn, PiPalette, PiHeart } from "react-icons/pi";
import { GiSewingNeedle } from "react-icons/gi";

const icons = [PiYarn, GiSewingNeedle, PiPalette, PiHeart];

const StaticBackground = () => {
    const [iconGrid, setIconGrid] = useState([]);

    useEffect(() => {
        const rows = 5;
        const cols = 5;
        const spacing = 20;

        let newGrid = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                newGrid.push({
                    id: `${i}${j}`,
                    Icon: icons[(i + j) % icons.length],
                    x: j * spacing + (i % 2 === 0 ? spacing / 2 : 0),
                    y: i * spacing,
                    size: Math.random() * 1.5 + 1,
                    opacity: Math.random() * 0.3 + 0.2,
                });
            }
        }
        setIconGrid(newGrid);
    }, []);

    return (
        <div className="top-0 left-0 w-full h-full overflow-hidden pointer-events-none fixed -z-10">
            {iconGrid.map(({ id, Icon, x, y, size, opacity }) => (
                <Icon
                    key={id}
                    className="absolute text-highlight"
                    style={{
                        left: `${x}vw`,
                        top: `${y}vh`,
                        fontSize: `${size}rem`,
                        opacity: opacity,
                        transform: "rotate(" + Math.random() * 360 + "deg)",
                    }}
                />
            ))}
        </div>
    );
};

export default StaticBackground;