import FrameComponent from "../components/FrameComponent";
import RightForm from "../components/RightForm";
import "./ResetPasssword.css";

const ResetPasssword = () => {
  return (
    <div className="reset-passsword">
      <FrameComponent
        frameHeaderTop="0"
        frameHeaderPosition="sticky"
        frameDivPadding="unset"
      />
      <main className="reset-password-form">
        <section className="frame-parent">
          <div className="adopt-a-pet-amico-1-wrapper">
            <img
              className="adopt-a-pet-amico-1"
              loading="lazy"
              alt=""
              src="/adopt-a-petamico-1@2x.png"
            />
          </div>
          <RightForm />
        </section>
      </main>
    </div>
  );
};

export default ResetPasssword;