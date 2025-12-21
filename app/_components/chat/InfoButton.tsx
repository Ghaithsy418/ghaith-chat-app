import { iconClassName } from "@/app/_helpers/classNames";
import { useSettings } from "@/app/_store/useSettings";
import { HiOutlineInformationCircle } from "react-icons/hi2";

function InfoButton() {
  const { dispatch, currRightWindow } = useSettings();
  return (
    <HiOutlineInformationCircle
      onClick={() =>
        dispatch({
          type: "currWindowIs",
          payload: currRightWindow === "infos" ? "" : "infos",
        })
      }
      className={iconClassName}
    />
  );
}

export default InfoButton;
