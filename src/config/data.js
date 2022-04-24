import classdiagram from "../components/images/classdiagram.png";
import author from "../components/images/nyoman.jpeg";
import cover1 from "../components/images/testing.png";

export const blogList = [
  {
    id: 1,
    title: "Jasa Joki Algortihma Pemrograman ",
    category: "development",
    subCategory: ["Joki", "Algorithma", "C++"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "Nyoman Eka Swardita",
    authorAvatar: author,
    createdAt: "June 03, 2021",
    link: "",
    cover: cover1,
  },
  {
    id: 2,
    title: "Artikel Class Diagram ",
    category: "Rpl",
    subCategory: ["RPl", "rekayasa perangkat lunak", "Tugas Kuliah"],
    description:
      "Class diagram adalah bagian dari UML (Unified Modeling Language). Dimana class diagram ini menggambarkan struktur dan deskripsi serta hubungan antar class diagram tersebut. Class diagram merupakan alur database dalam sebuah progam. Dimana pada setiap laporan sistem yang hendak dibuat, class diagram harus diikutsertakan, karena dari sinilah kita dapat melihat aliran data sebuah program.",
    authorName: "Nyoman Eka Swardita",
    authorAvatar: author,
    createdAt: "april 23, 2022",
    link: "../data/blok.html",
    cover: classdiagram,
  },
];
