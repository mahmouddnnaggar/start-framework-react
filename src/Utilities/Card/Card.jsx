import Layer from '../Layer/Layer';

export default function Card({
  imgSrc,
  imgAlt,
  isInModal = false,
  isThereLayer = true,
  handleOpenAndCloseModal,
}) {
  return (
    <div
      style={isInModal ? { width: 'calc(250px + 25vw)' } : {}}
      className={`card relative rounded overflow-hidden`}
      onClick={e => {
        e.stopPropagation();
        handleOpenAndCloseModal(e);
      }}
    >
      {isThereLayer && <Layer />}
      <img src={imgSrc} alt={imgAlt} className="w-full " />
    </div>
  );
}
