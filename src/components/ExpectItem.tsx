interface ExpectItemProp {
  title: string;
  imageUrl: string;
}

function ExpectItem({ title, imageUrl }: ExpectItemProp) {
  return (
    <div className="expectItem">
      <div className="expect-item-image-container">
        <img src={imageUrl} alt={`${title} Image`} />
      </div>

      <div className="expect-item-text-container">

      <h2>{title}</h2>
      </div>
    </div>
  );
}

export default ExpectItem;
