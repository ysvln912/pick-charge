import { Link } from "react-router-dom";
import * as S from "./MenuCard.style";

interface MenuCardProps {
    title: string;
    describe: string;
    path: string;
    shape: "fullRectangle" | "halfSquare" | "halfRectangle";
    children?: React.ReactNode;
}

export default function MenuCard({
    title,
    describe,
    path,
    shape,
    children,
}: MenuCardProps) {
    return (
        <Link to={path}>
            <S.MenuContainer shape={shape}>
                <div>
                    <S.MenuTitle>{title}</S.MenuTitle>
                    <S.Menudesc>{describe}</S.Menudesc>
                </div>
                <div className="icon">{children}</div>
            </S.MenuContainer>
        </Link>
    );
}
