import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Issue Date</th>
                </tr>
                <tr>
                    <td>Aaditya</td>
                    <td>Data Mining-13826</td>
                    <td>12/12/2022</td>
                </tr>
                <tr>
                    <td>Ujjwal</td>
                    <td>Data & Computer Communication-5575</td>
                    <td>10/7/2023</td>
                </tr>
                <tr>
                    <td>Ranvir Singh</td>
                    <td>Data stucture-33087</td>
                    <td>15/9/2022</td>
                </tr>
                <tr>
                    <td>Akhil</td>
                    <td>Operating System-23587</td>
                    <td>02/9/2021</td>
                </tr>
                <tr>
                    <td>kopal</td>
                    <td>COA-24534</td>
                    <td>21/7/2023</td>
                </tr>
                <tr>
                    <td>Akshita</td>
                    <td>DCCN-67854</td>
                    <td>02/7/2023</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
