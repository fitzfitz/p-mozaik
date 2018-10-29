import React, { Component } from 'react';
import Adv1 from '../../assets/images/icons/Org solat jumat.png';
import Adv2 from '../../assets/images/icons/5 pasti.png';
import Adv3 from '../../assets/images/icons/program terbaik.png';
import Adv4 from '../../assets/images/icons/Oke jempol.png';
import Adv5 from '../../assets/images/icons/money.png';

export default class HomeAdvantage extends Component {
    render() {
        return (
            <div className="container-fluid home-section">
                <div className="container">
                    <h1 className="big-title">Bedanya Kami Dengan Yang Lain</h1>
                    <div className="row justify-content-center">

                        <div className="home-advantage col-md-4 col-xs-12">
                            <div className="card card-wrap">
                                <div className="card-image">
                                    <img src={Adv1} height={150} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="text-blue caps card-text">2X Shalat Jum'at</h5>
                                    <p className="card-text">Karena setiap keberangkatannya dipastikan hari kamis, Jadi mendapatkan shalat jum'at 2x pada saat tiba di Arab dan pulang ke Indonesia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-advantage col-md-4 col-xs-12">
                            <div className="card card-wrap">
                                <div className="card-image">
                                    <img src={Adv2} height={150} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="text-blue caps card-text">5 Pasti</h5>
                                    <p className="card-text">PASTI Travelnya <br />PASTI Harganya <br />PASTI Jadwalnya<br />PASTI Pesawatnya<br />PASTI Hotelnya</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-advantage col-md-4 col-xs-12">
                            <div className="card card-wrap">
                                <div className="card-image">
                                    <img src={Adv3} height={150} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="text-blue caps card-text">Program Terbaik</h5>
                                    <p className="card-text">Program umrah yang kami sediakan tidak hanya sekedar city tour ke Madinah maupun Mekkah. Tetapi kami juga memiliki program unggulan seperti adanya ta'alim dan didampingi oleh muttawif yang dibawa langsung oleh Mozaik</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-advantage col-md-4 col-xs-12">
                            <div className="card card-wrap">
                                <div className="card-image">
                                    <img src={Adv4} height={150} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="text-blue caps card-text">Pelayanan Berkualitas</h5>
                                    <p className="card-text">Karena kami melayani dengan hati, bukan janji.</p>
                                </div>
                            </div>
                        </div>
                        <div className="home-advantage col-md-4 col-xs-12">
                            <div className="card card-wrap">
                                <div className="card-image">
                                    <img src={Adv5} height={150} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="text-blue caps card-text">Harga Terjangkau</h5>
                                    <p className="card-text">Harga yang kami tentukan, menyesuaikan pelayanan yang kami berikan, karena yang kami jual adalah kualitas pelayanan dan kepercayaan kepada jamaah.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
