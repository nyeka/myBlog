import React from "react";
import { Link } from "react-router-dom";
import Chip from "../components/common/Chip";
import { blogList } from "../config/data";
import img5 from "../components/images/class.png";
import inherrit from "../components/images/inherit.png";
import encapsul from "../components/images/encapsulation.png";

export default function JurnalBlog() {
  let tmptitem;
  blogList.map((item) => {
    if (item.id === 4) {
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
        <h3>Latar Belakang</h3>
        <p>
          Perangkat lunak umumnya merupakan usaha untuk menyelesaikan
          permasalahan pada dunia nyata menggunakan komputer. Pengembangan
          perangkat lunak (software development) melalui serangkaian tahapan
          dimana masing-masing tahapan menghasilkan artifak atau luaran
          tertentu. Dimulai dari pemahaman masalah (requirement elicitation),
          analisis, desain, implementasi, dan diakhiri dengan pengujian.
          Selanjutnya, perangkat lunak ditempatkan (deploy) pada pelanggan dan
          dilakukan pemiliharaan terhadapnya.
        </p>
        <p>
          Tahapan desain menerjemahkan kebutuhan perangkat lunak ke dalam model
          [1] yang dapat dipahami oleh pengembang perangkat lunak. Beberapa hal
          harus diperhatikan oleh desainer perangkat lunak supaya perangkat
          lunak yang dikembangkan dapat fleksibel dan komponen-komponen di
          dalamnya dapat digunakan ulang (reuseable). Pada tulisan ini,
          dipaparkan beberapa hal terkait dengan desain perangkat lunak yaitu
          prinsip-prinsip penting, proses desain, dan artifak-artifak yang
          dihasilkan dalam tahapan desain. Tulisan ini ditutup dengan beberapa
          tantangantantangan dalam desain perangkat lunak
        </p>
        <h3>Design Pattern pembuatan Perangkat Lunak</h3>
        <p>
          Design pattern atau yang dapat diartikan sebagai pola desain adalah
          metode yang dibuat untuk membantu tim pengembang dalam menemukan
          solusi dari masalah-masalah umum yang muncul saat pengembangan
          perangkat lunak sedang berlangsung.
          <br />
          <br /> Pola desain ini dapat digunakan kembali dalam pengembangan
          perangkat lunak selanjutnya. Ia bukanlah suatu metode yang dapat
          diimplementasikan langsung menjadi sebuah kode program, tetapi ia
          merupakan sebuah pola untuk menyelesaikan masalah dalam situasi yang
          bermacam-macam.
        </p>
        <h3>Object Oriented Konsep</h3>
        <p>
          Mengapa Object Oriented Programming? OOP (Object Oriented Programming)
          masih merupakan salah satu paradigma atau teknik pemrograman yang
          populer dalam pengembangan aplikasi. Dengan paradigma OOP kita dapat
          dengan mudah memvisualisasikan kode karena OOP sendiri mirip dengan
          skenario kehidupan nyata. Dalam penerapan OOP kita menggabungkan
          kumpulan-kumpulan fungsi atau atribut yang memiliki kesamaan dalam
          sebuah unit yang kita sebut sebagai objek.
          <br />
          <br /> Class merupakan sebuah blueprint yang dapat dikembangkan untuk
          membuat sebuah objek. Blueprint ini merupakan sebuah template yang di
          dalamnya menjelaskan seperti apa perilaku dari objek itu (berupa
          properti ataupun function).
        </p>
        <img className="img5" src={img5} alt="class" />
        <p>
          <br />
          Visualisasi di atas mencontohkan gambaran umum dari konsep OOP, di
          mana terdapat sebuah blueprint Kucing, atribut yang dimiliki Kucing,
          dan kemampuan yang dapat dilakukan oleh Kucing.
        </p>
        <h3>Property</h3>
        <p>
          Property (atau disebut juga dengan atribut) adalah data yang terdapat
          dalam sebuah class. Sebuah class tentu memiliki property dan
          mempresentasikan karakteristik dari class tersebut. Masing - masing
          class memiliki property yang berbeda. Contoh sebelumnya pada class
          Kucing, property yang dimiliki berupa color, height, length dan
          weight.
        </p>
        <h3>Empat Pilar OOP</h3>
        <img className="img5" src={tmptitem.cover} alt="img" />
        <p className="ptag">
          terdapat beberapa teknik yang dikelompokkan menjadi beberapa pilar
          yang bisa kita gunakan, di antaranya:
        </p>
        <ul>
          <li>Inheritence</li>
          <li>Encapsulation</li>
          <li>Abstractcion</li>
          <li>Polymorphism</li>
        </ul>
        <h3>Inheritence</h3>
        <p>
          Dalam object oriented programming, inheritance merupakan salah satu
          konsep penting. Kenapa? Karena kita bisa meminimalisir penulisan
          berulang pada fungsi, properti, dan variable.
          <br /> <br /> Ketika ingin membuat class dengan fungsi yang sudah
          tersedia pada class lain, kita tidak perlu lagi menulis ulang kode
          tersebut di dalam class yang kita buat. Cukup dengan mewarisi class
          tersebut maka kita bisa langsung mengaksesnya.
        </p>
        <img className="img3" src={inherrit} alt="inheritence" />
        <p>
          <br />
          Saat menggunakan inheritance, kita dapat menggunakan kembali,
          menyesuaikan dan memelihara kode yang sudah dibuat, sehingga dapat
          memudahkan programmer.
        </p>
        <h3>Encapsulation</h3>
        <p>
          Encapsulation merupakan proses di mana sebuah penanganan data
          ditempatkan di dalam wadah tunggal yang disebut sebagai class. Saat
          menggunakan encapsulation, data dapat diisolasi dan tidak dapat
          diakses langsung dari luar.
        </p>
        <img className="img3" src={encapsul} alt="encapsul" />
        <p>
          <br />
          Dari contoh kode di atas, apa alasan kita untuk menggunakan
          encapsulation? Karena kita akan lebih leluasa dalam melakukan
          perubahan nilai tanpa harus mengakses propertinya secara langsung,
          cukup gunakan fungsi setter yang tersedia.
        </p>
        <h3>Abstraction</h3>
        <p>
          Abstraction layer atau abstraction level merupakan mekanisme yang
          memisahkan 2 (dua) kompleksitas sebuah sistem. Dalam proses komputasi,
          abstraction layer atau level merupakan cara menyembunyikan detail
          implementasi yang kompleks dari serangkaian fungsionalitas tertentu
          dengan tujuan agar dapat memisahkan masalah seperti interoperabilitas.
          <br /> <br />
          Contoh abstraction di dunia nyata bisa kita lihat ketika ingin
          mengendarai mobil. Kita hanya perlu menekan pedal gas jika ingin mobil
          berjalan tanpa harus tau apa yang telah terjadi ketika pedal gas
          tersebut ditekan. Ini berlaku juga ketika kita ingin melakukan
          pengereman.
        </p>
        <h3>Polymorphism</h3>
        <p>
          Polymorphism merupakan kemampuan objek, variabel, atau fungsi yang
          dapat memiliki berbagai bentuk. Secara umum polymorphism dalam OOP
          terjadi ketika suatu SuperClass direferensikan ke dalam SubClass.
          <br />
          <br />
          Alhasil kita dapat mengembangkan sebuah program secara umum, bukan
          spesifik. Polymorphism dapat digambarkan seperti seorang yang
          menguasai dan mampu berbicara dalam beberapa bahasa.{" "}
        </p>
        <h3>Penutup</h3>
        <p>
          Sekian materi yang bisa saya sampaikan, jika ada kesalahan penulisan
          atau masih terdapat kekurangan saya mohon maaf. Sekian dari saya dan
          terima kasih.
        </p>
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
