import React from "react";
import { Link } from "react-router-dom";
import Chip from "../components/common/Chip";
import { blogList } from "../config/data";

export const Softare = () => {
  let tmptitem;
  blogList.map((item) => {
    if (item.id === 5) {
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
          Sangat penting untuk memiliki desain yang bagus. Aplikasi atau produk
          harus memenuhi semua spesifikasi persyaratan dan pada saat yang sama
          harus ramah pengguna. Pelanggan pada dasarnya tertarik dengan
          ketampanan dan gaya aplikasi. Kombinasi warna yang tepat, ukuran font
          dan gaya teks dan tombol sangat penting.
          <br />
          <br />
          Seiring dengan tampilan aplikasi atau produk yang bagus, sangat
          penting bahwa fungsionalitasnya harus utuh. Semua fitur dan fungsinya
          harus berfungsi seperti yang diharapkan. Seharusnya tidak ada
          penyimpangan dalam hasil aktual dan hasil yang diharapkan.
          <br />
          <b>Software Quality</b> adalah Tingkat dimana suatu sistem, komponen,
          atau proses memenuhi persyaratan yang ditentukan sesuai dengan
          kebutuhan pelanggan atau harapan pengguna (IEEE)
        </p>
        <h3>ISO 9126 Software Quality Characteristics</h3>
        <p>
          <b>ISO 9126</b> adalah standar internasional untuk evaluasi perangkat
          lunak. Standar ini dibagi menjadi empat bagian yang masing-masing
          membahas subjek berikut: model kualitas; metrik eksternal; metrik
          internal; dan kualitas dalam metrik penggunaan. ISO 9126 Bagian satu,
          disebut sebagai ISO 9126-1 adalah perpanjangan dari pekerjaan
          sebelumnya yang dilakukan oleh McCall (1977), Boehm (1978), FURPS dan
          lain-lain dalam mendefinisikan satu set karakteristik kualitas
          perangkat lunak.
                  <br /> <br />
                  ISO 9126 
        </p>
      </div>
    </>
  );
};
