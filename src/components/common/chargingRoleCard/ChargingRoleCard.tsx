import * as S from "./ChargingRoleCard.style";

export default function ChargingRoleCard({ role }: { role: string }) {
    return (
        <S.RoleContainer role={role === "개인" ? "individual" : "public"}>
            {role}
        </S.RoleContainer>
    );
}
