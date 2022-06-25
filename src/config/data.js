import author from "../components/images/nyoman.jpeg";
import classdiagram from "../components/images/classdiagram.png";
import img1 from "../components/images/testing.png";
import img3 from "../components/images/roadmap.png";
import im4 from "../components/images/pilar.png";

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
    cover: img1,
  },
  {
    id: 2,
    title: "Artikel Class Diagram ",
    category: "Jurnal Kuliah",
    subCategory: ["RPl", "rekayasa perangkat lunak", "Tugas Kuliah", "jurnal"],
    description:
      "Class diagram adalah bagian dari UML (Unified Modeling Language). Dimana class diagram ini menggambarkan struktur dan deskripsi serta hubungan antar class diagram tersebut. Class diagram merupakan alur database dalam sebuah progam. Dimana pada setiap laporan sistem yang hendak dibuat, class diagram harus diikutsertakan, karena dari sinilah kita dapat melihat aliran data sebuah program.",
    authorName: "Nyoman Eka Swardita",
    authorAvatar: author,
    createdAt: "april 23, 2022",
    cover: classdiagram,
  },
  {
    id: 3,
    title: "Design Perangkat Lunak",
    category: "Programming",
    subCategory: ["Rpl", "Jurnal", "Article"],
    description:
      "Saat mengembangkan sebuah perangkat lunak, tentu kita harus mengetahui terlebih dahulu paradigma dalam dunia pemrograman. Mungkin kita sudah pernah mendengar beberapa paradigma seperti imperative, object-oriented, procedural, dan functional. Paradigma pemrograman itu apa sih? Paradigma pemrograman adalah gaya atau cara kita menulis program.",
    authorName: "Nyoman Eka Swardita",
    authorAvatar: author,
    createdAt: "mei 16, 2022",
    cover: im4,
  },
];
