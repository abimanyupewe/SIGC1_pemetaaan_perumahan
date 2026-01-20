var wms_layers = [];


var lyr_OpenStreetMap_0 = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});
var format_AREAKELURAHAN_1 = new ol.format.GeoJSON();
var features_AREAKELURAHAN_1 = format_AREAKELURAHAN_1.readFeatures(json_AREAKELURAHAN_1,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_AREAKELURAHAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAKELURAHAN_1.addFeatures(features_AREAKELURAHAN_1);
var lyr_AREAKELURAHAN_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_AREAKELURAHAN_1,
    style: style_AREAKELURAHAN_1,
    popuplayertitle: 'AREA KELURAHAN',
    interactive: true,
    title: '<img src="styles/legend/AREAKELURAHAN_1.png" /> AREA KELURAHAN'
});
var format_FASILITASUMUM_2 = new ol.format.GeoJSON();
var features_FASILITASUMUM_2 = format_FASILITASUMUM_2.readFeatures(json_FASILITASUMUM_2,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_FASILITASUMUM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FASILITASUMUM_2.addFeatures(features_FASILITASUMUM_2);
var lyr_FASILITASUMUM_2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_FASILITASUMUM_2,
    style: style_FASILITASUMUM_2,
    popuplayertitle: 'FASILITAS UMUM',
    interactive: true,
    title: '<img src="styles/legend/FASILITASUMUM_2.png" /> FASILITAS UMUM'
});
var format_JALANANTARKOTA_3 = new ol.format.GeoJSON();
var features_JALANANTARKOTA_3 = format_JALANANTARKOTA_3.readFeatures(json_JALANANTARKOTA_3,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_JALANANTARKOTA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANANTARKOTA_3.addFeatures(features_JALANANTARKOTA_3);
var lyr_JALANANTARKOTA_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_JALANANTARKOTA_3,
    style: style_JALANANTARKOTA_3,
    popuplayertitle: 'JALAN ANTAR KOTA',
    interactive: true,
    title: '<img src="styles/legend/JALANANTARKOTA_3.png" /> JALAN ANTAR KOTA'
});
var format_JALANGANG_4 = new ol.format.GeoJSON();
var features_JALANGANG_4 = format_JALANGANG_4.readFeatures(json_JALANGANG_4,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_JALANGANG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANGANG_4.addFeatures(features_JALANGANG_4);
var lyr_JALANGANG_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_JALANGANG_4,
    style: style_JALANGANG_4,
    popuplayertitle: 'JALAN GANG',
    interactive: true,
    title: '<img src="styles/legend/JALANGANG_4.png" /> JALAN GANG'
});
var format_JALANKAMPUNG_5 = new ol.format.GeoJSON();
var features_JALANKAMPUNG_5 = format_JALANKAMPUNG_5.readFeatures(json_JALANKAMPUNG_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_JALANKAMPUNG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANKAMPUNG_5.addFeatures(features_JALANKAMPUNG_5);
var lyr_JALANKAMPUNG_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_JALANKAMPUNG_5,
    style: style_JALANKAMPUNG_5,
    popuplayertitle: 'JALAN KAMPUNG',
    interactive: true,
    title: '<img src="styles/legend/JALANKAMPUNG_5.png" /> JALAN KAMPUNG'
});
var format_JALANPERUMAHAN_6 = new ol.format.GeoJSON();
var features_JALANPERUMAHAN_6 = format_JALANPERUMAHAN_6.readFeatures(json_JALANPERUMAHAN_6,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_JALANPERUMAHAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANPERUMAHAN_6.addFeatures(features_JALANPERUMAHAN_6);
var lyr_JALANPERUMAHAN_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_JALANPERUMAHAN_6,
    style: style_JALANPERUMAHAN_6,
    popuplayertitle: 'JALAN PERUMAHAN',
    interactive: true,
    title: '<img src="styles/legend/JALANPERUMAHAN_6.png" /> JALAN PERUMAHAN'
});
var format_SUNGAI_7 = new ol.format.GeoJSON();
var features_SUNGAI_7 = format_SUNGAI_7.readFeatures(json_SUNGAI_7,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SUNGAI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_7.addFeatures(features_SUNGAI_7);
var lyr_SUNGAI_7 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SUNGAI_7,
    style: style_SUNGAI_7,
    popuplayertitle: 'SUNGAI',
    interactive: true,
    title: '<img src="styles/legend/SUNGAI_7.png" /> SUNGAI'
});
var format_JALANRAYA_8 = new ol.format.GeoJSON();
var features_JALANRAYA_8 = format_JALANRAYA_8.readFeatures(json_JALANRAYA_8,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_JALANRAYA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANRAYA_8.addFeatures(features_JALANRAYA_8);
var lyr_JALANRAYA_8 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_JALANRAYA_8,
    style: style_JALANRAYA_8,
    popuplayertitle: 'JALAN RAYA',
    interactive: true,
    title: '<img src="styles/legend/JALANRAYA_8.png" /> JALAN RAYA'
});
var format_LAHANTERBUKAHIJAU_9 = new ol.format.GeoJSON();
var features_LAHANTERBUKAHIJAU_9 = format_LAHANTERBUKAHIJAU_9.readFeatures(json_LAHANTERBUKAHIJAU_9,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_LAHANTERBUKAHIJAU_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAHANTERBUKAHIJAU_9.addFeatures(features_LAHANTERBUKAHIJAU_9);
var lyr_LAHANTERBUKAHIJAU_9 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_LAHANTERBUKAHIJAU_9,
    style: style_LAHANTERBUKAHIJAU_9,
    popuplayertitle: 'LAHAN TERBUKA HIJAU',
    interactive: true,
    title: '<img src="styles/legend/LAHANTERBUKAHIJAU_9.png" /> LAHAN TERBUKA HIJAU'
});
var format_AREAPERUMAHAN_10 = new ol.format.GeoJSON();
var features_AREAPERUMAHAN_10 = format_AREAPERUMAHAN_10.readFeatures(json_AREAPERUMAHAN_10,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_AREAPERUMAHAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAPERUMAHAN_10.addFeatures(features_AREAPERUMAHAN_10);
var lyr_AREAPERUMAHAN_10 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_AREAPERUMAHAN_10,
    style: style_AREAPERUMAHAN_10,
    popuplayertitle: 'AREA PERUMAHAN',
    interactive: true,
    title: '<img src="styles/legend/AREAPERUMAHAN_10.png" /> AREA PERUMAHAN'
});
var format_AREASAWAH_11 = new ol.format.GeoJSON();
var features_AREASAWAH_11 = format_AREASAWAH_11.readFeatures(json_AREASAWAH_11,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_AREASAWAH_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASAWAH_11.addFeatures(features_AREASAWAH_11);
var lyr_AREASAWAH_11 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_AREASAWAH_11,
    style: style_AREASAWAH_11,
    popuplayertitle: 'AREA SAWAH',
    interactive: true,
    title: '<img src="styles/legend/AREASAWAH_11.png" /> AREA SAWAH'
});
var format_PERUMAHAN_12 = new ol.format.GeoJSON();
var features_PERUMAHAN_12 = format_PERUMAHAN_12.readFeatures(json_PERUMAHAN_12,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PERUMAHAN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERUMAHAN_12.addFeatures(features_PERUMAHAN_12);
var lyr_PERUMAHAN_12 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_PERUMAHAN_12,
    style: style_PERUMAHAN_12,
    popuplayertitle: 'PERUMAHAN',
    interactive: true,
    title: '<img src="styles/legend/PERUMAHAN_12.png" /> PERUMAHAN'
});

lyr_OpenStreetMap_0.setVisible(true); lyr_AREAKELURAHAN_1.setVisible(true); lyr_FASILITASUMUM_2.setVisible(true); lyr_JALANANTARKOTA_3.setVisible(true); lyr_JALANGANG_4.setVisible(true); lyr_JALANKAMPUNG_5.setVisible(true); lyr_JALANPERUMAHAN_6.setVisible(true); lyr_SUNGAI_7.setVisible(true); lyr_JALANRAYA_8.setVisible(true); lyr_LAHANTERBUKAHIJAU_9.setVisible(true); lyr_AREAPERUMAHAN_10.setVisible(true); lyr_AREASAWAH_11.setVisible(true); lyr_PERUMAHAN_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0, lyr_AREAKELURAHAN_1, lyr_AREASAWAH_11, lyr_AREAPERUMAHAN_10, lyr_LAHANTERBUKAHIJAU_9, lyr_FASILITASUMUM_2, lyr_SUNGAI_7, lyr_JALANANTARKOTA_3, lyr_JALANGANG_4, lyr_JALANKAMPUNG_5, lyr_JALANPERUMAHAN_6, lyr_JALANRAYA_8, lyr_PERUMAHAN_12];
lyr_AREAKELURAHAN_1.set('fieldAliases', { 'id': 'id', 'Nama': 'Nama Kelurahan', 'Kode Pos': 'Kode Pos', 'Luas': 'Luas (m²)', 'Penduduk': 'Jumlah Penduduk', 'Hectar': 'Luas (Ha)', });
lyr_FASILITASUMUM_2.set('fieldAliases', { 'id': 'id', 'Nama': 'Nama Fasilitas', 'Luas': 'Luas (m²)', 'Hectar': 'Luas (Ha)', });
lyr_JALANANTARKOTA_3.set('fieldAliases', { 'id': 'id', 'namaJalan': 'Nama Jalan', 'pjgJalan': 'Panjang (m)', 'Km': 'Panjang (Km)', });
lyr_JALANGANG_4.set('fieldAliases', { 'id': 'id', 'namaGang': 'Nama Gang', 'pjgJalan': 'Panjang (m)', 'Km': 'Panjang (Km)', });
lyr_JALANKAMPUNG_5.set('fieldAliases', { 'id': 'id', 'namaJalan': 'Nama Jalan', 'pjgJalan': 'Panjang (m)', 'Km': 'Panjang (Km)', });
lyr_JALANPERUMAHAN_6.set('fieldAliases', { 'id': 'id', 'namaJalan': 'Nama Jalan', 'pjgJalan': 'Panjang (m)', 'Km': 'Panjang (Km)', });
lyr_SUNGAI_7.set('fieldAliases', { 'id': 'id', 'namaSungai': 'Nama Sungai', 'pjgSungai': 'Panjang (m)', 'Km': 'Panjang (Km)', });
lyr_JALANRAYA_8.set('fieldAliases', { 'id': 'id', 'namaJalan': 'Nama Jalan', 'pjgJalan': 'Panjang (m)', 'Km': 'Panjang (Km)', });
lyr_LAHANTERBUKAHIJAU_9.set('fieldAliases', { 'id': 'id', 'Nama': 'Nama Lahan', 'Luas': 'Luas (m²)', 'Hectar': 'Luas (Ha)', });
lyr_AREAPERUMAHAN_10.set('fieldAliases', { 'id': 'id', 'Nama': 'Nama Perumahan', 'Luas': 'Luas Area (m²)', 'Hectar': 'Luas (Ha)', });
lyr_AREASAWAH_11.set('fieldAliases', { 'id': 'id', 'Nama': 'Area Sawah', 'Luas': 'Luas (m²)', 'Hectar': 'Luas (Ha)', });
lyr_PERUMAHAN_12.set('fieldAliases', { 'id': 'id', 'nama': 'Nama Perumahan', 'lokasi': 'Lokasi', 'alamat': 'Alamat Lengkap', });
lyr_AREAKELURAHAN_1.set('fieldImages', { 'id': 'Hidden', 'Nama': 'TextEdit', 'Kode Pos': 'TextEdit', 'Luas': 'TextEdit', 'Penduduk': 'TextEdit', 'Hectar': 'TextEdit', });
lyr_FASILITASUMUM_2.set('fieldImages', { 'id': 'Hidden', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Hectar': 'TextEdit', });
lyr_JALANANTARKOTA_3.set('fieldImages', { 'id': 'Hidden', 'namaJalan': 'TextEdit', 'pjgJalan': 'TextEdit', 'Km': 'TextEdit', });
lyr_JALANGANG_4.set('fieldImages', { 'id': 'Hidden', 'namaGang': 'TextEdit', 'pjgJalan': 'TextEdit', 'Km': 'TextEdit', });
lyr_JALANKAMPUNG_5.set('fieldImages', { 'id': 'Hidden', 'namaJalan': 'TextEdit', 'pjgJalan': 'TextEdit', 'Km': 'TextEdit', });
lyr_JALANPERUMAHAN_6.set('fieldImages', { 'id': 'Hidden', 'namaJalan': 'TextEdit', 'pjgJalan': 'TextEdit', 'Km': 'TextEdit', });
lyr_SUNGAI_7.set('fieldImages', { 'id': 'Hidden', 'namaSungai': 'TextEdit', 'pjgSungai': 'TextEdit', 'Km': 'TextEdit', });
lyr_JALANRAYA_8.set('fieldImages', { 'id': 'Hidden', 'namaJalan': 'TextEdit', 'pjgJalan': 'TextEdit', 'Km': 'TextEdit', });
lyr_LAHANTERBUKAHIJAU_9.set('fieldImages', { 'id': 'Hidden', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Hectar': 'TextEdit', });
lyr_AREAPERUMAHAN_10.set('fieldImages', { 'id': 'Hidden', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Hectar': 'TextEdit', });
lyr_AREASAWAH_11.set('fieldImages', { 'id': 'Hidden', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'Hectar': 'TextEdit', });
lyr_PERUMAHAN_12.set('fieldImages', { 'id': 'Hidden', 'nama': 'TextEdit', 'lokasi': 'TextEdit', 'alamat': 'TextEdit', });
lyr_AREAKELURAHAN_1.set('fieldLabels', { 'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Kode Pos': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Penduduk': 'inline label - visible with data', 'Hectar': 'inline label - visible with data', });
lyr_FASILITASUMUM_2.set('fieldLabels', { 'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Hectar': 'inline label - visible with data', });
lyr_JALANANTARKOTA_3.set('fieldLabels', { 'id': 'hidden field', 'namaJalan': 'inline label - visible with data', 'pjgJalan': 'inline label - visible with data', 'Km': 'inline label - visible with data', });
lyr_JALANGANG_4.set('fieldLabels', { 'id': 'hidden field', 'namaGang': 'inline label - visible with data', 'pjgJalan': 'inline label - visible with data', 'Km': 'inline label - visible with data', });
lyr_JALANKAMPUNG_5.set('fieldLabels', { 'id': 'hidden field', 'namaJalan': 'inline label - visible with data', 'pjgJalan': 'inline label - visible with data', 'Km': 'inline label - visible with data', });
lyr_JALANPERUMAHAN_6.set('fieldLabels', { 'id': 'hidden field', 'namaJalan': 'inline label - visible with data', 'pjgJalan': 'inline label - visible with data', 'Km': 'inline label - visible with data', });
lyr_SUNGAI_7.set('fieldLabels', { 'id': 'hidden field', 'namaSungai': 'inline label - visible with data', 'pjgSungai': 'inline label - visible with data', 'Km': 'inline label - visible with data', });
lyr_JALANRAYA_8.set('fieldLabels', { 'id': 'hidden field', 'namaJalan': 'inline label - visible with data', 'pjgJalan': 'inline label - visible with data', 'Km': 'inline label - visible with data', });
lyr_LAHANTERBUKAHIJAU_9.set('fieldLabels', { 'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Hectar': 'inline label - visible with data', });
lyr_AREAPERUMAHAN_10.set('fieldLabels', { 'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Hectar': 'inline label - visible with data', });
lyr_AREASAWAH_11.set('fieldLabels', { 'id': 'hidden field', 'Nama': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Hectar': 'inline label - visible with data', });
lyr_PERUMAHAN_12.set('fieldLabels', { 'id': 'hidden field', 'nama': 'inline label - visible with data', 'lokasi': 'inline label - visible with data', 'alamat': 'inline label - visible with data', });
lyr_PERUMAHAN_12.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});