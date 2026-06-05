import { useEffect, useState } from "react";

const MouseGlow = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () =>
            window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: `radial-gradient(
          500px at ${position.x}px ${position.y}px,
          rgba(36, 111, 111, 0.4),
          transparent 80%
        )`,
            }}
        />
    );
};

export default MouseGlow;