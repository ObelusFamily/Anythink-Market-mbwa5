import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchTitleTerm: state.itemList.searchTitleTerm,
  };
};

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    if (props.searchTitleTerm && props.searchTitleTerm.length > 0) {
      return (
        <div id="empty" className="py-4 no-items">
          No items found for &ldquo;<strong>{props.searchTitleTerm}</strong>
          &rdquo;.
        </div>
      );
    }
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default connect(mapStateToProps)(ItemList);
