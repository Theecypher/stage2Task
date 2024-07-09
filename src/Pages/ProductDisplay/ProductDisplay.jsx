import img1 from "../../assets/image 23.png";
import Button from "../../component/Button";

const ProductDisplay = () => {
  return (
    <div>
      <img src={img1} className="w-full" alt="" />

      <div>
        <p>Samsung Galaxy </p>
        <p>price</p>
        <p>Dimensions: </p>
        <p>Display Size: </p>
        <p>Camera: </p>

        <h3>Select:</h3>

        <div>
          <p>Storage size</p>
          <div className="flex">
            <div className="">
              <input type="checkbox" />
              <label htmlFor="">64GB RAM</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">128GB RAM</label>
            </div>
          </div>
        </div>

        <div>
          <p>Colour</p>
          <div className="flex">
            <div>
              <input type="checkbox" />
              <label htmlFor="">Pink</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Black</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Gold</label>
            </div>
          </div>
        </div>

        <Button className="w-[170px]" text="PROCEED TO CART" />
      </div>
    </div>
  );
};

export default ProductDisplay;
