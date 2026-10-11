export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  readTime: string;
  category: string;
  summary: string;
  content: {
    sectionTitle?: string;
    paragraphs: string[];
    listItems?: string[];
    calloutText?: string;
  }[];
  relatedServiceSlug: string;
  relatedServiceTitle: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: "tanda-tanda-septic-tank-penuh",
    slug: "tanda-tanda-septic-tank-penuh-dan-perlu-disedot",
    title: "7 Tanda-Tanda Septic Tank Penuh dan Perlu Segera Disedot",
    metaTitle: "Tanda-Tanda Septic Tank Penuh & Perlu Disedot | Panduan Sanitasi",
    metaDescription: "Ketahui ciri dan tanda utama septic tank rumah Anda sudah penuh: air lambat turun, bau menyengat, hingga rembesan di bak kontrol. Jangan tunggu sampai meluap!",
    publishDate: "2025-05-10",
    readTime: "5 menit baca",
    category: "Perawatan Septic Tank",
    summary: "Banyak pemilik rumah baru menyadari septic tank penuh setelah kotoran meluap ke lantai kamar mandi. Kenali tanda-tanda awalnya agar penanganan bisa dilakukan lebih dini.",
    relatedServiceSlug: "sedot-wc",
    relatedServiceTitle: "Jasa Sedot WC",
    content: [
      {
        sectionTitle: "Mengapa Perlu Tahu Tanda Septic Tank Penuh?",
        paragraphs: [
          "Septic tank merupakan komponen sanitasi yang tersembunyi di bawah tanah. Karena tidak terlihat setiap hari, pemilik rumah sering kali melupakan kondisinya hingga timbul masalah darurat seperti toilet meluap.",
          "Mengetahui tanda awal septic tank penuh akan menyelamatkan Anda dari biaya perbaikan besar, bau busuk yang mengganggu tetangga, serta risiko pencemaran bakteri pada air tanah atau sumur di sekitar hunian."
        ]
      },
      {
        sectionTitle: "1. Kloset Mengeluarkan Suara 'Gluk-Gluk' Saat Disiram",
        paragraphs: [
          "Salah satu gejala paling awal adalah munculnya suara gelembung udara yang tertahan saat Anda menekan tombol flush atau menyiram kloset dengan gayung. Suara ini menandakan pipa ventilasi atau ruang udara di dalam septic tank sudah terisi penuh oleh air dan kotoran, sehingga udara terdorong balik ke leher kloset."
        ]
      },
      {
        sectionTitle: "2. Air di Kloset Sangat Lambat Masuk ke Lubang",
        paragraphs: [
          "Jika air siraman berputar lambat dan membutuhkan waktu beberapa menit untuk surut ke posisi normal, kemungkinan besar daya tampung septic tank sudah mencapai batas maksimumnya.",
          "Perhatikan apakah kondisi ini terjadi pada semua kloset di rumah. Jika ya, masalahnya hampir pasti ada pada tangki septic tank, bukan sekadar sumbatan pipa tunggal."
        ]
      },
      {
        sectionTitle: "3. Aroma Busuk Menguap di Sekitar Kamar Mandi atau Halaman",
        paragraphs: [
          "Septic tank yang sehat memiliki bakteri pengurai dan sistem resapan yang baik. Namun saat tangki sudah over-kapasitas, gas metana dan bau gas belerang tidak lagi tertampung dan mulai merembes keluar melalui lubang ventilasi, pipa pembuangan, atau celah penutup beton di halaman rumah."
        ]
      },
      {
        sectionTitle: "4. Rumput di Atas Septic Tank Mendadak Sangat Subur atau Becek",
        paragraphs: [
          "Jika Anda memiliki septic tank di area taman atau pekarangan rumah, perhatikan rumput di atasnya. Saat air limbah mulai meluap dari dinding resapan, tanah di atasnya akan menjadi basah, lembap, dan rumput tumbuh jauh lebih hijau pekat akibat kelebihan nutrisi limbah organik."
        ]
      },
      {
        sectionTitle: "Langkah yang Harus Segera Dilakukan",
        paragraphs: [
          "Jangan gunakan bahan kimia keras pelarut secara berlebihan jika tangki memang sudah penuh fisik, karena zat kimia tidak dapat menghilangkan volume air dan lumpur padat.",
          "Segera hubungi layanan jasa sedot WC profesional untuk melakukan penyedotan menggunakan truk tangki vakum agar tangki kembali bersih dan siap digunakan bertahun-tahun ke depan."
        ],
        calloutText: "Butuh bantuan penyedotan di wilayah Banjarnegara? Tim mitra kami siap datang dengan peralatan vakum bersih dan selang panjang terawat."
      }
    ]
  },
  {
    id: "penyebab-wc-mampet",
    slug: "penyebab-wc-mampet-dan-cara-menanganinya",
    title: "Penyebab WC Mampet dan Cara Tepat Menanganinya Tanpa Merusak Pipa",
    metaTitle: "Penyebab WC Mampet & Cara Mengatasinya | Tips Praktis Rumah",
    metaDescription: "Pelajari penyebab utama kloset tersumbat mulai dari tisu basah, pembalut, hingga kerak pipa, serta cara penanganan yang aman tanpa membuat pipa PVC rusak.",
    publishDate: "2025-05-18",
    readTime: "6 menit baca",
    category: "Solusi Saluran",
    summary: "Toilet mampet adalah keadaan darurat rumah tangga yang bikin panik. Simak apa saja pemicunya dan langkah darurat yang boleh serta tidak boleh dilakukan.",
    relatedServiceSlug: "saluran-wc-mampet",
    relatedServiceTitle: "Jasa Saluran WC Mampet",
    content: [
      {
        sectionTitle: "Mengapa Kloset Bisa Mendadak Tersumbat?",
        paragraphs: [
          "Kloset dirancang hanya untuk menampung kotoran manusia, air, dan tisu toilet yang mudah terurai oleh air. Namun dalam keseharian, berbagai benda asing sering tidak sengaja atau sengaja dibuang ke lubang kloset.",
          "Di dalam kloset terdapat struktur leher angsa (trap) yang berbentuk lekukan huruf 'S' atau 'P'. Lekukan inilah yang sering menjadi tempat bersarangnya benda-benda padat yang tidak larut."
        ]
      },
      {
        sectionTitle: "Benda-Benda yang Sering Menyebabkan Kloset Mampet",
        paragraphs: [
          "Berikut adalah deretan penyebab paling sering ditemui teknisi di lapangan:"
        ],
        listItems: [
          "Tisu basah (baby wipes): Tidak larut dalam air dan mengembang membentuk sumbatan tebal.",
          "Pembalut wanita dan popok bayi: Mengandung gel penyerap air yang membesar berlipat ganda saat terendam.",
          "Sisa sabun batangan yang tergelincir ke lubang kloset.",
          "Gumpalan rambut panjang yang mengikat kotoran lain menjadi bola penyumbat.",
          "Mainan plastik anak kecil atau tutup botol sampo yang tidak sengaja terjatuh."
        ]
      },
      {
        sectionTitle: "Cara Penanganan Awal yang Aman",
        paragraphs: [
          "1. Gunakan Plunger (Pompa Karet WC): Pastikan bibir karet plunger menutupi seluruh lubang kloset secara rapat. Lakukan gerakan memompa naik-turun dengan tekanan stabil untuk menggeser sumbatan.",
          "2. Siram dengan Air Hangat dan Sabun Cuci Piring: Tuangkan sedikit sabun cuci piring cair, tunggu 15 menit, lalu siram dengan air hangat (bukan air mendidih agar keramik kloset tidak retak). Sabun dapat melicinkan permukaan pipa.",
          "3. Jangan Gunakan Soda Api Berlebihan: Soda api yang bereaksi dengan kotoran dapat mengeras seperti adukan semen dan melepaskan panas ekstrem yang berisiko membuat pipa PVC bocor di bawah lantai."
        ]
      },
      {
        sectionTitle: "Kapan Harus Memanggil Teknisi Profesional?",
        paragraphs: [
          "Jika pompa manual tidak berhasil atau air justru meluap semakin tinggi, tandanya benda padat tersangkut kuat di dalam leher porselen atau pipa pembuangan.",
          "Gunakan jasa pelancaran saluran WC profesional yang memiliki alat kawat spiral (closet auger) mekanis agar benda penyumbat dapat ditarik keluar tanpa merusak keramik kloset Anda."
        ]
      }
    ]
  },
  {
    id: "penyebab-saluran-kamar-mandi-tersumbat",
    slug: "penyebab-saluran-kamar-mandi-tersumbat",
    title: "Penyebab Saluran Kamar Mandi Tersumbat & Solusi Tanpa Bongkar Keramik",
    metaTitle: "Penyebab Saluran Kamar Mandi Tersumbat & Solusinya",
    metaDescription: "Air kamar mandi menggenang saat mandi? Kenali penumpukan rambut, residu sabun, dan lumut yang menyumbat floor drain serta cara melancarkannya.",
    publishDate: "2025-06-02",
    readTime: "4 menit baca",
    category: "Saluran Kamar Mandi",
    summary: "Genangan air di lantai kamar mandi tidak hanya menjijikkan tetapi juga menjadi sarang lumut dan kuman. Temukan sumber penyumbatnya di sini.",
    relatedServiceSlug: "perbaikan-saluran-mampet",
    relatedServiceTitle: "Jasa Perbaikan Saluran Mampet",
    content: [
      {
        sectionTitle: "Masalah Umum Saluran Pembuangan Kamar Mandi (Floor Drain)",
        paragraphs: [
          "Saluran kamar mandi menerima aliran air sabun, sampo, rontokan rambut, dan kotoran badan setiap hari. Seiring berjalannya waktu, kombinasi ini menciptakan lapisan lengket di dalam pipa PVC.",
          "Di bagian belokan pipa (elbow/knee) di bawah lantai, aliran air melambat sehingga residu sabun mengering dan mengendap menjadi kerak tebal."
        ]
      },
      {
        sectionTitle: "Penyebab Utama yang Perlu Diwaspadai",
        paragraphs: [
          "Penyumbat floor drain kamar mandi umumnya meliputi:"
        ],
        listItems: [
          "Rontokan rambut yang terperangkap pada saringan atau belokan leher pipa.",
          "Buih sabun dan kondisioner yang menggumpal bersama kotoran daki.",
          "Runtuhan serpihan plester semen atau nat keramik sisa renovasi kamar mandi terdahulu.",
          "Pemasangan kemiringan pipa (slope) yang kurang curam sehingga air tidak mengalir dengan gaya gravitasi yang cukup."
        ]
      },
      {
        sectionTitle: "Solusi Cepat dan Pencegahan",
        paragraphs: [
          "Pasang saringan rambut (hair catcher) di atas floor drain dan bersihkan secara rutin seminggu sekali.",
          "Jika sumbatan sudah mengeras jauh di dalam pipa, solusi terbaik adalah menggunakan mesin pemutar kawat spiral (drain snake cleaner) yang mampu membersihkan dinding pipa dari dalam tanpa perlu membongkar lantai keramik Anda."
        ]
      }
    ]
  },
  {
    id: "penyebab-saluran-dapur-mampet",
    slug: "penyebab-saluran-dapur-mampet",
    title: "Penyebab Saluran Dapur Mampet: Bahaya Minyak Goreng & Lemak Beku",
    metaTitle: "Penyebab Saluran Bak Cuci Piring Mampet & Cara Mengatasi Lemak",
    metaDescription: "Minyak goreng bekas yang dibuang ke wastafel akan membeku dan menyumbat pipa. Simak tips mengatasi saluran sink dapur tersumbat lemak.",
    publishDate: "2025-06-15",
    readTime: "5 menit baca",
    category: "Saluran Dapur",
    summary: "Bak cuci piring (kitchen sink) dapur adalah saluran yang paling sering mengalami sumbatan lemak beku keras. Simak mengapa ini terjadi dan cara membersihkannya.",
    relatedServiceSlug: "perbaikan-saluran-mampet",
    relatedServiceTitle: "Jasa Perbaikan Saluran Mampet",
    content: [
      {
        sectionTitle: "Fenomena 'Fatberg' Pada Saluran Dapur Rumah Tangga",
        paragraphs: [
          "Banyak orang mengira minyak goreng cair atau kuah gulai yang hangat aman dibuang ke bak cuci piring jika dibilas dengan air kran.",
          "Kenyataannya, saat minyak mengalir masuk ke pipa PVC yang dingin di bawah lantai, minyak akan mendingin dan berubah wujud menjadi lemak padat berwarna putih kekuningan. Lemak ini menempel pada dinding pipa dan terus menebal seperti kolesterol dalam pembuluh darah."
        ]
      },
      {
        sectionTitle: "Tanda-Tanda Pipa Dapur Mulai Menyempit",
        paragraphs: [
          "Sebelum mampet total, saluran wastafel dapur biasanya memberikan peringatan:",
          "- Air di bak cuci turun sangat lambat saat Anda mencuci piring dalam jumlah banyak.",
          "- Tercium bau basi dan minyak tengik dari lubang saringan wastafel.",
          "- Air kotor meluap dari sambungan pipa fleksibel di bagian kolong meja dapur."
        ]
      },
      {
        sectionTitle: "Cara Mencegah Penumpukan Lemak",
        paragraphs: [
          "1. Jangan Pernah Membuang Minyak Goreng Bekas ke Wastafel: Kumpulkan minyak jelantah di botol bekas untuk disetorkan ke bank minyak atau dibuang terpisah.",
          "2. Lap Piring Berminyak dengan Tisu Sebelum Dicuci: Langkah sederhana ini mengurangi 80% volume lemak yang masuk ke pipa pembuangan.",
          "3. Bilas Berkala dengan Air Panas: Tuangkan 1 ceret air panas ke wastafel dapur seminggu sekali untuk membantu melarutkan lapisan lemak tipis."
        ]
      },
      {
        sectionTitle: "Penanganan Profesional",
        paragraphs: [
          "Jika lemak sudah mengeras dan mengkristal di sepanjang pipa, air panas tidak lagi mempan. Teknisi spesialis menggunakan peralatan spiral baja berkepala pemotong untuk mengikis dinding pipa hingga bersih kembali."
        ]
      }
    ]
  },
  {
    id: "perbedaan-sedot-wc-dan-pengurasan-septic-tank",
    slug: "perbedaan-sedot-wc-dan-pengurasan-septic-tank",
    title: "Perbedaan Sedot WC Biasa dan Pengurasan Septic Tank Total",
    metaTitle: "Perbedaan Sedot WC & Pengurasan Septic Tank | Mana yang Tepat?",
    metaDescription: "Jangan salah pilih layanan! Ketahui perbedaan mendasar antara sedot air WC biasa dengan pengurasan endapan lumpur septic tank tuntas.",
    publishDate: "2025-07-01",
    readTime: "4 menit baca",
    category: "Edukasi Sanitasi",
    summary: "Pernahkah Anda menyedot WC tetapi beberapa bulan kemudian sudah penuh lagi? Pahami perbedaan antara sedot air biasa vs kuras lumpur padat.",
    relatedServiceSlug: "sedot-septic-tank",
    relatedServiceTitle: "Jasa Sedot Septic Tank",
    content: [
      {
        sectionTitle: "Struktur Lapisan di Dalam Septic Tank",
        paragraphs: [
          "Di dalam septic tank konvensional, limbah terbagi menjadi tiga lapisan:",
          "1. Lapisan Atas (Scum): Busa, lemak, dan minyak yang mengapung.",
          "2. Lapisan Tengah (Effluent): Air limbah cair yang relatif jernih yang seharusnya mengalir ke sumur resapan.",
          "3. Lapisan Dasar (Sludge): Endapan lumpur tinja padat yang mengendap di dasar tangki."
        ]
      },
      {
        sectionTitle: "Apa Itu Sedot WC Biasa?",
        paragraphs: [
          "Sedot WC biasa umumnya hanya menyedot cairan lapisan atas dan tengah yang memenuhi tangki. Proses ini berlangsung cepat dan langsung membuat toilet bisa disiram kembali.",
          "Namun kelemahannya, endapan lumpur padat di bagian dasar tidak terangkat. Akibatnya, kapasitas efektif septic tank tetap sempit, sehingga dalam waktu 3–6 bulan tangki bisa cepat penuh kembali."
        ]
      },
      {
        sectionTitle: "Apa Itu Pengurasan Septic Tank Total?",
        paragraphs: [
          "Pengurasan septic tank total (desludging) melibatkan proses pengenceran endapan lumpur keras di dasar bak menggunakan tekanan air, lalu disedot tuntas menggunakan pompa vakum berkekuatan tinggi.",
          "Setelah pengurasan total, kapasitas ruang penampung septic tank kembali 100% seperti baru, sehingga Anda tidak perlu melakukan penyedotan lagi selama 2 hingga 4 tahun ke depan."
        ]
      }
    ]
  },
  {
    id: "kapan-sebaiknya-sedot-septic-tank",
    slug: "kapan-sebaiknya-melakukan-sedot-septic-tank",
    title: "Kapan Sebaiknya Melakukan Sedot Septic Tank? Ini Jadwal Idealnya",
    metaTitle: "Jadwal Ideal Sedot Septic Tank Rumah | Waktu Terbaik Kuras WC",
    metaDescription: "Berapa tahun sekali septic tank harus disedot? Simak standar sanitasi menurut Kementerian Kesehatan dan Dinas Pekerjaan Umum untuk keluarga Anda.",
    publishDate: "2025-07-20",
    readTime: "5 menit baca",
    category: "Jadwal Perawatan",
    summary: "Menunggu WC sampai mampet total baru memanggil sedot WC adalah kebiasaan yang keliru. Cari tahu jadwal perawatan berkala yang dianjurkan para pakar lingkungan.",
    relatedServiceSlug: "sedot-wc",
    relatedServiceTitle: "Jasa Sedot WC",
    content: [
      {
        sectionTitle: "Standar Sanitasi Nasional",
        paragraphs: [
          "Menurut pedoman Kementerian Lingkungan Hidup dan Dinas Cipta Karya, septic tank untuk rumah tangga beranggotakan 4–6 orang idealnya dikuras secara berkala setiap 2 hingga 3 tahun sekali.",
          "Penyedotan berkala ini mencegah lumpur tinja meluap ke lapisan resapan air tanah yang dapat mencemari sumur dangkal dalam radius 10 meter."
        ]
      },
      {
        sectionTitle: "Faktor yang Mempengaruhi Kecepatan Penuh",
        paragraphs: [
          "Setiap rumah memiliki ritme pengurasan yang berbeda tergantung beberapa faktor utama:"
        ],
        listItems: [
          "Jumlah penghuni rumah: Semakin banyak penghuni atau tamu, semakin cepat volume limbah terkumpul.",
          "Ukuran septic tank: Tangki berukuran kecil (kurang dari 1,5 meter kubik) akan lebih cepat jenuh dibanding tangki standar 2–3 meter kubik.",
          "Daya serap tanah: Di musim hujan atau pada jenis tanah lempung yang padat, daya resap air menurun drastis sehingga tangki tampak lebih cepat penuh.",
          "Penggunaan bahan kimia: Sabun karbol berlebihan yang masuk ke kloset dapat membunuh bakteri pengurai alami, menyebabkan tinja tidak terurai dan cepat mengendap tebal."
        ]
      },
      {
        sectionTitle: "Keuntungan Sedot Terjadwal",
        paragraphs: [
          "Melakukan pengurasan terjadwal jauh lebih nyaman karena Anda dapat memilih waktu senggang di akhir pekan tanpa panik toilet tidak bisa digunakan saat ada acara keluarga atau hari raya."
        ]
      }
    ]
  },
  {
    id: "cara-mencegah-saluran-air-tersumbat",
    slug: "cara-mencegah-saluran-air-rumah-tersumbat",
    title: "7 Cara Mencegah Saluran Air Rumah Tersumbat & Bebas Bau Selamanya",
    metaTitle: "Cara Mencegah Saluran Air Rumah Tersumbat & Bebas Bau",
    metaDescription: "Langkah mudah dan murah merawat pipa pembuangan rumah agar tidak mampet: saringan floor drain, perangkap lemak, dan cara flushing berkala.",
    publishDate: "2025-08-05",
    readTime: "5 menit baca",
    category: "Tips Perawatan",
    summary: "Mencegah selalu lebih hemat dibanding memperbaiki pipa yang tersumbat parah. Terapkan 7 kebiasaan sederhana ini di rumah Anda.",
    relatedServiceSlug: "perbaikan-saluran-mampet",
    relatedServiceTitle: "Jasa Perbaikan Saluran Mampet",
    content: [
      {
        sectionTitle: "Kunci Utama: Kendalikan Apa yang Masuk ke Lubang Pipa",
        paragraphs: [
          "Pipa pembuangan rumah bukanlah tempat pembuangan sampah serbaguna. Setiap benda padat berpotensi menjadi jangkar tempat tersangkutnya kotoran lain di masa depan."
        ]
      },
      {
        sectionTitle: "7 Tips Perawatan Saluran Rumah",
        paragraphs: [
          "Terapkan langkah-langkah praktis ini untuk menjaga saluran air tetap lancar:"
        ],
        listItems: [
          "Gunakan saringan kawat (mesh strainer) pada bak cuci piring dan lubang kamar mandi.",
          "Jangan buang sisa ampas kopi dan serpihan teh ke wastafel karena butirannya mudah mengendap.",
          "Gunakan grease trap (perangkap lemak) portabel di bawah wastafel dapur jika sering memasak makanan berminyak.",
          "Rutin bersihkan rambut yang menumpuk di tutup floor drain setiap selesai mandi.",
          "Bilas pipa secara rutin dengan menuangkan air panas bersabun sebulan dua kali.",
          "Edukasi seluruh anggota keluarga untuk tidak membuang tisu basah atau puntung rokok ke dalam kloset.",
          "Segera periksa jika air mulai terasa sedikit melambat, jangan menunggu sampai macet total."
        ]
      },
      {
        sectionTitle: "Bila Saluran Sudah Terlanjur Macet",
        paragraphs: [
          "Jika air sudah tidak mengalir sama sekali dan mulai menimbulkan genangan berbau, hindari menusuk pipa dengan benda tajam seperti kawat kaku berujung runcing yang bisa melubangi pipa PVC.",
          "Hubungi jasa pelancaran saluran berpengalaman untuk membersihkan sumbatan secara aman dan profesional."
        ]
      }
    ]
  }
];
