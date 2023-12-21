import React, { Component } from 'react'

export default class RenderWithLoop extends Component {
    productList = [
        { id: 1, name: 'black car', price: 1000, img: './carbasic/products/black-car.jpg' },
        { id: 2, name: 'red car', price: 2000, img: './carbasic/products/red-car.jpg' },
        { id: 3, name: 'silver car', price: 3000, img: './carbasic/products/silver-car.jpg' },
        { id: 4, name: 'steel car', price: 4000, img: './carbasic/products/steel-car.jpg' },
    ]

    renderTable = () => {
        // let mangTrComponent = [];
        // for (let i = 0; i < this.productList.length; i++){
        //     let product = this.productList[i];

        //     let trJSX = (
        //     <tr key={i}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img style={{width: '100px'}} src={product.img}/></td>
        //     </tr>
        //     )
        let mangTrComponent = this.productList.map((product, i) => {
            return <tr key={i}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} style={{ width: "200px" }} alt={product.id}/></td>
            </tr>
        })
        return mangTrComponent;
    }
    render() {
        return (
            <div className='container-fluid'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>

            </div>
        )
    }
}
