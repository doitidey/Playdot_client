import "@/components/month/Month.scss";
import Comment from "@/components/comment/Comment";
import Winner from "./Winner";
import Loser from "./Loser";

function Month() {
  return (
    <section className="month-block">
      <div className="month-block__container">
        <div className="month-block__container__content">
          <Winner />
          <Loser />
        </div>
      </div>
      {/* <Comment /> */}
    </section>
  );
}

export default Month;
