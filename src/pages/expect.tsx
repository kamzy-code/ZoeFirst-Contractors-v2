import ExpectItem from "../components/ExpectItem";
import expectData from "../data/expectData";
import "../styles/Expect.css";

function ExpectPage() {
  return (
    <div className="expect-container">
        <div className="expect-background-image"></div>
      <div className="expect-overlay-container">
        <div className="expect-content">

          <div className="expect-header">
            <div className="expect_header-stroke"> </div>
            <h2> WHAT TO EXPECT</h2>
            <div className="expect_header-stroke"> </div>
          </div>

          <h2> Why choose Zoefirst Contractors</h2>

          <div className="expect-item-list">
            {expectData.map((item, index)=>{
                return <ExpectItem key={index} title={item.title} imageUrl={item.imageUrl}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpectPage;
