import React, { FC, ReactNode } from 'react';

type GridProps = {
    columns: number;
    children: ReactNode;
};

export const Grid: FC<GridProps> = ({ children,columns }:{children: ReactNode,columns:number}) => {
    return (
        <div
            style={{
                width: 'fit-content',
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridGap: 10,
                maxWidth: '800px',
                margin: '40px auto',
            }}
        >
            {children}
        </div>
    );
};

export default Grid;
