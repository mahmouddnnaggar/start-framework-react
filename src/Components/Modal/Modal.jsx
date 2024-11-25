import Card from '../../Utilities/Card/Card';

export default function Modal({ imgSrc }) {
  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center backdrop-blur-[2px] z-50 bg-opacity-35 select-none">
      <div className="modal-overlay"></div>
      <Card
        imgSrc={imgSrc}
        imgAlt={'one of our products'}
        isInModal={true}
        isThereLayer={false}
      />
    </div>
  );
}
