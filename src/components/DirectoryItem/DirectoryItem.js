import { useNavigate } from 'react-router-dom';

import { DirectoryItemContainer, BackgroundImage, Body } from './DirectoryItem.styles'

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate("profile");


    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />

            <Body>
                <h2>{title}</h2>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;