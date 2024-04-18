import * as S from "./ChargingRoleCard.style";

export default function ChargingRoleCard({ role }: { role: "개인" | "공공" }) {
    return (
        <S.RoleContainer className={role === "개인" ? "individual" : "public"}>
            {role}
        </S.RoleContainer>
    );
}
