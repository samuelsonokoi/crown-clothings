import React from "react";
import "./collection-preview.styles.scss";
import CollectionItemComponent from "../collection-item/collection-item.component";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItemComponent key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};
