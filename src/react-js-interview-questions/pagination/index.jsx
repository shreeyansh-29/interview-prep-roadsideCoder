import {useState, useEffect} from "react";
import "./styles.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${pageNo * 10 - 10}`
    );
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(data.total / 10);
    }
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== pageNo
    ) {
      setPageNo(selectedPage);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNo]);

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((ele, idx) => {
            return (
              <span key={ele.id} className="product__item">
                <img src={ele.thumbnail} alt={ele.id} />
                <span>{ele.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(pageNo - 1)}
            className={pageNo <= 1 ? "pagination__disabled" : ""}
          >
            Prev
          </span>
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              onClick={() => selectPageHandler(i + 1)}
              className={pageNo === i + 1 ? "pagination__selected" : ""}
            >
              {i + 1}
            </span>
          ))}
          <span
            onClick={() => selectPageHandler(pageNo + 1)}
            className={pageNo >= totalPages ? "pagination__disabled" : ""}
          >
            Next
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
