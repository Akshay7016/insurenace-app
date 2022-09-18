import './Products.css'

const Products = () => {
    return (
        <div className='table-container'>
            <h1>My Products</h1>
            <table>
                <tr>
                    <th>Name of the Product</th>
                    <th>Product UIN</th>
                </tr>
                

                <tr>
                    <td>Metlife AXA Life Jan Suraksha</td>
                    <td>130N040V02</td>
                </tr>

                <tr>
                    <td>Metlife Bima Kavach Yojana</td>
                    <td>109N005V01</td>
                </tr>
            </table>
        </div>
    )
}

export default Products