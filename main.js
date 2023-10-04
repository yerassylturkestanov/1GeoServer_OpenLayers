window.onload = init

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 2,
            extent: [7500000, 5000000, 10000000, 75000000]
        }),
        layers: [/*
            new ol.layer.Tile({
                source: new ol.source.OSM()
            }),*/
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:Alm_admrai'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:admobl'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:gndpol'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:vegpol'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:poppol'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:hdrpol'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:blkpol'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:prpol'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:rlflin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:veglin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:hdrlin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:rrslin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:rdslin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:hdtlin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:rdclin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:prlin'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:ned_railroads'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:ned_roads'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:ned_lakes'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:ned_places'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            }),
            new ol.layer.Image({
                source: new ol.source.ImageWMS({
                  url: 'http://localhost:8080/geoserver/wms',
                  params: {'LAYERS': 'almjet:ned_rivers'},
                  ratio: 1,
                  serverType: 'geoserver'
                })
            })
        ],
        target: "js-map"
    })
}