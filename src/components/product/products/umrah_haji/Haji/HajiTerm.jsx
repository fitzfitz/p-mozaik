import React, { Component } from 'react'

export default class HajiTerm extends Component {
    render() {
        return (
            <div id="UmrahGroupSK" className="tab-pane active">
                <div className="row">
                    <div className="col-lg-6 pb-4">
                        <h5 className="text-blue font-weight-bold">Syarat Pendaftaran</h5>
                        <ul>
                            <li>Mengisi Formulir Yang Tersedia</li>
                            <li>Photo Copy KTP 6, KK, Akta Lahir, Ijazah, Paspor</li>
                            <li>Photo Berwarna Latar Belakang Putih Fokus 80% Wajah<br />Ukuran 3 x 4 = 38 lbr, 4 x6 = 8 lbr</li>
                            <li>Uang Pendaftaran USD 4,000</li>
                            <li>Pendaftaran Sesuai Aturan Depag</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pb-4">
                        <h5 className="text-blue font-weight-bold">Pembatalan dikenakan potongan</h5>
                        <ul>
                            <li>Setelah Mendaftar IDR 1,000,000</li>
                            <li>Setelah Dapat Kuota USD 500</li>
                            <li>Setelah Pelunasan Haji 75% dari Biaya Paket</li>
                            <li>Setelah Ramadhan 95% dari Biaya Paket</li>
                            <li>Jamaah Yang Wafat Akan Di Asuransikan</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pb-4">
                        <h5 className="text-blue font-weight-bold">Biaya Tidak Termasuk (Exclude)</h5>
                        <ul>
                            <li>Pengeluaran Pribadi (Telp, Cucian, Kursi Dorong)</li>
                            <li>Makan Diluar Program</li>
                            <li>Kelebihan Bagasi Max 30 Kg/orang</li>
                            <li>Hadyu Haji Tamattu  SR 600</li>
                            <li>Pemeriksaan Kesehatan di RSU (Buku Kesehatan /Vaksin)</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pb-4">
                        <h5 className="text-blue font-weight-bold">Biaya Termasuk (Include)</h5>
                        <ul>
                            <li>Tiket Economy Class by Saudia Airline Direct</li>
                            <li>Hotel/Akomodasi</li>
                            <li>Makan 3 Kali Sehari</li>
                            <li>Pembimbing, Ziarah dan Perlengkapan Haji, Manasik Haji</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
