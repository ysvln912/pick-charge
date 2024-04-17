import ArrowDownIconBtn from "@/components/common/iconButtons/ArrowDownIconBtn";
import EmptyLikeIconBtn from "@/components/common/iconButtons/EmptyLikeIconBtn";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";

export default function RegisterCharger() {
  return (
    <div>
      <TopNavigationBar
        layout="between"
        leftBtn={<ArrowDownIconBtn onClick={() => console.log("버튼이벤트")} />}
        rightBtn={<EmptyLikeIconBtn />}
        text="송정동 공영주차장"
      />
    </div>
  );
}
