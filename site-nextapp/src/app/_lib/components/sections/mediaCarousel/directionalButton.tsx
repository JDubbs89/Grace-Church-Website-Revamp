type DirectionalButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export default function DirectionalButton(
  { direction, onClick }: DirectionalButtonProps
) {
  return (
    <button
      className={`directional-button directional-button-${direction}`}
      onClick={onClick}
    >
      {direction === 'left' ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      )}
    </button>
  );
}