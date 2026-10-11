export interface DistrictItem {
  name: string;
  postalCode?: string;
  notes?: string;
}

export interface AreaItem {
  id: string;
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  status: "aktif" | "tahap-pengembangan";
  statusBadge: string;
  description: string;
  partnerInfo: string;
  subDistricts: DistrictItem[];
  highlights: string[];
  sedotWcDetails: {
    title: string;
    description: string;
    truckAccessNotes: string;
  };
  saluranMampetDetails: {
    title: string;
    description: string;
  };
  localFaqs: {
    q: string;
    a: string;
  }[];
}

export const activeArea: AreaItem = {
  id: "banjarnegara",
  slug: "banjarnegara",
  name: "Banjarnegara",
  title: "Jasa Sedot WC & Saluran Mampet Banjarnegara",
  metaTitle: "Jasa Sedot WC Banjarnegara | Layanan Septic Tank",
  metaDescription: "Jasa Sedot WC Banjarnegara untuk rumah dan bangunan usaha. Siap melayani area kota, Klampok, Purwareja, Bawang, Wanadadi, Madukara, dan sekitarnya dengan armada tangki mitra terverifikasi.",
  h1: "Jasa Sedot WC Banjarnegara untuk Rumah dan Bangunan Usaha",
  status: "aktif",
  statusBadge: "Wilayah Aktif Terverifikasi",
  description: "Layanan jasa sedot WC dan perbaikan saluran pipa mampet resmi untuk seluruh kawasan Kabupaten Banjarnegara. Kami menyalurkan pesanan Anda langsung ke armada mitra penyedia jasa sedot dan teknisi lokal yang berpengalaman di medan Banjarnegara.",
  partnerInfo: "Mitra armada lokal Banjarnegara telah terverifikasi memiliki kendaraan tangki vakum dengan kapasitas memadai, selang hisap panjang untuk area permukiman padat dan jalan perbukitan, serta teknisi yang paham rute dan kondisi geografis Banjarnegara.",
  highlights: [
    "Jangkauan luas mencakup kecamatan dataran hingga perbukitan Banjarnegara",
    "Pilihan selang panjang hingga 50 meter untuk gang dan lokasi tanpa akses mobil tangki langsung",
    "Melayani rumah tinggal, ruko pertokoan, sekolah, puskesmas, dan perkantoran",
    "Layanan saluran mampet tanpa bongkar keramik untuk kamar mandi dan wastafel",
    "Pemesanan langsung terhubung ke WhatsApp pusat koordinasi"
  ],
  subDistricts: [
    { name: "Kecamatan Banjarnegara Kota", notes: "Pusat kota, perkantoran, perumahan, dan pertokoan" },
    { name: "Kecamatan Bawang", notes: "Area permukiman & jalur utama" },
    { name: "Kecamatan Klampok / Purwareja Klampok", notes: "Permukiman padat & kawasan ruko" },
    { name: "Kecamatan Mandiraja", notes: "Permukiman & fasilitas umum" },
    { name: "Kecamatan Wanadadi", notes: "Area permukiman & tepian waduk" },
    { name: "Kecamatan Madukara", notes: "Permukiman & area perbukitan" },
    { name: "Kecamatan Sigaluh", notes: "Jalur perbatasan & permukiman" },
    { name: "Kecamatan Susukan", notes: "Kawasan perbatasan Banyumas" },
    { name: "Kecamatan Punggelan", notes: "Wilayah utara & pedesaan" },
    { name: "Kecamatan Karangkobar", notes: "Wilayah pegunungan Banjarnegara atas" },
    { name: "Kecamatan Rakit", notes: "Kawasan pertanian & permukiman" },
    { name: "Kecamatan Banjarmangu", notes: "Jalur lingkar & permukiman" }
  ],
  sedotWcDetails: {
    title: "Layanan Sedot Septic Tank di Wilayah Banjarnegara",
    description: "Kondisi tanah dan curah hujan di Kabupaten Banjarnegara yang relatif tinggi seringkali membuat resapan air septic tank cepat jenuh saat musim penghujan. Teknisi mitra kami siap melakukan pengurasan lumpur padat agar septic tank tidak meluap ke lingkungan sekitar.",
    truckAccessNotes: "Armada truk tangki dapat parkir di badan jalan utama atau jalan lingkungan dengan bentangan selang fleksibel hingga 30–50 meter menuju titik bak kontrol septic tank Anda."
  },
  saluranMampetDetails: {
    title: "Layanan Pelancaran Saluran Mampet Banjarnegara",
    description: "Sumbatan pipa pembuangan kamar mandi dan bak cuci piring akibat sisa masakan atau rambut dapat dilancarkan menggunakan mesin spiral elektrik tanpa perlu merusak lantai ubin rumah Anda di Banjarnegara."
  },
  localFaqs: [
    {
      q: "Apakah armada sedot WC dapat masuk ke gang sempit di Banjarnegara?",
      a: "Truk tangki membutuhkan lebar jalan minimal sekitar 2,2 meter. Apabila rumah Anda berada di gang yang tidak bisa dilewati truk, tim teknisi mitra kami akan menyambung selang hisap panjang dari truk yang diparkir di mulut gang terdekat."
    },
    {
      q: "Berapa lama estimasi teknisi tiba di lokasi Banjarnegara?",
      a: "Untuk wilayah kota Banjarnegara, Bawang, dan Klampok, rata-rata kedatangan armada adalah 1–3 jam setelah pemesanan dikonfirmasi via WhatsApp (atau sesuai kesepakatan jadwal yang Anda inginkan)."
    },
    {
      q: "Bagaimana sistem pembayaran sedot WC Banjarnegara?",
      a: "Pembayaran dilakukan langsung secara tunai atau transfer kepada teknisi mitra di lokasi setelah pekerjaan selesai dan dipastikan lancar."
    }
  ]
};

export interface ExpansionAreaItem {
  id: string;
  name: string;
  province: string;
  status: "tahap-pengembangan";
  statusNotes: string;
  plannedServices: string[];
}

export const expansionAreasData: ExpansionAreaItem[] = [
  {
    id: "purwokerto",
    name: "Purwokerto",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Dalam tahap verifikasi mitra armada lokal. Hubungi kami untuk memeriksa ketersediaan vendor sewaktu-waktu.",
    plannedServices: ["Jasa Sedot WC Rumah/Kos", "Perbaikan Saluran Kamar Mandi"]
  },
  {
    id: "banyumas",
    name: "Banyumas",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Penjajakan mitra armada sedot septic tank dan teknisi pipa lokal.",
    plannedServices: ["Sedot Septic Tank", "Saluran WC Mampet"]
  },
  {
    id: "purbalingga",
    name: "Purbalingga",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Persiapan jaringan mitra penyedia armada tangki berkapasitas besar.",
    plannedServices: ["Sedot WC Rumah & Pabrik", "Pembersihan Pipa Saluran"]
  },
  {
    id: "wonosobo",
    name: "Wonosobo",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Menunggu konfirmasi verifikasi vendor armada di area Wonosobo.",
    plannedServices: ["Sedot WC Perumahan & Homestay", "Pelancaran Saluran Air"]
  },
  {
    id: "temanggung",
    name: "Temanggung",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Tahap evaluasi vendor armada penyedotan.",
    plannedServices: ["Sedot WC", "Saluran Mampet"]
  },
  {
    id: "ambarawa",
    name: "Ambarawa",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Tahap pendataan mitra teknisi sanitasi.",
    plannedServices: ["Sedot WC", "Pembersihan Pipa"]
  },
  {
    id: "salatiga",
    name: "Salatiga",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Tahap kurasi vendor armada tangki vakum resmi.",
    plannedServices: ["Sedot WC Rumah & Ruko", "Saluran Mampet"]
  },
  {
    id: "kulon-progo",
    name: "Kulon Progo",
    province: "D.I. Yogyakarta",
    status: "tahap-pengembangan",
    statusNotes: "Rencana perluasan kemitraan sanitasi wilayah barat Yogyakarta.",
    plannedServices: ["Sedot Septic Tank", "Saluran Pembuangan Mampet"]
  },
  {
    id: "bantul",
    name: "Bantul",
    province: "D.I. Yogyakarta",
    status: "tahap-pengembangan",
    statusNotes: "Persiapan kerja sama mitra armada sedot tinja.",
    plannedServices: ["Sedot WC", "Saluran Pembuangan Mampet"]
  },
  {
    id: "sleman",
    name: "Sleman",
    province: "D.I. Yogyakarta",
    status: "tahap-pengembangan",
    statusNotes: "Tahap seleksi mitra teknisi saluran pipa dan mobil tangki vakum.",
    plannedServices: ["Sedot WC Hunian & Kos", "Pelancaran Pipa Wastafel"]
  },
  {
    id: "purworejo",
    name: "Purworejo",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Tahap survei vendor mitra terdekat.",
    plannedServices: ["Sedot WC Rumah", "Saluran Air Mampet"]
  },
  {
    id: "kebumen",
    name: "Kebumen",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Proses koordinasi armada sedot tinja lokal Kebumen.",
    plannedServices: ["Sedot Septic Tank", "Saluran WC Tersumbat"]
  },
  {
    id: "cilacap",
    name: "Cilacap",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Tahap pembukaan pendaftaran mitra vendor armada tangki.",
    plannedServices: ["Sedot WC Industri & Rumah", "Pipa Mampet"]
  },
  {
    id: "bumiayu",
    name: "Bumiayu",
    province: "Jawa Tengah",
    status: "tahap-pengembangan",
    statusNotes: "Tahap pemetaan wilayah jangkauan armada mitra Brebes selatan.",
    plannedServices: ["Sedot WC Panggilan", "Saluran Kamar Mandi Mampet"]
  }
];
