import { Link } from "react-router-dom";
import React from "react";
import "./blok.css";
import { blogList } from "../config/data";
import Chip from "../components/common/Chip";

export default function Blogku() {
  let tmptitem;
  blogList.map((item) => {
    if (item.id === 2) {
      tmptitem = item;
    }
    return {
      tmptitem,
    };
  });

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      <div className="blog-wrap">
        <header>
          <p className="blog-date">Published {tmptitem.createdAt}</p>
          <h1>{tmptitem.title}</h1>
          <div className="blog-subCategory">
            {tmptitem.subCategory.map((category, i) => (
              <div key={i}>
                <Chip label={category} />
              </div>
            ))}
          </div>
        </header>
      </div>
      <div className="conten">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <h3>Latar Belakang</h3>
        <p>
          <b>system design</b> adalah proses mengartikan elemen sistem seperti
          architecture (arsitektur), module (modul) dan component (komponen),
          interface (antarmuka) yang berbeda dari komponen tersebut dan data
          yang melewati sistem itu. <br />
          <br />
          Seperti yang dijelaskan dari sumber Situs Technopedia, desain sistem
          ini dimaksudkan untuk memenuhi kebutuhan dan persyaratan khusus dari
          bisnis atau organisasi melalui rekayasa sistem yang koheren dan
          berjalan dengan baik.
          <br />
          <br />
        </p>
        <h3>Pengertian Class Diagram</h3>
        <p>
          Class diagram adalah bagian dari UML (Unified Modeling Language).
          Dimana class diagram ini menggambarkan struktur dan deskripsi serta
          hubungan antar class diagram tersebut. Class diagram merupakan alur
          database dalam sebuah progam. Dimana pada setiap laporan sistem yang
          hendak dibuat, class diagram harus diikutsertakan, karena dari sinilah
          kita dapat melihat aliran data sebuah program.
        </p>
        <h3>Fungsi Class Diagram</h3>
        <ul>
          <h3 className="text__p">Berikut fungsi-fungsi class diagram</h3>
          <li>Menggambarkan model data untuk sebuah program.</li>
          <li>Memudahkan untuk mempelajari skema aplikasi.</li>
          <li>Menyatakan secara visual apa yang dibutuhkan oleh sistem.</li>
          <li>Class diagram sebagai bahan acuan dalam membuat program.</li>
        </ul>
        <h3>Manfaat</h3>
        <ul>
          <h3 className="text__p">Berikut manfaat dari Class diagram: </h3>
          <li>
            Dibuatnya Class diagram bisa membantu dalam pembuatan sebuah bagan
            yang tampak jelas dan sangat terperinci. Kemudian, kita harus
            memperhatikan kode spesifik yang diperlukan oleh suatu program.
          </li>
          <li>
            Class diagram juga bisa dibuat menjadi tampilan visual dengan
            kebutuhan spesifik dari sebuah informasi. Kemudian, semua bisnis
            juga mendapatkan berbagai informasi secara merata.
          </li>
          <li>
            Dapat memberikan gambaran umum tentang pemodelan data untuk sistem
            informasi, baik yang sederhana maupun yang kompleks.
          </li>
        </ul>
        <h3>Simbol Class Diagram</h3>
        <img src={tmptitem.cover} alt="content" className="image__content" />
        <p>
          Seperti yang telah diulas sebelumnya, bahwa dalam Class diagram kita
          bisa melihat gambaran tentang hubungan antara kelas dalam suatu
          sistem. Gambaran tersebut akan dibuat dalam bentuk simbol – simbol
          Class diagram. Berikut ulasannya:
        </p>
        <ul>
          <li>
            Garis lurus (Generalization), menunjukan hubungan objek anak
            (descendent) dan induk (ancestor) dalam hal berbagai perilaku dan
            struktur datanya
          </li>
          <li>
            Nary Association, suatu upaya untuk menghindari asosiasi yang
            melebihi 2 objek
          </li>
          <li>
            Class, suatu himpunan dari objek-objek dalam sistem, yang kemudian
            berbagi atribut dan operasi yang persis sama
          </li>
          <li>
            Collaboration, berupa urutan aksi-aksi dalam sistem agar
            menghasilkan sebuah hasil yang terukur
          </li>
          <li>
            Realization, sebuah operasi yang benar-benar dilakukan oleh objek
            dalam sistem
          </li>
          <li>
            Dependency, suatu hubungan pada perubahan yang terjadi dalam
            independent yang mempengaruhi elemen yang tidak mandiri
          </li>
          <li>
            Association, bagian yang menghubungkan objek yang satu dengan yang
            lainnya
          </li>
        </ul>
        <h3>Kesimpulan</h3>
        <p>
          Struktur Class diagram merupakan bagian dari sistem UML atau unified
          modeling language. UML merupakan sebuah blueprint dari software atau
          piranti lunak untuk membuat sistem teknologi informasi di bidang jasa
          dan produksi saat ini.
          <br />
          <br />
          UML dan juga class diagram sebagai salah satu bagiannya, yang
          diharapkan dapat mempermudah penggunaan piranti lunak, serta memenuhi
          semua kebutuhannya, termasuk tentang security, scalability, robustness
          dan lain sebagainya.
          <br />
          <br />
          Begitu juga dalam hal mengatur keuangan dalam perusahaan, penerapan
          teknologi harus dimanfaatkan untuk tujuan perusahaan yang lebih baik
          dan berkembang.
        </p>
        <h3>Penutup</h3>
        <p>
          Sekian materi yang bisa saya sampaikan, jika ada kesalahan penulisan
          atau masih terdapat kekurangan saya mohon maaf. Sekian dari saya dan
          terima kasih.
        </p>
        <h3>Project: Pupukk Hijau</h3>
        <h5 className="text__p">Nama Kelompok: </h5>
        <ul>
          <li>Ganang Hilmi Faiq</li>
          <li>Chandrika GIta Permata</li>
          <li>Syifa Amelia</li>
          <li>Nyoman Eka Swardita</li>
        </ul>
        <div className="author">
          <h3>Penulis</h3>
          <p>
            Nama : {tmptitem.authorName}
            <br />
            NPM : 2155061006
          </p>
        </div>
      </div>
    </>
  );
}
