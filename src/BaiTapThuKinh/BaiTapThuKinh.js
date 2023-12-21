import React, { Component } from 'react'
import style from '../StyleFilm/StyleFilm.module.css'
import DataGlasses from '../Data/dataGlasses.json'
import '../BaiTapThuKinh/BaiTapThuKinh.css'

export default class BaiTapThuKinh extends Component {
    state ={
        glassesCurrent: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = ()=> {
        return DataGlasses.map((glasses, index) => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return <img onClick={()=>{this.changeGlasses(glasses)}} className='ml-2 p-2 border border-width-1' style={{width: '110px', cursor: 'pointer'}} key={index} src={glasses.url}/>
        })
    }

    changeGlasses = (newGlasses) =>{
        this.setState({
            glassesCurrent: newGlasses,
        })
    }



    render() {
        const keyFrame = `@keyframes animateChangeGlasses${Date.now()} {
                from{
                    width: 0;
                    transform: rotate(45deg);
                    opacity: 0;
                }
                to{
                    width: 150px;
                    transform: rotate(0deg);
                    opacity: .8;
                }
            }`

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: .8,
            transform: 'rotate(0deg)',
            animation: `animateChangeGlasses${Date.now()} 1s`,
        }
        const infoGlasses = {
            top: '200px',
            right: '20px',
            left: '270px',
            backgroundColor: 'rgba(255,127,0,.5)',
            textAlign: 'left',
            paddingLeft: '15px',
            height: '105px',
            paddingRight: '5px',
        }
        return (
            <div className={style.bg_glasses}>
                <style>
                    {keyFrame}
                </style>
                <div className={style.bg_rgba_glas}>
                    <h3 className='text-center text-light p-5' style={{ backgroundColor: 'rgba(0,0,0,.3)' }}> TRY GLASSES APP ONLINE</h3>
                    <div className='container'>
                        <div className='row mt-5 text-center'>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='position-absolute' style={{ width: '250px' }} src='./glassesImage/model.jpg' alt='model' />
                                    <img style={styleGlasses} className='position-absolute glassesStyle' src={this.state.glassesCurrent.url} alt='v1' />
                                    <div className='position-absolute' style={infoGlasses}>
                                        <p style={{color: '#AB82FF', fontSize:'17px', marginBottom: 0}} className='font-weight-bold'>{this.state.glassesCurrent.name}</p>
                                        <span style={{fontSize: '13px', fontWeight: '400'}}>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img style={{ width: '250px' }} src='./glassesImage/model.jpg' alt='model' />
                            </div>
                        </div>
                    </div>
                    {/* Div chua cac kinh dc chon*/}
                    <div className='bg-light container text-center mt-5 d-flex justify-content-center p-5'>
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div>
        )
    }
}
