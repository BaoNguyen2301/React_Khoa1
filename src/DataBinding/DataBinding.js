import React, { Component } from 'react'
import Footer from '../Home/Footer';

export default class DataBinding extends Component {
    //Tao thuoc tinh
    name = 'nguyen chi bao';
    student = {
        name: 'mun mun',
        age: '15',
    }
    //Binding phuong thuc (ham cua lop doi tuong)
    // Tat ca render phai tra ve component (jsx)
    renderImage = ()=>{
        return <img src='https://th.bing.com/th/id/R.60855edb791eb60451d530e8fa9a7c33?rik=2ZmmqfvQY3y4Og&riu=http%3a%2f%2fwww.lcbo.com%2fcontent%2fdam%2flcbo%2fproducts%2f191874.jpg%2fjcr%3acontent%2frenditions%2fcq5dam.web.1280.1280.jpeg&ehk=R436rVMglhnKhZx5BDQ1rkOEQBA%2fJudwGSK0xl3zJFs%3d&risl=&pid=ImgRaw&r=0'/>
    }
    renderMultiComponent = () => {
        return <Footer/>
    }



  render() {

    //Bien cua ham render k su dung dc cho ham khac
    const school = 'cyber';
    const student1 = {
        name: 'mun beo',
        age: '15',
    }

    return (
      <div>
        <h1>
            React function component data binding
        </h1><hr/>
        {this.name} - school: {school}
        <h1>hello {this.student.name} - age: {this.student.age}</h1>
        <h1>hello {student1.name} - age: {student1.age}</h1>
        <h3>Binding function</h3>
        {this.renderImage()}
        {this.renderMultiComponent()}
      </div>
    )
  }
}
