import React, { Component } from 'react'
import DataFilms from '../Data/DataFilms.json'
import Avg from '../StyleFilm/StyleFilm.module.css'
export default class RenderWithMap extends Component {
    renderFilm = () => {
        return DataFilms.map((film, index) => {
            return <div className='col-2 py-2' key={index}>
                <div className="card text-white bg-secondary" style={{width: '250px'}}>
                    <img style={{height:'300px'}} className="card-img-top" src={film.hinhAnh} alt={film.tenPhim}/>
                    <div className="card-body">
                        <h4 className="card-title" style={{fontSize: '17px', height: '35px'}}>{film.tenPhim}</h4>
                        <p className="card-text" style={{fontSize: '13px', height: '50px'}}>
                            {film.moTa.length>80 ? <p>{film.moTa.substring(0,80)}...</p> : <p> {film.moTa}</p>}
                        </p>
                    </div>
                </div>
            </div>
        });
    }


    render() {
        return (
            <div className={Avg.RWM}>
                <div className={Avg.bg_rgba}>
                    <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgba(87,83,149,.8)' }}>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='container-fluid mt-5'>
                        <div className='row'>
                            {this.renderFilm()}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
