// Item.tsx
import React, { forwardRef, HTMLAttributes, CSSProperties } from 'react';

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
    id: string;
    withOpacity?: boolean;
    isDragging?: boolean;
    itemColor?:string; // Nueva propiedad para distinguir cartas en la fundación
};


export const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, withOpacity, isDragging, itemColor, style, ...props }, ref) => {
    const inlineStyles: CSSProperties = {
        opacity: withOpacity ? '0.5' : '1',
        //transformOrigin: '50% 50%',
        height: '15vmin',
        width: '15vmin',
        borderRadius: '10px',
        cursor: isDragging ? 'grabbing' : 'grab',
        color:'black',
        fontSize:'xxx-large',
        backgroundColor: itemColor, // Cambiar color de fondo para cartas en la fundación
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //boxShadow: isDragging ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px' : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
        //transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        border:id===""? 'dashed 4px':'solid 2px',
        userSelect: 'none',
        ...style,
    };

    return <div ref={ref} style={inlineStyles} {...props}>{id}</div>;
});

export default Item;

export const generateRandomIntenseColor = function() {
    const minBrightness = 90;
    const hue = Math.floor(Math.random() * 360);
    const saturation = 40;//Math.floor(Math.random() * 50 + 50);

    const brightness = minBrightness;
    

    const c = (saturation / 100) * (brightness / 100);
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = brightness / 100 - c;

    let r;
    let g;
    let b;

    if (0 <= hue && hue < 60) {
      [r, g, b] = [c, x, 0];
    } else if (60 <= hue && hue < 120) {
      [r, g, b] = [x, c, 0];
    } else if (120 <= hue && hue < 180) {
      [r, g, b] = [0, c, x];
    } else if (180 <= hue && hue < 240) {
      [r, g, b] = [0, x, c];
    } else if (240 <= hue && hue < 300) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `rgb(${r},${g},${b})`;
  };

  