import React, { Component } from 'react'
import InfoCar from '../Data/arrayFeatures.json'
import DataWheel from '../Data/wheels.json'

export default class BaiTapChonXeNangCao extends Component {
    state = {
        CarCurrent: {
            id: 1,
            title: "Crystal Black",
            type: "Pearl",
            img: "./images/icons/icon-black.jpg",
            srcImg: "images-black/images-black-1/",
            color: "Black",
            price: "19,550",
            engineType: "In-Line 4-Cylinder",
            displacement: "1996 cc",
            horsepower: "158 @ 6500 rpm",
            torque: "138 lb-ft @ 4200 rpm",
            redline: "6700 rpm",
            wheels: [
                {
                    idWheel: 1,
                    srcImg: "images-black/images-black-1/"
                },
                {
                    idWheel: 2,
                    srcImg: "images-black/images-black-2/"
                },
                {
                    idWheel: 3,
                    srcImg: "images-black/images-black-3/"
                }
            ]
        }
    }


    changeCar = (newCar) => {
        this.setState({
            CarCurrent: newCar,
        })
    }

    changWheel = (newWheel)=>{
        //tim trong state hien tai (this.state.CarCurrent.wheels)
        let obWheel = this.state.CarCurrent.wheels.find(item => item.idWheel === newWheel.idWheel);
        if (obWheel !== -1){
            //lay ra source hinh anh tu this.state.CarCurrent.wheels
            this.setState({
                CarCurrent: {...this.state.CarCurrent, srcImg:obWheel.srcImg}
            })
        }
    }


    renderColorList = () => {
        return InfoCar.map((icar, index) => {
            return <div onClick={()=>{this.changeCar(icar)}} className='row border border-light pt-2 pb-2' style={{ cursor: 'pointer' }}>
                <img className='col-2' src={icar.img} alt={icar.color} />
                <div className='col-10 text-left'>
                    <h5 className='pt-3'>{icar.title}</h5>
                    <p>{icar.type}</p>
                </div>
            </div>
        });
    }

    renderWheelList = () => {
        return DataWheel.map((wheel, index) => {
            return <div onClick={()=>{this.changWheel(wheel)}} key={index} className='row border border-light pt-2 pb-2' style={{ cursor: 'pointer' }}>
                <img className='col-2' src={wheel.img} alt={index} />
                <div className='col-10 text-left'>
                    <h5>{wheel.title}</h5>
                    <p>{wheel.price}</p>
                </div>
            </div>
        })
    }

    

    componentDidMount = () => {
        //day la phuong thuc co san cua component tu dong thuc thi sau khi render duoc goi, luu y : componentDivMount chi chay 1 lan dau tien sau khi render thuc hien
        // <script src="https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy"></script>
        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.5/js-cloudimage-360-view.min.js';

        document.querySelector('#appendScript').appendChild(tagScript);
    }
    
    componentDidUpdate = () =>{
        document.getElementById('carCurrent').innerHTML = '';

        let tagScript = document.createElement('script');
        tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';

        document.querySelector('#appendScript').appendChild(tagScript);
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7">
                            <div className='model'>
                                <div
                                    id="carCurrent"
                                    className="cloudimage-360"
                                    data-folder={ "./images/" + this.state.CarCurrent.srcImg}
                                    data-filename="civic-{index}.jpg"
                                    data-amount="8"
                                ></div>
                                {/* <img style={{ width: "100%" }} src='../images/images-black/images-black-1/civic-1.jpg' alt="black_car" /> */}
                                
                            </div>
                            <div id='appendScript'>
                                    
                                </div>
                            <div className="card text-dark mt-2">
                                <h2 className='card-header text-dark'>Exterior Color</h2>
                                <table className="table border border-color-light">
                                    <tbody>
                                        <tr>
                                            <th>Color</th>
                                            <th>black</th>
                                        </tr>
                                        <tr>
                                            <th>Color</th>
                                            <th>asdasd</th>
                                        </tr>
                                        <tr>
                                            <th>Color</th>
                                            <th>asdasd</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* <img style={{ width: "50%", position: 'absolute' }} src='../images/icons/icon-wheel-1.jpg'/> */}
                        </div>
                        <div className='col-5'>
                            <div className="card text-dark">
                                <h4 className='card-header text-primary font-weight-bold'>Exterior Color</h4>
                                <div className="card-body">
                                    {this.renderColorList()}
                                </div>
                                <h4 className='card-header text-primary mt-3 font-weight-bold'>Wheel</h4>
                                <div className='card-body'>
                                    {this.renderWheelList()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
