import './Suggestion.css';

import React from 'react'

const Suggestion = () => {
    return (
        <div>
            <h1>More Product Suggestions</h1>
            <table>
                <tr>
                    <th>Plan Name</th>
                    <th>Coverages</th>
                </tr>


                <tr>
                    <td>Life Protect Pro</td>
                    <td>Increasing Term Life Insurance</td>
                </tr>

                <tr>
                    <td>Life Protect Silver</td>
                    <td>Whole Life Insurance with money back</td>
                </tr>

                <tr>
                    <td>Life Protect Gold</td>
                    <td>Universal Life Insurance with money back</td>
                </tr>

                <tr>
                    <td>L   ife New Jeevan Anand</td>
                    <td>Endowment plan</td>
                </tr>

                <tr>
                    <td>MetLife Term Plan</td>
                    <td>Term Life Insurance with money back</td>
                </tr>

            </table>
        </div>
    )
}

export default Suggestion