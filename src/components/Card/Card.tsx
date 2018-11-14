import React from 'react';
import { CardSvgUse } from './svg/CardSvgUse';
import { Card as CardData } from '../../models';
import styles from './Card.module.scss';

export interface CardProps {
  card: CardData
};

const Card: React.SFC<CardProps> = ({ card }) => {
  const viewBoxWidth = 169;
  const viewBoxHeight = 244;
  const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;

  return (
    <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className={styles.card}>
        <CardSvgUse card={card} />
      </svg>
    </div>
  );
}

export { Card };
