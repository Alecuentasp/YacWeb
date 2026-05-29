ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-89.268266, 16.878555, -65.941465, 28.149608]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AREAS_PROTEGIDAS_1 = new ol.format.GeoJSON();
var features_AREAS_PROTEGIDAS_1 = format_AREAS_PROTEGIDAS_1.readFeatures(json_AREAS_PROTEGIDAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AREAS_PROTEGIDAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_PROTEGIDAS_1.addFeatures(features_AREAS_PROTEGIDAS_1);
var lyr_AREAS_PROTEGIDAS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREAS_PROTEGIDAS_1, 
                style: style_AREAS_PROTEGIDAS_1,
                popuplayertitle: 'AREAS_PROTEGIDAS',
                interactive: true,
                title: '<img src="styles/legend/AREAS_PROTEGIDAS_1.png" /> AREAS_PROTEGIDAS'
            });
var format_CUENCASDEINTERESNACIONAL_2 = new ol.format.GeoJSON();
var features_CUENCASDEINTERESNACIONAL_2 = format_CUENCASDEINTERESNACIONAL_2.readFeatures(json_CUENCASDEINTERESNACIONAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CUENCASDEINTERESNACIONAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CUENCASDEINTERESNACIONAL_2.addFeatures(features_CUENCASDEINTERESNACIONAL_2);
var lyr_CUENCASDEINTERESNACIONAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CUENCASDEINTERESNACIONAL_2, 
                style: style_CUENCASDEINTERESNACIONAL_2,
                popuplayertitle: 'CUENCAS DE INTERES NACIONAL',
                interactive: true,
                title: '<img src="styles/legend/CUENCASDEINTERESNACIONAL_2.png" /> CUENCAS DE INTERES NACIONAL'
            });
var format_YACIMIENTOSNOMETALICOS_3 = new ol.format.GeoJSON();
var features_YACIMIENTOSNOMETALICOS_3 = format_YACIMIENTOSNOMETALICOS_3.readFeatures(json_YACIMIENTOSNOMETALICOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_YACIMIENTOSNOMETALICOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YACIMIENTOSNOMETALICOS_3.addFeatures(features_YACIMIENTOSNOMETALICOS_3);
var lyr_YACIMIENTOSNOMETALICOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YACIMIENTOSNOMETALICOS_3, 
                style: style_YACIMIENTOSNOMETALICOS_3,
                popuplayertitle: 'YACIMIENTOS NO METALICOS',
                interactive: true,
                title: '<img src="styles/legend/YACIMIENTOSNOMETALICOS_3.png" /> YACIMIENTOS NO METALICOS'
            });
var format_YACIMIENTOSMETALICOS_4 = new ol.format.GeoJSON();
var features_YACIMIENTOSMETALICOS_4 = format_YACIMIENTOSMETALICOS_4.readFeatures(json_YACIMIENTOSMETALICOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_YACIMIENTOSMETALICOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YACIMIENTOSMETALICOS_4.addFeatures(features_YACIMIENTOSMETALICOS_4);
var lyr_YACIMIENTOSMETALICOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YACIMIENTOSMETALICOS_4, 
                style: style_YACIMIENTOSMETALICOS_4,
                popuplayertitle: 'YACIMIENTOS METALICOS',
                interactive: true,
                title: '<img src="styles/legend/YACIMIENTOSMETALICOS_4.png" /> YACIMIENTOS METALICOS'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_AREAS_PROTEGIDAS_1.setVisible(false);lyr_CUENCASDEINTERESNACIONAL_2.setVisible(false);lyr_YACIMIENTOSNOMETALICOS_3.setVisible(true);lyr_YACIMIENTOSMETALICOS_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AREAS_PROTEGIDAS_1,lyr_CUENCASDEINTERESNACIONAL_2,lyr_YACIMIENTOSNOMETALICOS_3,lyr_YACIMIENTOSMETALICOS_4];
lyr_AREAS_PROTEGIDAS_1.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'CAT_MANEJO': 'CAT_MANEJO', 'CAT_SIGNIF': 'CAT_SIGNIF', 'SUP_TIERRA': 'SUP_TIERRA', 'SUP_MAR': 'SUP_MAR', 'SUP_TOTAL': 'SUP_TOTAL', 'OBJETO': 'OBJETO', });
lyr_CUENCASDEINTERESNACIONAL_2.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'nombre': 'nombre', 'numero': 'numero', 'longitud': 'longitud', 'area': 'area', });
lyr_YACIMIENTOSNOMETALICOS_3.set('fieldAliases', {'idbal': 'idbal', 'YACIMIENTO': 'YACIMIENTO', 'SECTOR': 'SECTOR', 'TIPO': 'TIPO', 'MAT_PRIMA': 'MAT_PRIMA', 'EMPRESA': 'EMPRESA', 'ESTATUS': 'ESTATUS', 'extracc': 'extracc', 'extraccNat': 'extraccNat', 'UM': 'UM', 'umtext': 'umtext', 'PAR_CALIDA': 'PAR_CALIDA', 'parametr_1': 'parametr_1', 'R_MEDIDOS': 'R_MEDIDOS', 'R_INDICADO': 'R_INDICADO', 'R_INFERIDO': 'R_INFERIDO', 'REC_MED_IN': 'REC_MED_IN', 'RESERVAS': 'RESERVAS', 'C1_M_I': 'C1_M_I', 'C2_M_I': 'C2_M_I', 'C3_M_I': 'C3_M_I', 'PAR_CAL1_M': 'PAR_CAL1_M', 'PAR_CAL2_M': 'PAR_CAL2_M', 'PAR_CAL3_M': 'PAR_CAL3_M', 'PAR_CAL1_I': 'PAR_CAL1_I', 'PAR_CAL2_I': 'PAR_CAL2_I', 'PAR_CAL3_I': 'PAR_CAL3_I', 'PAR_CAL1_1': 'PAR_CAL1_1', 'PAR_CAL2_1': 'PAR_CAL2_1', 'PAR_CAL3_1': 'PAR_CAL3_1', 'C1_R_M_I': 'C1_R_M_I', 'C2_R_M_I': 'C2_R_M_I', 'C3_R_M_I': 'C3_R_M_I', 'X': 'X', 'Y': 'Y', 'XNORTE': 'XNORTE', 'YNORTE': 'YNORTE', 'CONON': 'CONON', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', });
lyr_YACIMIENTOSMETALICOS_4.set('fieldAliases', {'idbal': 'idbal', 'YACIMIENTO': 'YACIMIENTO', 'SECTOR': 'SECTOR', 'TIPO': 'TIPO', 'MAT_PRIMA': 'MAT_PRIMA', 'EMPRESA': 'EMPRESA', 'ESTATUS': 'ESTATUS', 'extracc': 'extracc', 'extraccNat': 'extraccNat', 'UM': 'UM', 'umtext': 'umtext', 'parametros': 'parametros', 'parametr_1': 'parametr_1', 'Medidos': 'Medidos', 'Indicados': 'Indicados', 'R_INFERIDO': 'R_INFERIDO', 'R_MED_IN': 'R_MED_IN', 'Reservas_M': 'Reservas_M', 'C1_M_I': 'C1_M_I', 'C2_M_I': 'C2_M_I', 'C3_M_I': 'C3_M_I', 'C1_M': 'C1_M', 'C2_M': 'C2_M', 'C3_M': 'C3_M', 'C1_I': 'C1_I', 'C2_I': 'C2_I', 'C3_I': 'C3_I', 'C1_Inf': 'C1_Inf', 'C2_Inf': 'C2_Inf', 'C3_Inf': 'C3_Inf', 'C1_R_M_I': 'C1_R_M_I', 'C2_R_M_I': 'C2_R_M_I', 'C3_R_M_I': 'C3_R_M_I', 'X': 'X', 'Y': 'Y', 'XNORTE': 'XNORTE', 'YNORTE': 'YNORTE', 'CONON': 'CONON', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', });
lyr_AREAS_PROTEGIDAS_1.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'CAT_SIGNIF': 'TextEdit', 'SUP_TIERRA': 'TextEdit', 'SUP_MAR': 'TextEdit', 'SUP_TOTAL': 'TextEdit', 'OBJETO': 'TextEdit', });
lyr_CUENCASDEINTERESNACIONAL_2.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'nombre': 'TextEdit', 'numero': 'TextEdit', 'longitud': 'TextEdit', 'area': 'TextEdit', });
lyr_YACIMIENTOSNOMETALICOS_3.set('fieldImages', {'idbal': 'TextEdit', 'YACIMIENTO': 'TextEdit', 'SECTOR': 'TextEdit', 'TIPO': 'TextEdit', 'MAT_PRIMA': 'TextEdit', 'EMPRESA': 'TextEdit', 'ESTATUS': 'TextEdit', 'extracc': 'TextEdit', 'extraccNat': 'TextEdit', 'UM': 'TextEdit', 'umtext': 'TextEdit', 'PAR_CALIDA': 'TextEdit', 'parametr_1': 'TextEdit', 'R_MEDIDOS': 'TextEdit', 'R_INDICADO': 'TextEdit', 'R_INFERIDO': 'TextEdit', 'REC_MED_IN': 'TextEdit', 'RESERVAS': 'TextEdit', 'C1_M_I': 'TextEdit', 'C2_M_I': 'TextEdit', 'C3_M_I': 'TextEdit', 'PAR_CAL1_M': 'TextEdit', 'PAR_CAL2_M': 'TextEdit', 'PAR_CAL3_M': 'TextEdit', 'PAR_CAL1_I': 'TextEdit', 'PAR_CAL2_I': 'TextEdit', 'PAR_CAL3_I': 'TextEdit', 'PAR_CAL1_1': 'TextEdit', 'PAR_CAL2_1': 'TextEdit', 'PAR_CAL3_1': 'TextEdit', 'C1_R_M_I': 'TextEdit', 'C2_R_M_I': 'TextEdit', 'C3_R_M_I': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'XNORTE': 'TextEdit', 'YNORTE': 'TextEdit', 'CONON': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_YACIMIENTOSMETALICOS_4.set('fieldImages', {'idbal': 'TextEdit', 'YACIMIENTO': 'TextEdit', 'SECTOR': 'TextEdit', 'TIPO': 'TextEdit', 'MAT_PRIMA': 'TextEdit', 'EMPRESA': 'TextEdit', 'ESTATUS': 'TextEdit', 'extracc': 'TextEdit', 'extraccNat': 'TextEdit', 'UM': 'TextEdit', 'umtext': 'TextEdit', 'parametros': 'TextEdit', 'parametr_1': 'TextEdit', 'Medidos': 'TextEdit', 'Indicados': 'TextEdit', 'R_INFERIDO': 'TextEdit', 'R_MED_IN': 'TextEdit', 'Reservas_M': 'TextEdit', 'C1_M_I': 'TextEdit', 'C2_M_I': 'TextEdit', 'C3_M_I': 'TextEdit', 'C1_M': 'TextEdit', 'C2_M': 'TextEdit', 'C3_M': 'TextEdit', 'C1_I': 'TextEdit', 'C2_I': 'TextEdit', 'C3_I': 'TextEdit', 'C1_Inf': 'TextEdit', 'C2_Inf': 'TextEdit', 'C3_Inf': 'TextEdit', 'C1_R_M_I': 'TextEdit', 'C2_R_M_I': 'TextEdit', 'C3_R_M_I': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'XNORTE': 'TextEdit', 'YNORTE': 'TextEdit', 'CONON': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', });
lyr_AREAS_PROTEGIDAS_1.set('fieldLabels', {'ID': 'hidden field', 'NOMBRE': 'inline label - always visible', 'CAT_MANEJO': 'inline label - always visible', 'CAT_SIGNIF': 'inline label - always visible', 'SUP_TIERRA': 'inline label - always visible', 'SUP_MAR': 'inline label - always visible', 'SUP_TOTAL': 'inline label - always visible', 'OBJETO': 'hidden field', });
lyr_CUENCASDEINTERESNACIONAL_2.set('fieldLabels', {'id': 'hidden field', 'objectid': 'hidden field', 'nombre': 'inline label - always visible', 'numero': 'inline label - always visible', 'longitud': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_YACIMIENTOSNOMETALICOS_3.set('fieldLabels', {'idbal': 'hidden field', 'YACIMIENTO': 'inline label - always visible', 'SECTOR': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'MAT_PRIMA': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'ESTATUS': 'hidden field', 'extracc': 'hidden field', 'extraccNat': 'hidden field', 'UM': 'inline label - visible with data', 'umtext': 'hidden field', 'PAR_CALIDA': 'hidden field', 'parametr_1': 'hidden field', 'R_MEDIDOS': 'hidden field', 'R_INDICADO': 'hidden field', 'R_INFERIDO': 'inline label - always visible', 'REC_MED_IN': 'inline label - always visible', 'RESERVAS': 'hidden field', 'C1_M_I': 'hidden field', 'C2_M_I': 'hidden field', 'C3_M_I': 'hidden field', 'PAR_CAL1_M': 'hidden field', 'PAR_CAL2_M': 'hidden field', 'PAR_CAL3_M': 'hidden field', 'PAR_CAL1_I': 'hidden field', 'PAR_CAL2_I': 'hidden field', 'PAR_CAL3_I': 'hidden field', 'PAR_CAL1_1': 'hidden field', 'PAR_CAL2_1': 'hidden field', 'PAR_CAL3_1': 'hidden field', 'C1_R_M_I': 'hidden field', 'C2_R_M_I': 'hidden field', 'C3_R_M_I': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'XNORTE': 'hidden field', 'YNORTE': 'hidden field', 'CONON': 'hidden field', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', });
lyr_YACIMIENTOSMETALICOS_4.set('fieldLabels', {'idbal': 'hidden field', 'YACIMIENTO': 'inline label - always visible', 'SECTOR': 'inline label - always visible', 'TIPO': 'inline label - always visible', 'MAT_PRIMA': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'ESTATUS': 'hidden field', 'extracc': 'hidden field', 'extraccNat': 'hidden field', 'UM': 'inline label - always visible', 'umtext': 'hidden field', 'parametros': 'hidden field', 'parametr_1': 'hidden field', 'Medidos': 'hidden field', 'Indicados': 'hidden field', 'R_INFERIDO': 'inline label - always visible', 'R_MED_IN': 'inline label - always visible', 'Reservas_M': 'hidden field', 'C1_M_I': 'hidden field', 'C2_M_I': 'hidden field', 'C3_M_I': 'hidden field', 'C1_M': 'hidden field', 'C2_M': 'hidden field', 'C3_M': 'hidden field', 'C1_I': 'hidden field', 'C2_I': 'hidden field', 'C3_I': 'hidden field', 'C1_Inf': 'hidden field', 'C2_Inf': 'hidden field', 'C3_Inf': 'hidden field', 'C1_R_M_I': 'hidden field', 'C2_R_M_I': 'hidden field', 'C3_R_M_I': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'XNORTE': 'hidden field', 'YNORTE': 'hidden field', 'CONON': 'hidden field', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', });
lyr_YACIMIENTOSMETALICOS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});