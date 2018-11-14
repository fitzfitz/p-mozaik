import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class HajiItinerary extends Component {
    render() {
        return (
            <div id="HajiItinerary" className="tab-pane active">
                <h6 className="text-center">Kolom di bawah ini adalah itinerary lengkap untuk program haji tahun 2018 / 1439 H</h6>
                <div style={{ overflow: 'auto' }}>
                    <Table className="text-center fitz-style">
                        <thead>
                            <tr>
                            <th width="1%">Nomor</th>
                            <th width="1%">Hari</th>
                            <th width="1%">Masehi</th>
                            <th width="1%">Hijriyah</th>
                            <th width="1%">Route</th>
                            <th width="1%">Kegiatan</th>
                            <th width="1%">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Hari ke 01</td>
                            <td>SENIN</td>
                            <td>06 Agustus 2018</td>
                            <td>24 Dzulqo'dah 1439</td>
                            <td>Jakarta &gt; Jeddah</td>
                            <td>Niat Umrah</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 02</td>
                            <td>SELASA</td>
                            <td>07 Agustus 2018</td>
                            <td>25 Dzulqo'dah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 03</td>
                            <td>RABU</td>
                            <td>08 Agustus 2018</td>
                            <td>26 Dzulqo'dah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 04</td>
                            <td>KAMIS</td>
                            <td>09 Agustus 2018</td>
                            <td>27 Dzulqo'dah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>Ziarah Makkah</td>
                            <td>Bus AC Kontrak</td>
                        </tr>
                        <tr>
                            <td>Hari ke 05</td>
                            <td>JUMAT</td>
                            <td>10 Agustus 2018</td>
                            <td>28 Dzulqo'dah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 06</td>
                            <td>SABTU</td>
                            <td>11 Agustus 2018</td>
                            <td>29 Dzulqo'dah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 07</td>
                            <td>MINGGU</td>
                            <td>12 Agustus 2018</td>
                            <td>1 Dzulhijjah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 08</td>
                            <td>SENIN</td>
                            <td>13 Agustus 2018</td>
                            <td>2 Dzulhijjah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 09</td>
                            <td>SELASA</td>
                            <td>14 Agustus 2018</td>
                            <td>3 Dzulhijjah 1439</td>
                            <td>- Makkah Sofwah<br />Royal Orchid</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 10</td>
                            <td>RABU</td>
                            <td>15 Agustus 2018</td>
                            <td>4 Dzulhijjah 1439</td>
                            <td>- Makkah &gt;<br />Apartement Transit</td>
                            <td>PINDAH KE TRANSIT</td>
                            <td>Bus AC Kontrak</td>
                        </tr>
                        <tr>
                            <td>Hari ke 11</td>
                            <td>KAMIS</td>
                            <td>16 Agustus 2018</td>
                            <td>5 Dzulhijjah 1439</td>
                            <td>-Apartement Transit</td>
                            <td>Pembinaan</td>
                            <td>Hotel Transit</td>
                        </tr>
                        <tr>
                            <td>Hari ke 12</td>
                            <td>JUMAT</td>
                            <td>17 Agustus 2018</td>
                            <td>6 Dzulhijjah 1439</td>
                            <td>-Apartement Transit</td>
                            <td>Pembinaan</td>
                            <td>Hotel Transit</td>
                        </tr>
                        <tr>
                            <td>Hari ke 13</td>
                            <td>SABTU</td>
                            <td>18 Agustus 2018</td>
                            <td>7 Dzulhijjah 1439</td>
                            <td>-Apartement Transit</td>
                            <td>Pembinaan</td>
                            <td>Hotel Transit</td>
                        </tr>
                        <tr>
                            <td>Hari ke 14</td>
                            <td>MINGGU</td>
                            <td>19 Agustus 2018</td>
                            <td>8 Dzulhijjah 1439</td>
                            <td>-Apartement &gt; Mina Maktab 112</td>
                            <td>Menuju Mina</td>
                            <td>Hari Tarwiyah</td>
                        </tr>
                        <tr>
                            <td>Hari ke 15</td>
                            <td>SENIN</td>
                            <td>20 Agustus 2018</td>
                            <td>9 Dzulhijjah 1439</td>
                            <td>-Arofah Maktab &gt; VVIP 112</td>
                            <td>Hari Haji</td>
                            <td>Wukuf</td>
                        </tr>
                        <tr>
                            <td>Hari ke 16</td>
                            <td>SELASA</td>
                            <td>21 Agustus 2018</td>
                            <td>10 Dzulhijjah 1439</td>
                            <td>-Mudzalifah &gt; Mina</td>
                            <td>Bermalam di Mudzalifah</td>
                            <td>Mabit Musdalifah</td>
                        </tr>
                        <tr>
                            <td>Hari ke 17</td>
                            <td>RABU</td>
                            <td>22 Agustus 2018</td>
                            <td>11 Dzulhijjah 1439</td>
                            <td>-Mina Maktab VVIP 112</td>
                            <td>Melontar di Mina</td>
                            <td>Hari Tasyrik 1</td>
                        </tr>
                        <tr>
                            <td>Hari ke 18</td>
                            <td>KAMIS</td>
                            <td>23 Agustus 2018</td>
                            <td>12 Dzulhijjah 1439</td>
                            <td>-Mina Maktab VVIP 112</td>
                            <td>Melontar di Mina</td>
                            <td>Hari Tasyrik 2</td>
                        </tr>
                        <tr>
                            <td>Hari ke 19</td>
                            <td>JUMAT</td>
                            <td>24 Agustus 2018</td>
                            <td>13 Dzulhijjah 1439</td>
                            <td>-Mina &gt; Apartement Transit</td>
                            <td>Melontar di Mina</td>
                            <td>TAWAF IFADHOH</td>
                        </tr>
                        <tr>
                            <td>Hari ke 20</td>
                            <td>SABTU</td>
                            <td>25 Agustus 2018</td>
                            <td>14 Dzulhijjah 1439</td>
                            <td>-Transit &gt; Madinah</td>
                            <td>Menuju Madinah</td>
                            <td>tawaf wada'</td>
                        </tr>
                        <tr>
                            <td>Hari ke 21</td>
                            <td>MINGGU</td>
                            <td>26 Agustus 2018</td>
                            <td>15 Dzulhijjah 1439</td>
                            <td>Madinah</td>
                            <td>Ziarah Dalam</td>
                            <td>Ziarah Masjid Nabawi</td>
                        </tr>
                        <tr>
                            <td>Hari ke 22</td>
                            <td>SENIN</td>
                            <td>27 Agustus 2018</td>
                            <td>16 Dzulhijjah 1439</td>
                            <td>Madinah</td>
                            <td>Ziarah Luar</td>
                            <td>Ziarah Kota Madinah</td>
                        </tr>
                        <tr>
                            <td>Hari ke 23</td>
                            <td>SELASA</td>
                            <td>28 Agustus 2018</td>
                            <td>17 Dzulhijjah 1439</td>
                            <td>Madinah</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 24</td>
                            <td>RABU</td>
                            <td>29 Agustus 2018</td>
                            <td>18 Dzulhijjah 1439</td>
                            <td>Madinah</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Hari ke 25</td>
                            <td>KAMIS</td>
                            <td>30 Agustus 2018</td>
                            <td>19 Dzulhijjah 1439</td>
                            <td>-Madinah &gt; Jakarta</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}