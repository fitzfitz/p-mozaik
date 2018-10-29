import React, { Component } from 'react'

export default class HajiTerm extends Component {
    render() {
        return (
            <div id="HajiTerm" className="tab-pane active">
                <div className="row">
                    <div className="col-lg-12 pb-4">
                        <h5 className="text-blue font-weight-bold">Syarat Pendaftaran</h5>
                        <ul>
                            <li>Biaya pendaftaran (uang muka) sebesar USD 500</li>
                            <li>Pelunasan 1 bulan sebelum tanggal keberangkatan</li>
                            <li>Passport asli yang masih berlaku minimal 8 bulan dari jadwal keberangkatan</li>
                            <li>Nama di passport minimal 3 suku kata, Contoh: "PRIMA NURUL QUMARIAH"</li>
                            <li>Foto copy KTP, Kartu Keluarga, Akte Lahir, Buku Nikah (pasangan suami & istri)</li>
                            <li>Pas foto berwarna dengan latar belakang putih, tampak wajah 80%, ukuran 4x6 sebanyak 4 lembar</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pb-4">
                        <h5 className="text-blue font-weight-bold">Biaya Tidak Termasuk (Exclude)</h5>
                        <ul>
                            <li>Airport tax & perlengkapan umrah Rp 1.200.000</li>
                            <li>Buku kesehatan meningitis Rp 460.000</li>
                            <li>Penambahan nama pada passport Rp 250.000</li>
                            <li>Kelebihan bagasi</li>
                            <li>Max 30 Kg (International)</li>
                            <li>Max 20 Kg (Domestic)</li>
                            <li>Tour tambahan diluar program</li>
                            <li>Pengeluaran pribadi (laundry, telepon, dll)</li>
                            <li>Biaya transportasi dari daerah ke Jakarta</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pb-4">
                        <h5 className="text-blue font-weight-bold">Biaya Termasuk (Include)</h5>
                        <ul>
                            <li>Tiket pesawat Economy Class (PP)</li>
                            <li>Akomodasi hotel berbintang</li>
                            <li>Transportasi bus AC selama perjalanan visa umrah</li>
                            <li>Guide/Muthawwif yang berpengalaman</li>
                            <li>Makan 3x sehari menu indonesia</li>
                            <li>Air zam-zam 5 liter</li>
                            <li>Asuransi kematian</li>
                            <li>Lounge di bandara Soekarno Hatta</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
