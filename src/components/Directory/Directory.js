import DirectoryItem from '../../components/DirectoryItem/DirectoryItem'
import { DirectoryContainer } from './Directory.styles';

const categories = [
    {
        id: 1,
        title: 'My Profile',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
        id: 2,
        title: 'My Products',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
        id: 3,
        title: 'My Services',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
        id: 4,
        title: 'More Product suggestions',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
        id: 5,
        title: 'My support',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    }
];

const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    );
}

export default Directory