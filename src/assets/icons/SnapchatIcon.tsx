import React from 'react';

interface IconProps {
  size?: number | string;
  color?: string;
}

const SnapChatIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
    >
      {/* Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com */}
      <path 
        d="M 12 2 C 6 2 6 8 6 8 L 6 9 C 6 9 5.9775 8.9980469 5.9375 8.9980469 C 5.5975 8.9980469 4 9.0685313 4 10.394531 C 4 11.939531 5.6968438 12 5.9648438 12 L 6 12 C 6 13 4.3476719 14.170406 3.2636719 14.441406 C 2.2536719 14.833406 2.013 15.502766 2 16.009766 C 1.992 16.312766 2.0654687 16.557344 2.1054688 16.652344 C 2.4824687 17.537344 3.6022188 17.994141 4.6992188 17.994141 C 4.7372188 19.433141 5.7757031 20 6.4707031 20 C 7.2647031 20 8.1054688 19.611328 8.1054688 19.611328 C 8.1464688 19.645328 9.425 21 12 21 C 14.575 21 15.854484 19.645328 15.896484 19.611328 C 15.896484 19.611328 16.734297 20 17.529297 20 C 18.224297 20 19.262781 19.433141 19.300781 17.994141 C 20.397781 17.994141 21.517531 17.537344 21.894531 16.652344 C 21.934531 16.557344 22.008 16.312766 22 16.009766 C 21.987 15.502766 21.746328 14.833406 20.736328 14.441406 C 19.652328 14.170406 18 13 18 12 L 18.035156 12 C 18.303156 12 20 11.939531 20 10.394531 C 20 9.0685312 18.4025 8.9980469 18.0625 8.9980469 C 18.0225 8.9980469 18 9 18 9 L 18 8 C 18 8 18 2 12 2 z M 12 4 C 15.653 4 15.985 7.073 16 8 L 16 12 C 16 13.864 17.746984 15.297141 19.208984 15.994141 L 17.351562 15.994141 L 17.300781 17.943359 C 17.300781 17.953359 17.298828 17.962656 17.298828 17.972656 C 17.096828 17.931656 16.864375 17.854875 16.734375 17.796875 L 15.605469 17.275391 L 14.636719 18.058594 L 14.556641 18.125 L 14.494141 18.183594 C 14.408141 18.266594 13.599 19 12 19 C 10.401 19 9.5909063 18.267594 9.5039062 18.183594 L 9.4277344 18.109375 L 9.3613281 18.056641 L 8.3964844 17.292969 L 7.2773438 17.791016 C 7.1393438 17.853016 6.9041719 17.931656 6.7011719 17.972656 C 6.7001719 17.963656 6.6992187 17.953359 6.6992188 17.943359 L 6.6484375 15.996094 L 4.7910156 15.996094 C 6.2530156 15.298094 8 13.864 8 12 L 8 8 C 8 7.332 8.193 4 12 4 z"
      />

    </svg>
  );
};

export default SnapChatIcon;