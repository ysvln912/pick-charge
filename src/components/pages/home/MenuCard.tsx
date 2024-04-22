import { Link } from "react-router-dom";


import * as S from "./MenuCard.style";

interface MenuCardProps {
    title: string;
    describe: string;
    path: string;
}

export default function MenuCard({
    title,
    describe,
    path,
}: MenuCardProps) {
    return (
        <Link to={path}>
            <S.MenuContainer>
                <S.MenuTitle>{title}</S.MenuTitle>
                <S.Menudesc>{describe}</S.Menudesc>
            </S.MenuContainer>
        </Link>
    );
}
