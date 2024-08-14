import React from 'react';

function Loader() {
  return (
    <div style={styles.container}>
      <div className="spinner"></div>
      <style>
        {`
          .spinner {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: #474bff;
            -webkit-mask: repeating-conic-gradient(#0000 0deg, #000 1deg 70deg, #0000 71deg 90deg),
                          radial-gradient(farthest-side, #0000 calc(100% - 10.1px), #000 calc(100% - 9px));
            -webkit-mask-composite: destination-in;
            mask-composite: intersect;
            animation: spinner-mv2oco 1s infinite;
          }

          @keyframes spinner-mv2oco {
            to {
              transform: rotate(.5turn);
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'  // Ensure the container takes full viewport height
  }
};

export default Loader;
