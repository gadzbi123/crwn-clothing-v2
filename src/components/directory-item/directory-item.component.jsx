import { DirectoryItemContainer } from "./directory-item.styles.jsx";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer to={"shop/" + title}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
