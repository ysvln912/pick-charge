import { Link } from "react-router-dom";
import * as S from "./MenuCard.style";

interface MenuCardProps {
    title: string;
    describe: string;
    path: string;
    shape: 'fullRectangle' | 'halfSquare' | 'halfRectangle';
    children? :React.ReactNode;
}

export default function MenuCard({
    title,
    describe,
    path,
    shape,
}: MenuCardProps) {
    return (
        <Link to={path}>
            <S.MenuContainer shape={shape}>
                <S.MenuTitle>{title}</S.MenuTitle>
                <S.Menudesc>{describe}</S.Menudesc>
            </S.MenuContainer>
        </Link>
    );
}
