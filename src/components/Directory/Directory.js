import DirectoryItem from '../../components/DirectoryItem/DirectoryItem'
import { DirectoryContainer } from './Directory.styles';

const categories = [
    {
        id: 1,
        title: 'My Profile',
        imageUrl: 'https://i.postimg.cc/x89Njhnj/profile.png',
    },
    {
        id: 2,
        title: 'My Products',
        imageUrl: 'https://i.postimg.cc/G26rqsgW/products.png',
    },
    {
        id: 3,
        title: 'My Services',
        imageUrl: 'https://i.postimg.cc/cJYcvqyf/services.png',
    },
    {
        id: 4,
        title: 'More Product suggestions',
        imageUrl: 'https://i.postimg.cc/Z5sQ8zMg/suggestion.png',
    },
    {
        id: 5,
        title: 'My support',
        imageUrl: 'https://i.postimg.cc/3w3sBZ84/support.png',
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