export interface ServiceItem {
  id: string;
  slug: string;
  category: "sedot-wc" | "saluran-mampet";
  categoryLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDesc: string;
  longDesc: string[];
  image: string;
  imageAlt: string;
  features: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  indicators: string[]; // Tanda-tanda butuh layanan ini
  serviceTypes: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  priceNotes: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "sedot-wc",
    slug: "sedot-wc",
    category: "sedot-wc",
    categoryLabel: "Layanan Utama",
    title: "Jasa Sedot WC",
    metaTitle: "Jasa Sedot WC Banjarnegara | Layanan Kuras Tinja Cepat",
    metaDescription: "Layanan jasa sedot WC profesional untuk rumah, perumahan, ruko, dan kantor. Menggunakan armada truk tangki vakum bertenaga dan selang panjang terawat.",
    h1: "Jasa Sedot WC Panggilan Rumah & Bangunan Usaha",
    shortDesc: "Penyedotan kotoran septic tank menggunakan tangki vakum bersih, menjangkau rumah warga, perumahan, hingga ruko di berbagai sudut wilayah.",
    longDesc: [
      "Jasa Sedot WC merupakan solusi utama ketika toilet rumah atau tempat usaha Anda mulai meluap, lambat menyerap, atau mengeluarkan aroma tidak sedap akibat tangki penampungan kotoran yang sudah terisi penuh.",
      "Kami bekerja sama dengan vendor mitra lokal yang memiliki armada truk tangki berkapasitas besar dan mesin pompa vakum bertenaga kuat. Tim teknisi berpengalaman siap melakukan penyedotan tanpa merusak lantai atau struktur bak penampung Anda.",
      "Proses pengerjaan dikerjakan secara higienis, tertutup, dan limbah dibuang secara bertanggung jawab ke instalasi pengolahan limbah resmi, bukan dibuang sembarangan."
    ],
    image: "/src/assets/images/hero_truck_clean_1791585969077.jpg",
    imageAlt: "Armada truk tangki vakum sedot WC profesional di area perumahan",
    features: [
      "Armada tangki vakum dengan daya hisap stabil",
      "Pilihan selang panjang (menjangkau gang dan perumahan padat)",
      "Teknisi lokal sigap & sopan",
      "Penyedotan tertutup tanpa meninggalkan bau menyengat",
      "Tarif transparan dikonfirmasikan sebelum pengerjaan"
    ],
    process: [
      {
        step: "01",
        title: "Konsultasi & Konfirmasi Lokasi",
        description: "Hubungi via WhatsApp dengan mengirimkan lokasi detail dan kendala WC yang dialami."
      },
      {
        step: "02",
        title: "Penjadwalan Armada Mitra",
        description: "Tim menghubungkan pesanan Anda ke mitra armada terdekat dan mengonfirmasi estimasi kedatangan serta panjang selang."
      },
      {
        step: "03",
        title: "Proses Penyedotan Higienis",
        description: "Teknisi membuka tutup septic tank, memasang selang hisap vakum, dan menguras kotoran sampai tuntas."
      },
      {
        step: "04",
        title: "Pemeriksaan Akhir & Pembayaran",
        description: "Lakukan tes siram toilet bersama teknisi untuk memastikan aliran sudah lancar kembali sebelum pembayaran diselesaikan."
      }
    ],
    indicators: [
      "Air di kloset turun sangat lambat meski sudah disiram berulang kali",
      "Terdengar bunyi gelembung 'gluk-gluk' saat menyiram toilet",
      "Muncul bau tak sedap dari lubang kloset maupun ventilasi septic tank",
      "Sudah lebih dari 2–3 tahun belum pernah dilakukan pengurasan septic tank",
      "Kloset meluap balik saat digunakan bersamaan dengan pembuangan lain"
    ],
    serviceTypes: [
      "Jasa Sedot WC Rumah Tinggal & Kontrakan",
      "Jasa Sedot WC Ruko, Toko, & Perkantoran",
      "Jasa Sedot WC Penginapan, Kos-kosan, & Villa",
      "Jasa Pengurasan Limbah Tinja Rumah Ibadah & Fasilitas Publik",
      "Sedot WC Panggilan untuk Gang Sempit (Opsi Selang Panjang)"
    ],
    faqs: [
      {
        q: "Berapa lama proses sedot WC biasanya memakan waktu?",
        a: "Rata-rata proses penyedotan tangki septic tank standar rumah tinggal memerlukan waktu 30 hingga 60 menit, tergantung kapasitas penampungan dan kemudahan akses titik septic tank."
      },
      {
        q: "Bagaimana jika rumah saya berada di dalam gang sempit?",
        a: "Mohon informasikan perkiraan jarak antara lokasi parkir mobil tangki dengan letak lubang septic tank saat menghubungi kami. Armada mitra kami membawa sambungan selang hingga 30–50 meter."
      },
      {
        q: "Kapan saya harus membayar biaya jasa?",
        a: "Pembayaran dilakukan langsung setelah pengerjaan penyedotan selesai dan toilet Anda sudah dites kembali bersama teknisi di lokasi."
      }
    ],
    priceNotes: "Biaya disesuaikan dengan volume septic tank, jarak selang yang dibutuhkan, dan lokasi pengerjaan. Estimasi disampaikan di awal sebelum tim berangkat."
  },
  {
    id: "sedot-septic-tank",
    slug: "sedot-septic-tank",
    category: "sedot-wc",
    categoryLabel: "Layanan Utama",
    title: "Jasa Sedot Septic Tank",
    metaTitle: "Jasa Sedot Septic Tank Banjarnegara | Pengurasan Tuntas",
    metaDescription: "Jasa pengurasan dan sedot septic tank hingga ke dasar endapan lumpur padat. Mencegah pencemaran air tanah dan menjaga kebersihan sanitasi rumah Anda.",
    h1: "Jasa Pengurasan & Sedot Septic Tank Tuntas",
    shortDesc: "Pembersihan menyeluruh tangki resapan dan ruang limbah padat agar septic tank kembali berfungsi menyaring dan menampung air secara optimal.",
    longDesc: [
      "Banyak septic tank yang tidak sekadar penuh oleh air, melainkan sudah mengendap lumpur tinja padat (sludge) di bagian dasar selama bertahun-tahun. Jika hanya disedot lapisan atasnya, tangki akan cepat penuh kembali dalam hitungan minggu.",
      "Layanan Jasa Sedot Septic Tank difokuskan pada pengadukan dan penyedotan endapan kerak lumpur menggunakan peralatan vakum bertekanan tinggi hingga dinding dan dasar penampung bersih.",
      "Layanan ini sangat disarankan untuk rumah hunian lama, bangunan ruko, maupun gedung dengan intensitas pemakaian toilet yang padat."
    ],
    image: "/src/assets/images/septic_tank_clean_1791585981022.jpg",
    imageAlt: "Inspeksi lubang septic tank dan selang spiral vakum di halaman rumah",
    features: [
      "Penyedotan kerak dan endapan lumpur tinja dasar",
      "Pengecekan saluran resapan dan ventilasi udara tangki",
      "Metode pengurasan bersih tanpa merusak penutup beton bila memungkinkan",
      "Pencegahan bau busuk merembes ke air sumur warga sekitar",
      "Dilayani mitra armada lokal yang paham kondisi geografis wilayah"
    ],
    process: [
      {
        step: "01",
        title: "Identifikasi Titik Septic Tank",
        description: "Pelanggan menunjukkan atau membantu teknisi menemukan lubang kontrol septic tank di area halaman atau dalam ruangan."
      },
      {
        step: "02",
        title: "Pembukaan & Penguraian Endapan",
        description: "Penutup dibuka secara hati-hati, lalu bila terdapat kerak padat dilakukan pengenceran dengan semprotan air sebelum disedot."
      },
      {
        step: "03",
        title: "Pengurasan Vakum Tuntas",
        description: "Lumpur disedot melalui pipa spiral vakum langsung masuk ke tangki tertutup di atas truk."
      },
      {
        step: "04",
        title: "Penutupan Kembali & Rapi-Rapi",
        description: "Lubang ditutup kembali secara aman dan area sekitar dibersihkan dengan air mengalir."
      }
    ],
    indicators: [
      "WC baru disedot beberapa bulan lalu tapi sudah mulai mampet lagi (tanda lumpur padat belum terangkat)",
      "Area tanah di atas septic tank tercium bau menyengat atau terlihat rembesan air kotor",
      "Jarak antara septic tank dengan sumur dangkal berpotensi mencemari air minum bila penuh",
      "Rumah baru dihuni namun riwayat pengurasan sebelumnya tidak diketahui"
    ],
    serviceTypes: [
      "Pengurasan Septic Tank Konvensional (Batu Bata / Cor)",
      "Pengurasan Bio Septic Tank Modern (Fiberglass)",
      "Pembersihan Ruang Resapan Air Kotor",
      "Pengecekan Saluran Over-flow Menuju Selokan"
    ],
    faqs: [
      {
        q: "Apa bedanya sedot WC biasa dengan sedot septic tank tuntas?",
        a: "Sedot WC biasa terkadang hanya mengambil air limbah bagian atas. Sedot septic tank tuntas mencakup pengurasan endapan lumpur mati di dasar bak penampungan agar daya tampungnya kembali maksimal."
      },
      {
        q: "Apakah septic tank biofilter juga perlu disedot?",
        a: "Ya, bio septic tank tetap memerlukan pengurasan berkala (setiap 2–4 tahun) untuk membersihkan endapan mikroba mati dan kotoran sisa yang tidak terurai secara alami."
      }
    ],
    priceNotes: "Harga ditentukan berdasarkan kapasitas tangki dan tingkat kepadatan endapan lumpur. Dikonfirmasikan secara terbuka sebelum pengerjaan."
  },
  {
    id: "perbaikan-saluran-mampet",
    slug: "perbaikan-saluran-mampet",
    category: "saluran-mampet",
    categoryLabel: "Layanan Pendamping",
    title: "Jasa Perbaikan Saluran Mampet",
    metaTitle: "Jasa Perbaikan Saluran Mampet Banjarnegara | Tanpa Bongkar Pipa",
    metaDescription: "Layanan melancarkan saluran air kamar mandi, wastafel, bak cuci piring, dan pipa buangan mampet menggunakan mesin spiral modern tanpa membongkar lantai.",
    h1: "Jasa Perbaikan Saluran Air & Pipa Pembuangan Mampet",
    shortDesc: "Pelancaran pipa pembuangan yang tersumbat lemak, sisa makanan, rambut, maupun kotoran menggunakan alat spiral mekanis modern tanpa merusak ubin lantai.",
    longDesc: [
      "Saluran pembuangan air kamar mandi, wastafel cuci piring dapur, dan talang air seringkali tersumbat akibat penumpukan lemak beku, gumpalan rambut, serta kotoran padat yang menyangkut di belokan pipa (knee/elbow).",
      "Menggunakan cairan kimia keras seringkali tidak menyelesaikan masalah dan bahkan bisa merusak atau melunakkan pipa PVC rumah Anda hingga bocor di bawah tanah.",
      "Kami menghubungkan Anda dengan teknisi spesialis saluran pipa mampet yang dilengkapi alat drain snake kawat spiral fleksibel bermesin rotasi tinggi. Alat ini mampu menembus liku pipa dan menarik atau menghancurkan sumbatan tanpa perlu membongkar lantai rumah."
    ],
    image: "/src/assets/images/drain_tools_clean_1791585993314.jpg",
    imageAlt: "Mesin drain snake spiral mekanik dan peralatan pelancaran pipa mampet",
    features: [
      "Metode mekanik tanpa membongkar keramik atau lantai",
      "Alat kawat spiral fleksibel mampu menjangkau pipa hingga belasan meter",
      "Tidak menggunakan cairan berbahaya yang merusak pipa PVC",
      "Mampu mengatasi sumbatan lemak dapur yang mengeras",
      "Solusi cepat untuk genangan air kotor di kamar mandi"
    ],
    process: [
      {
        step: "01",
        title: "Pengecekan Sumber Sumbatan",
        description: "Teknisi meninjau jenis saluran yang tersumbat (kamar mandi, wastafel, atau pipa pembuangan utama)."
      },
      {
        step: "02",
        title: "Pemasangan Mesin Drain Cleaner",
        description: "Kawat spiral baja fleksibel dimasukkan ke lubang pipa menuju titik sumbatan secara terarah."
      },
      {
        step: "03",
        title: "Pemecahan & Pengangkatan Sumbatan",
        description: "Mesin memutar spiral untuk menghancurkan gumpalan lemak dan mengait rambut atau benda padat yang menyumbat."
      },
      {
        step: "04",
        title: "Flushing Air & Uji Kelancaran",
        description: "Saluran dialirkan air dalam debit besar untuk memastikan aliran sudah lancar sempurna tanpa genangan tersisa."
      }
    ],
    indicators: [
      "Air buangan di kamar mandi menggenang dan sangat lama surut saat mandi",
      "Bak cuci piring dapur meluap atau air berbalik keluar dari pipa bawah",
      "Tercium bau comberan atau sisa makanan busuk dari lubang floor drain",
      "Terdengar bunyi air bergemuruh yang tertahan di balik dinding atau lantai"
    ],
    serviceTypes: [
      "Pelancaran Saluran Kamar Mandi (Floor Drain) Mampet",
      "Pelancaran Wastafel & Bak Cuci Piring (Sink Dapur) Tersumbat Lemak",
      "Pembersihan Pipa Saluran Pembuangan Air Hujan / Talang",
      "Pelancaran Pipa Utama dari Rumah Menuju Selokan Luar"
    ],
    faqs: [
      {
        q: "Apakah pengerjaan ini memerlukan pembongkaran lantai keramik?",
        a: "Sebagian besar kasus saluran mampet (lebih dari 90%) dapat diselesaikan melalui lubang pembuangan yang ada menggunakan alat spiral mekanis tanpa perlu membongkar keramik."
      },
      {
        q: "Bolehkah saya menuangkan soda api sebelum teknisi datang?",
        a: "Kami sangat menyarankan untuk tidak menuangkan soda api berlebihan. Soda api dapat bereaksi dengan minyak dan mengeras seperti semen di dalam pipa PVC, atau bahkan membuat pipa melengkung dan bocor karena panas tinggi."
      }
    ],
    priceNotes: "Biaya didasarkan pada tingkat kesulitan, jenis saluran (kamar mandi, dapur, pipa utama), serta panjang pipa yang dikerjakan. Selalu disepakati sebelum pengerjaan dimulai."
  },
  {
    id: "saluran-wc-mampet",
    slug: "saluran-wc-mampet",
    category: "saluran-mampet",
    categoryLabel: "Layanan Pendamping",
    title: "Jasa Saluran WC Mampet",
    metaTitle: "Jasa Saluran WC Mampet Banjarnegara | Pelancaran Kloset Tersumbat",
    metaDescription: "Solusi cepat kloset mampet tersumbat pembalut, tisu, sabun, atau mainan. Penanganan hati-hati tanpa merusak mangkuk kloset duduk maupun jongkok.",
    h1: "Jasa Melancarkan Saluran Kloset / WC Tersumbat",
    shortDesc: "Penanganan khusus toilet tersumbat benda padat di leher angsa kloset (closet trap) dengan teknik profesional yang aman untuk keramik kloset.",
    longDesc: [
      "Ketika kloset Anda tersiram tetapi airnya justru naik ke bibir mangkuk, ada dua kemungkinan: septic tank penuh, atau pipa leher angsa kloset tersumbat benda padat asing.",
      "Sumbatan kloset sering dipicu oleh pembalut, sisa sabun batangan, gumpalan tisu basah, bungkus plastik perlengkapan mandi, atau mainan anak yang terjatuh ke lubang kloset.",
      "Teknisi mitra kami memiliki peralatan khusus untuk mendeteksi dan mengambil benda penyumbat pada leher kloset duduk maupun jongkok tanpa menggores atau memecahkan porselen toilet Anda."
    ],
    image: "/src/assets/images/drain_tools_clean_1791585993314.jpg",
    imageAlt: "Peralatan pelancaran kloset dan saluran WC mampet modern",
    features: [
      "Pembedaan akurat: apakah masalah di septic tank atau di saluran kloset",
      "Penanganan aman untuk kloset jongkok maupun kloset duduk modern",
      "Peralatan khusus anti-gores keramik kloset",
      "Pengerjaan higienis dengan pelindung sanitasi",
      "Konsultasi langsung via WhatsApp untuk penanganan awal"
    ],
    process: [
      {
        step: "01",
        title: "Diagnosa Sumber Masalah",
        description: "Pemeriksaan apakah septic tank penuh atau terjadi sumbatan lokal pada leher kloset."
      },
      {
        step: "02",
        title: "Ekstraksi Benda Penyumbat",
        description: "Penggunaan alat closet auger fleksibel untuk mengait atau menarik benda padat yang tersangkut di leher angsa."
      },
      {
        step: "03",
        title: "Pembersihan Kerak Pipa",
        description: "Bila terdapat kerak kotoran mengeras di sepanjang pipa leher, dilakukan pembersihan menyeluruh."
      },
      {
        step: "04",
        title: "Uji Siram (Flush Test)",
        description: "Kloset disiram dengan debit air penuh beberapa kali untuk memastikan daya hisap air kembali normal dan lancar."
      }
    ],
    indicators: [
      "Kloset mendadak tidak bisa disiram setelah ada benda terjatuh ke dalam lubang",
      "Air kloset meluap ke atas dan sangat lambat turun dalam hitungan menit",
      "Hanya 1 kloset ini yang bermasalah, sedangkan saluran air dan WC di lantai lain mengalir lancar (ciri sumbatan lokal)",
      "Sudah dicoba pompa manual (plunger) namun air tetap tidak mau mengalir"
    ],
    serviceTypes: [
      "Pelancaran Kloset Duduk (Monoblok & Standard)",
      "Pelancaran Kloset Jongkok Rumah & Ruko",
      "Pengambilan Benda Padat Asing di Leher Angsa Toilet",
      "Pemeriksaan Sambungan Pipa Leher Kloset Menuju Septic Tank"
    ],
    faqs: [
      {
        q: "Bagaimana cara membedakan WC tersumbat dengan septic tank penuh?",
        a: "Jika septic tank penuh, biasanya seluruh kloset dan saluran buangan di lantai bawah mengalami kelambatan, tercium bau busuk menyengat, dan air lambat turun secara merata. Jika hanya leher kloset yang tersumbat benda padat, biasanya hanya kloset tersebut yang airnya tertahan mendadak."
      },
      {
        q: "Apakah porselen kloset saya aman dari goresan?",
        a: "Ya, teknisi menggunakan closet auger berlapis pelindung karet atau vinil khusus yang dirancang untuk melindungi permukaan porselen kloset dari goresan logam."
      }
    ],
    priceNotes: "Biaya disesuaikan dengan jenis kloset dan tingkat kesulitan ekstraksi benda penyumbat. Bebas biaya konsultasi awal via WhatsApp."
  }
];
