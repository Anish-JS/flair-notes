import { useArchive } from "../../store/archive-context";
import MenuBar from "../NoteListing/SideMenu/MenuBar";
import Card from "../Card/Card";

const Archives = () => {
  const { archivesList } = useArchive();

  const archives = archivesList.map((item) => (
    <Card key={item["_id"]} data={item} inArchive={true} />
  ));
  return (
    <>
      <div className="section-div bg-dull">
        <div className="left-section md-padding bg-dull">
          <MenuBar />
        </div>
        <div className="right-section editor-container sm-padding bg-dull">
          {archivesList.length !== 0 ? (
            <div className="responsive-grid-items">{archives}</div>
          ) : (
            "There are no archived notes present"
          )}
        </div>
      </div>
    </>
  );
};

export default Archives;
