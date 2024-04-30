import * as S from "./ReviewBottomSheet.style";

import { useNavigate } from "react-router-dom";
import EditIcon from "@/components/common/icons/EditIcon";
import DeleteIcon from "@/components/common/icons/DeleteIcon";
import BottomSheet from "@/components/common/bottomSheet/BottomSheet";
import ConfirmDialog from "@/components/common/confirmDialog/ConfirmDialog";

import { useToggle } from "@/hooks/useToggle";
import { useToast } from "@/hooks/useToast";
export interface ReviewBottomSheetProps {
  close: () => void;
  open: boolean;
  chargerId: number;
  reviewId: number;
}

export default function ReviewBottomSheet({
  close,
  open,
  chargerId,
  reviewId,
}: ReviewBottomSheetProps) {
  const navigate = useNavigate();
  const { triggerToast } = useToast();

  const handleDelete = () => {
    try {
      // 삭제 api
      triggerToast("삭제되었어요.", "success");
      navigate(`/charger/${chargerId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    navigate(`/review/${reviewId}/edit`);
  };

  const {
    open: confirmOpen,
    close: confirmClose,
    isOpen: confirmIsOpen,
  } = useToggle(false);

  return (
    <>
      <BottomSheet close={close} open={open}>
        <S.List>
          <S.Item onClick={handleEdit}>
            <EditIcon />
            <p>수정하기</p>
          </S.Item>
          <S.Item onClick={confirmOpen}>
            <DeleteIcon width="15" height="15" color="#000" />
            <p>삭제하기</p>
          </S.Item>
        </S.List>
      </BottomSheet>
      {confirmIsOpen && (
        <ConfirmDialog
          title="삭제할까요?"
          type="confirm"
          confirmOnClick={handleDelete}
          confirmButton="확인"
          cancelButton="취소"
          cancelOnClick={confirmClose}
        />
      )}
    </>
  );
}
