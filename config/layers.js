var LAYERS = {
  "region-labels": {
    "label": "Region labels",
    "source": {
      "type": "geojson",
      "data": "data/ipc_regions_centroid.geojson"
    },
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": 14,
      "text-field": "{region}",
      "text-transform": "uppercase"
    },
    "visible": false
  },
  "district-labels": {
    "label": "District labels",
    "source": {
      "type": "geojson",
      "data": "data/ipc_distrtics_centroids.geojson"
    },
    "type": "symbol",
    "minZoom": 5.5,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": 12,
      "text-field": "{name}",
      "text-offset": [0, 3]
    },
    "visible": false
  },
  "road-accidents": {
    "label": "Road Accidents (2015)",
    "source": {
      "type": "vector",
      "layer": "VT_Crashes__2015-3c9urz",
      "url": "mapbox://ona.7983hf6r"
    },
    "type": "circle",
    "paint": {
      "circle-opacity": 0.8,
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 1,
      "circle-stroke-opacity": 1,
      "circle-radius": 3,
      "circle-stroke-color": "#ccc",
      "circle-opacity": 0.6,
      "circle-color": "#FFDC00",
    },
    "no-outline": true,
    "visible": false
  },
  "region-boundaries": {
    "label": "Region boundaries",
    "source": {
      "type": "vector",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw"
    },
    "type": "line",
    "paint": {
      "line-width": 2,
      "line-color": "#444",
      "line-opacity": 0.6
    },
    "visible": true
  },
  "road-networks": {
    "label": "Road Networks",
    "source": {
      "type": "vector",
      "layer": "road",
      "url": "mapbox://mapbox.mapbox-streets-v7"
    },
    "type": "line",
    "paint": {
      "line-width": 1,
      "line-color": "#FF851B",
      "line-opacity": 0.6
    },
    "visible": false
  },
  "district-boundaries": {
    "label": "Districts boundaries",
    "source": {
      "type": "vector",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi"
    },
    "type": "line",
    "paint": {
      "line-width": 1,
      "line-color": "#444",
      "line-opacity": 0.6
    },
    "visible": true
  },
  "ipc-district-charts": {
    "label": "IPC Status",
    "source": {
      "type": "vector",
      "data": "data/ipc_district_totals.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_osm_id"]
    },
    "type": "chart",
    "chart": {
      "coordinates": ["longitude", "latitude"],
      "size": "100%",
      "innerSize": "52%",
      "width": "60px",
      "height": "60px",
      "offset": [-25, -25]
    },
    "categories": {
      "property": ["ipc_stressed", "ipc_crisis", "ipc_emergency"],
      "color": ["#FFDC00", "#FF851B", "#FF4136"],
      "label": ["Stressed", "Crisis", "Emergency"],
      "total": "population_LZ",
      "clusters": 6,
      "dimension": [40, 45, 50, 55, 60, 65]
    },
    "popup": {
      "body": "<b> {{Some content}} </b>"
    },
    "visible": false,
    "credit": "FSNAU (February-June 2017)"
  },
  "ipc-classification": {
    "label": "IPC (Rural, Urban and IDP) April-June 2017, Most Likely Scenario",
    "layers": ["ipc-2", "ipc-3", "ipc-4"],
    "categories": {
      "breaks": "no",
      "label": ["Stressed", "Crisis", "Emergency"],
      "color": ["#FFDC00", "#FF851B", "#FF4136"]
    },
    "visible": false,
    "credit": "FSNAU (Feb-June 2017) <br> Updated: June 12th, 2017"
  },
  "ipc-2": {
    "label": "Stressed",
    "source": {
      "type": "vector",
      "layer": "ipc-april-2en274",
      "url": "mapbox://ona.4rdryy87"
    },
    "type": "fill",
    "paint": {
      "fill-color": "#FFDC00",
      "fill-opacity": 0.7
    },
    "no-outline": true,
    "filter": ["==", "IPC", 2],
    "visible": false
  },
  "ipc-3": {
    "label": "Crisis",
    "source": {
      "type": "vector",
      "layer": "ipc-april-2en274",
      "url": "mapbox://ona.4rdryy87"
    },
    "type": "fill",
    "paint": {
      "fill-color": "#FF851B",
      "fill-opacity": 0.7
    },
    "no-outline": true,
    "filter": ["==", "IPC", 3],
    "visible": false
  },
  "ipc-4": {
    "label": "Emergency",
    "source": {
      "type": "vector",
      "layer": "ipc-april-2en274",
      "url": "mapbox://ona.4rdryy87"
    },
    "type": "fill",
    "paint": {
      "fill-color": "#FF4136",
      "fill-opacity": 0.7
    },
    "no-outline": true,
    "filter": ["==", "IPC", 4],
    "visible": false
  },
  "ipc3-4": {
    "label": "IPC 3+4 (Crisis + Emergency)",
    "source": {
      "type": "vector",
      "data": "data/ipc_district_totals.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "district_osm_id"]
    },
    "property": "ipc_3_4",
    "type": "circle",
    "popup": {
      "header": "district_name",
      "body": "<b> {{ipc_3_4}}</b>"
    },
    "categories": {
      "breaks": "yes",
      "color": "#FF851B",
      "clusters": 7
    },
    "visible": false,
    "credit": "FSNAU (February-June 2017)"
  },
  "gam": {
    "label": "Global Acute Malnutrition Levels (April 19th)",
    "source": {
      "type": "vector",
      "data": "data/region-gam-feb19.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "gam_perc",
    "categories": {
      "breaks": "no",
      "color": ["#FFDC00", "#FF851B", "#FF4136"],
      "limit": [0.1, 0.149, 1],
      "label": ["Low", "Moderate", "Severe"]
    },
    "popup": {
      "header": "region_name",
      "body": "{{gam_label}}"
    },
    "visible": false,
    "credit": "Nutrition Cluster (UNICEF), Samson Desie (sdesie@unicef.org)"
  },
  "people-displaced": {
    "label": "Drought Displacements (Nov 1, 2016 to April 14, 2017)",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "total_displacements",
    "categories": {
      "breaks": "yes",
      "color": "Oranges",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{displaced_label}} </b> <br> of {{total_population_unfpa_2014}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "credit": "OCHA",
    "popup": {
      "header": "region",
      "body": "{{food_safety_march_total}}"
    }
  },
  "received-cash-merged": {
    "label": "% Who received cash (cumulative)",
    "source": {
      "type": "vector",
      "data": [
        "data/cash_survey_concern.csv",
        "data/cash_survey_irc_cesvi.csv",
        "data/cash_survey_nrc.csv",
        202594,
        230904
      ],
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "survey_intro/receive_cash",
    "categories": {
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [85, 95, 100],
      "label": ["below 85%", "85% - 95%", "above 95%"]
    },
    "aggregate": {
      "type": "sum",
      "filter-values": ["1"],
      "min": 10,
      "filter": "Partner",
      "sub-filter": "Sub_Partner",
      "accepted-filter-values": ["BRCiS", "SCOPE", "UNFAO"],
      "accepted-sub-filter-values": ["UNICEF"],
      "group-by": "district_id",
      "timeseries": {
        "type": "cumulative",
        "field": "period"
      }
    },
    "merge-locations": true,
    "no-outline": true,
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{survey_intro/receive_cash}}% </b> <br> of {{total}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "visible": false,
    "credit": "<br/>Percent total of respondents successfully called who reported receiving cash. <br>MESH Project - Dorian LaGuardia (dorian.laguardia@thirdreef.org)"
  },
  "received-cash-period-timeseries": {
    "label": "% Who received cash (per week)",
    "source": {
      "type": "vector",
      "data": [
        "data/cash_survey_concern.csv",
        "data/cash_survey_irc_cesvi.csv",
        "data/cash_survey_nrc.csv",
        202594,
        230904
      ],
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "survey_intro/receive_cash",
    "categories": {
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [85, 95, 100],
      "label": ["below 85%", "85% - 95%", "above 95%"]
    },
    "aggregate": {
      "type": "sum",
      "filter-values": ["1"],
      "min": 10,
      "filter": "Partner",
      "sub-filter": "Sub_Partner",
      "accepted-filter-values": ["BRCiS", "SCOPE", "UNFAO"],
      "accepted-sub-filter-values": ["UNICEF"],
      "group-by": "district_id",
      "timeseries": {
        "type": "period",
        "field": "period"
      }
    },
    "merge-locations": true,
    "no-outline": true,
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{survey_intro/receive_cash}}% </b> <br> of {{total}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "visible": false,
    "credit": "<br />Percent total of respondents successfully called who reported receiving cash. <br>MESH Project - Dorian LaGuardia (dorian.laguardia@thirdreef.org)"
  },
  "paid-tax-merged": {
    "label": "% Who paid tax (cumulative)",
    "source": {
      "type": "vector",
      "data": [
        "data/cash_survey_concern.csv",
        "data/cash_survey_irc_cesvi.csv",
        "data/cash_survey_nrc.csv",
        202594,
        230904
      ],
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "main/pay_tax_commission",
    "categories": {
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [10, 20, 100],
      "label": ["below 10%", "10% - 20%", "above 20%"]
    },
    "aggregate": {
      "type": "sum",
      "filter-values": ["1"],
      "min": 10,
      "filter": "Partner",
      "sub-filter": "Sub_Partner",
      "accepted-filter-values": ["BRCiS", "SCOPE", "UNFAO"],
      "accepted-sub-filter-values": ["UNICEF"],
      "group-by": "district_id",
      "timeseries": {
        "type": "cumulative",
        "field": "period"
      }
    },
    "merge-locations": true,
    "no-outline": true,
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{main/pay_tax_commission}}%  </b> <br> of {{total}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "visible": false,
    "credit": "<br />Percent total of respondents successfully called who reported paying a tax on cash received. <br>MESH Project - Dorian LaGuardia (dorian.laguardia@thirdreef.org)"
  },
  "paid-tax-period-timeseries": {
    "label": "% Who paid tax (per week)",
    "source": {
      "type": "vector",
      "data": [
        "data/cash_survey_concern.csv",
        "data/cash_survey_irc_cesvi.csv",
        "data/cash_survey_nrc.csv",
        202594,
        230904
      ],
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "main/pay_tax_commission",
    "categories": {
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [10, 20, 100],
      "label": ["below 10%", "10% - 20%", "above 20%"]
    },
    "aggregate": {
      "type": "sum",
      "filter-values": ["1"],
      "min": 10,
      "filter": "Partner",
      "sub-filter": "Sub_Partner",
      "accepted-filter-values": ["BRCiS", "SCOPE", "UNFAO"],
      "accepted-sub-filter-values": ["UNICEF"],
      "group-by": "district_id",
      "timeseries": {
        "type": "period",
        "field": "period"
      }
    },
    "merge-locations": true,
    "no-outline": true,
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{main/pay_tax_commission}}%  </b> <br> of {{total}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]

    },
    "visible": false,
    "credit": "<br />Percent total of respondents successfully called who reported paying a tax on cash received. <br>MESH Project - Dorian LaGuardia (dorian.laguardia@thirdreef.org)"
  },
  "for-food-merged": {
    "label": "% Spent majority on food (cumulative)",
    "source": {
      "type": "vector",
      "data": [
        "data/cash_survey_concern.csv",
        "data/cash_survey_irc_cesvi.csv",
        "data/cash_survey_nrc.csv",
        202594,
        230904
      ],
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "main/food_amt",
    "merge-locations": true,
    "no-outline": true,
    "categories": {
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [60, 74, 100],
      "label": ["below 60%", "60% - 74%", "above 74%"]
    },
    "aggregate": {
      "type": "sum",
      "filter-values": ["all", "more_half"],
      "min": 10,
      "filter": "Partner",
      "sub-filter": "Sub_Partner",
      "accepted-filter-values": ["BRCiS", "SCOPE", "UNFAO"],
      "accepted-sub-filter-values": ["UNICEF"],
      "group-by": "district_id",
      "timeseries": {
        "field": "period",
        "type": "cumulative"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{main/food_amt}}%  </b> <br> of {{total}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "visible": false,
    "credit": "<br />Percent total of respondents successfully called who reported spending a majority of cash received on food. <br>MESH Project - Dorian LaGuardia (dorian.laguardia@thirdreef.org)"
  },
  "for-food-period-timeseries": {
    "label": "% Spent majority on food (per week)",
    "source": {
      "type": "vector",
      "data": [
        "data/cash_survey_concern.csv",
        "data/cash_survey_irc_cesvi.csv",
        "data/cash_survey_nrc.csv",
        202594,
        230904
      ],
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "main/food_amt",
    "merge-locations": true,
    "no-outline": true,
    "categories": {
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [60, 74, 100],
      "label": ["below 60%", "60% - 74%", "above 74%"]
    },
    "aggregate": {
      "type": "sum",
      "filter-values": ["all", "more_half"],
      "min": 10,
      "filter": "Partner",
      "sub-filter": "Sub_Partner",
      "accepted-filter-values": ["BRCiS", "SCOPE", "UNFAO"],
      "accepted-sub-filter-values": ["UNICEF"],
      "group-by": "district_id",
      "timeseries": {
        "field": "period",
        "type": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{main/food_amt}}% </b> <br> of {{total}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "visible": false,
    "credit": "<br />Percent total of respondents successfully called who reported spending a majority of cash received on food. <br>MESH Project - Dorian LaGuardia (dorian.laguardia@thirdreef.org)"
  },
  "sns-sam": {
    "label": "Nutrition - SAM beneficiaries admitted & treated (district level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_plus_nutri_health.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "SAM",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{SAM}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{SAM}}"
    },
    "visible": false,
    "credit": "SNS+ - SAM beneficiaries admitted & treated <br> Updated: July 11th, 2017"

  },
  "sns-mam": {
    "label": "Nutrition - MAM beneficiaries admitted & treated (district level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_plus_nutri_health.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "MAM",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{MAM}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{MAM}}"
    },
    "visible": false,
    "credit": "SNS+ - MAM beneficiaries admitted & treated <br> Updated: July 11th, 2017"

  },
  "sns-malaria": {
    "label": "Health - Number of people treated for malaria (district level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_plus_nutri_health.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "malaria",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{malaria}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{malaria}}"
    },
    "visible": false,
    "credit": "SNS+ - Number of people treated for malaria <br> Updated: July 11th, 2017"

  },
  "sns-pneumonia": {
    "label": "Health - Number of people treated for pneumonia (district level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_plus_nutri_health.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "pneumonia",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{pneumonia}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{pneumonia}}"
    },
    "visible": false,
    "credit": "SNS+ - Number of people treated for pneumonia <br> Updated: July 11th, 2017"

  },
  "sns-cholera": {
    "label": "Health - Number of people treated for cholera (district level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_plus_nutri_health.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "cholera",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{cholera}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{cholera}}"
    },
    "visible": false,
    "credit": "SNS+ - Number of people treated for cholera <br> Updated: July 11th, 2017"
  },
  "sns-iycf": {
    "label": "Health - Number of people attending IYCF (district level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_plus_nutri_health.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "IYCF",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{IYCF}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{IYCF}}"
    },
    "visible": false,
    "credit": "SNS+ - Number of people attending IYCF <br> Updated: July 11th, 2017"
  },
  "wfp-ct": {
    "label": "Cash - Cash Planned total beneficiaries against DFID contribution (planned)",
    "source": {
      "type": "vector",
      "data": "data/WFP_cash_total_beneficiaries.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "dfid_contribution",
    "categories": {
      "breaks": "yes",
      "color": "Greens",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b>{{dfid_contribution}}</b>",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "<b> Total contribution: </b> {{total_beneficiaries}} <br> <b>DFID contribution: </b> {{{dfid_contribution}}}"
    },
    "visible": false,
    "credit": "WFP Cash Planned total beneficiaries against DFID contribution per month - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 11th, 2017"
  },
  "brcis-uct": {
    "label": "Percentage of people who were reached with Unconditional Cash Transfer",
    "source": {
      "type": "vector",
      "data": "data/brcis_uct.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{target}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "district",
      "body": "<p style=text-align:left;> {{reached}} people reached <br>{{ratio_instalment}} <span style=float:right;>"
    },
    "visible": false,
    "credit": "BRCiS, 2017 <br> Updated: July 12th, 2017"
  },
  "brcis-uct-change": {
    "label": "Monthly percentage relative change of individuals reached with Unconditional Cash Transfer",
    "source": {
      "type": "vector",
      "data": "data/brcis_unconditional_cash.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "relative_change",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{relative_change}}% </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{progress}}"
    },
    "visible": false,
    "credit": "BRCiS, 2017 <br> Updated: June 28th, 2017"
  },
  "trucking-water": {
    "label": "Percentage of people provided with water trucking",
    "source": {
      "type": "vector",
      "data": "data/provided_water_trucking.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{percent_target}}% <br> of {{targeted}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "credit": "BRCiS, 2017 <br> Updated: June 7th, 2017"
  },
  "clean-water": {
    "label": "Percentage of people who reached with clean water",
    "source": {
      "type": "vector",
      "data": "data/brcis_clean_water.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 3,
      "suffix": "%"
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{target}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "district",
      "body": "<p style=text-align:left;>{{reached}} people reached <br>{{ratio_instalment}} <span style=float:right;>"
    },
    "credit": "BRCiS, 2017 <br> Updated: July 12th, 2017"
  },
  "clean-water-change": {
    "label": "Monthly percentage relative change of people who were reached with clean water",
    "source": {
      "type": "vector",
      "data": "data/brcis_clean_water.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "relative_change",
    "categories": {
      "breaks": "yes",
      "limit": [100],
      "color": "#1a9850",
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{relative_change}}% </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{progress}}"
    },
    "credit": "BRCiS, 2017 <br> Updated: June 28th, 2017"
  },
  "nutrition-supplies": {
    "label": "Percentage of people provided with nutrition",
    "source": {
      "type": "vector",
      "data": "data/brcis_nutrition.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b>{{percent_target}}% </b> <br> of {{target}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "district",
      "body": "<p style=text-align:left;>{{reached}} people reached <br>{{ratio_instalment}}<span style=float:right;>"
    },
    "credit": "BRCiS, 2017 <br> Updated: July 12th, 2017"
  },
  "nutrition-supplies-change": {
    "label": "Monthly percentage relative change of people provided with nutrition",
    "source": {
      "type": "vector",
      "data": "data/brcis_nutrition_supplies.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "relative_change",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 3,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{relative_change}}% </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "district",
      "body": "{{progress}}"
    },
    "credit": "BRCiS, 2017 <br> Updated: June 28th, 2017"
  },
  "hygiene-promotion": {
    "label": "Percentage of people who accessed hygiene promotion",
    "source": {
      "type": "vector",
      "data": "data/brcis_hygiene_promotion.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{target}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "district",
      "body": "<p style=text-align:left;>{{reached}} people reached <br>{{ratio_instalment}}<span style=float:right;>"
    },
    "visible": false,
    "credit": "BRCiS, 2017 <br> Updated: July 12th, 2017"
  },
  "brcis-health": {
    "label": "Percentage of people who accessed health",
    "source": {
      "type": "vector",
      "data": "data/brcis_health_access.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{target}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "district",
      "body": "<p style=text-align:left;> {{reached}} people reached <br>{{ratio_instalment}} <span style=float:right;>"
    },
    "visible": false,
    "credit": "BRCiS, 2017 <br> Updated: July 12th, 2017"

  },
  "hygiene-promotion-change": {
    "label": "Monthly percentage relative change of people who accessed hygiene promotion",
    "source": {
      "type": "vector",
      "data": "data/brcis_hygiene_promotion.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "relative_change",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{relative_change}}% </b> ",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "district",
      "body": "{{progress}}"
    },
    "visible": false,
    "credit": "BRCiS, 2017 <br> Updated: June 28th, 2017"
  },
  "irf-gaps": {
    "label": "IRF BRCiS Gap (Proportion funded of requested)",
    "source": {
      "type": "vector",
      "data": "data/irf_gaps_updated_grouped.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "gap_perc_inv",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{gap_perc_inv}}% </b> <br> of {{proposed}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "district",
      "body": "{{proposed}}"
    },
    "visible": false,
    "credit": "BRCiS Consortium"
  },
  "proposed-irf": {
    "label": "Proposed IRF BRCiS",
    "source": {
      "type": "vector",
      "data": "data/irf_gaps_updated_grouped.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "proposed",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "{{proposed}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "district",
      "body": "{{proposed}}"
    },
    "visible": false,
    "credit": "BRCiS Consortium"
  },
  "irf-current": {
    "label": "IRF Current BRCiS",
    "source": {
      "type": "vector",
      "data": "data/irf_gaps_updated_grouped.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "current",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "{{current}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "district",
      "body": "{{current}}"
    },
    "visible": false,
    "credit": "BRiCS Consortium"
  },
  "nutrition-treatment-march": {
    "label": "Children under 5 and PLW reached with malnutrition treatment services (Monthly Target, March)",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "march_nutrition_treatment_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{march_nutrition_treatment_perc}}% </b> <br> of {{march_treatment_nutrition_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{march_nutrition_treatment_total}}"
    },
    "visible": false,
    "credit": "Nutrition Cluster (UNICEF), Samson Desie (sdesie@unicef.org)"
  },
  "nutrition-prevention-march": {
    "label": "Children under 3 and PLW reached with malnutrition prevention services (Monthly Target, March)",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "nutrition_malnutrition_prev_march_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{nutrition_malnutrition_prev_march_perc}}% </b> <br> of {{nutrition_malnutrition_prev_march_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{nutrition_malnutrition_prev_march_total}}"
    },
    "credit": "Nutrition Cluster (UNICEF), Samson Desie (sdesie@unicef.org)"
  },
  "wfp-nutrition-sites": {
    "label": "Nutrition Sites - WFP",
    "source": {
      "type": "vector",
      "layer": "wfp_nut_sites-3crsxo",
      "url": "mapbox://ona.5r643v3p",
    },
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": {
        "stops": [[5, 0], [7, 5], [8, 10]]
      },
      "text-field": "{site} - {site_type}\n ({partner})",
      "text-offset": [0, 2],
      "icon-image": "triangle-11",
      "icon-allow-overlap": true
    },
    "visible": false
  },
  "sns-nutrition-sites": {
    "label": "Nutrition Sites - SNS",
    "source": {
      "type": "vector",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
    },
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": {
        "stops": [[5, 0], [7, 5], [8, 10]]
      },
      "text-field": "{site}\n ({partner})",
      "text-offset": [0, 2],
      "icon-image": "triangle-11",
      "icon-allow-overlap": true
    },
    "visible": false
  },
  "nutrition-sites": {
    "label": "Nutrition Sites - Cluster",
    "source": {
      "type": "vector",
      "layer": "nutrition_sites-may3-1oymep",
      "url": "mapbox://ona.3fxtmfgz"
    },
    "type": "symbol",
    "minZoom": 5.5,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": {
        "stops": [[5, 0], [7, 5], [8, 10]]
      },
      "text-field": "{Site name}",
      "text-offset": [0, 2],
      "icon-image": {
        "property": "site_type",
        "type": "categorical"
      },
      "icon-allow-overlap": true
    },
    "categories": {
      "breaks": "no",
      "label": ["Fixed Nutrition Sites", "Mobile Hq"],
      "type": ["fixed", "hq"],
      "shape": ["triangle-stroked-11", "triangle-15"],
      "color": ["#FFFFFF", "#000000"]
    },
    "visible": false,
    "credit": "Nutrition Cluster (UNICEF), Samson Desie (sdesie@unicef.org)"
  },
  "nutrition-site-radius": {
    "label": "Nutrition Site Access",
    "layers": ["nut-50", "nut-25", "nut-15"],
    "categories": {
      "breaks": "no",
      "label": [
        "Nutrition Sites 15KM Radius",
        "Nutrition Sites 25KM Radius",
        "Nutrition Sites 50km Radius (Mobile HQ Only)"
      ],
      "type": ["nut-50", "nut-25", "nut-15"],
      "shape": ["circle-sm", "circle-md", "circle-lg"],
      "color": ["#FF851B", "#FFDC00", "#77DBFF"]
    },
    "visible": false,
    "credit": "Nutrition Cluster (UNICEF), Samson Desie (sdesie@unicef.org)"
  },
  "nut-15": {
    "label": "Nutrition Sites 15KM Radius",
    "source": {
      "type": "vector",
      "layer": "som-nut-15km-8qva0q",
      "url": "mapbox://ona.6ldd9u7s"
    },
    "type": "fill",
    "paint": {
      "fill-color": "#FF851B",
      "fill-opacity": 0.4,
      "fill-outline-color": "#FF851B"
    },
    "visible": false
  },
  "nut-25": {
    "label": "Nutrition Sites 25KM Radius",
    "source": {
      "type": "vector",
      "layer": "som-nut-25km-1no2bq",
      "url": "mapbox://ona.0ooihwqf"
    },
    "type": "fill",
    "paint": {
      "fill-color": "#FFDC00",
      "fill-opacity": 0.4,
      "fill-outline-color": "#FFDC00"
    },
    "visible": false
  },
  "nut-50": {
    "label": "Nutrition Sites 50km Radius (Mobile HQ Only)",
    "source": {
      "type": "vector",
      "layer": "som-nut-50km-cim6dy",
      "url": "mapbox://ona.69t7v2vc"
    },
    "type": "fill",
    "paint": {
      "fill-color": "#77DBFF",
      "fill-opacity": 0.4,
      "fill-outline-color": "#D6EAF8"
    },
    "visible": false
  },
  "towns": {
    "label": "Towns & Cities",
    "source": {
      "type": "vector",
      "layer": "som-settlements-7xjvly",
      "url": "mapbox://ona.2nl50kfq"
    },
    "type": "symbol",
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": {
        "stops": [[6, 0], [8, 10], [10, 14]]
      },
      "text-field": "{NAME}",
      "text-offset": [0, 1.5],
      "icon-image": "circle-11",
      "icon-allow-overlap": false
    },
    "filter": ["!=", "DEFINITION", "Settlement"]
  },
  "settlements": {
    "label": "Settlements",
    "source": {
      "type": "vector",
      "layer": "som-settlements-7xjvly",
      "url": "mapbox://ona.2nl50kfq"
    },
    "type": "symbol",
    "paint": {
      "text-color": "#585858",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": {
        "stops": [[8, 0], [8, 10], [9, 10]]
      },
      "text-field": "{NAME} \n({CODE})",
      "text-offset": [0, 1.5],
      "icon-image": "dot-10",
      "icon-allow-overlap": true
    },
    "visible": false
  },
  "fsc-food-safety": {
    "label": "People reached through activities geared towards improving access to food and safety nets (Monthly Target, March 2017)",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "food_safety_march_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{food_safety_march_perc}}% </b> <br> of {{food_safety_march_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{food_safety_march_total}}"
    },
    "visible": false,
    "credit": "Food Security Cluster (FAO & WFP), info.somalia@foodsecuritycluster.net"
  },
  "fsc-livelihood-assets": {
    "label": "People reached through livelihood investment and asset activities (Monthly Target, March 2017)",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "livelihood_assets_march_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{livelihood_assets_march_perc}}% </b> <br> of {{livelihood_assets_march_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{livelihood_assets_march_total}}"
    },
    "visible": false,
    "credit": "Food Security Cluster (FAO & WFP), info.somalia@foodsecuritycluster.net"
  },
  "cfr": {
    "label": "Cumulative Case Fatality Rate (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_cumulative_uptowk29.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "cfr",
    "categories": {
      "breaks": "yes",
      "color": "Reds",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{cfr}}% </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "district",
      "body": "{{cfr}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int)"
  },
  "cfr-series": {
    "label": "Timeseries Case Fatality Rate (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_Regions_Timeseries_uptowk_29.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "CFR",
    "categories": {
      "breaks": "yes",
      "color": "Reds",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{CFR}}% </b>",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "region",
      "body": "{{CFR}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int)"
  },
  "cfr-cum-series": {
    "label": "Cumulative timeseries Case Fatality Rate (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_reg_timeseries_cum_29.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "CFR",
    "categories": {
      "breaks": "yes",
      "color": "Reds",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{CFR}}% </b>",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "{{CFR}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int) <br> Updated 20th June, 2017"
  },
  "awd-live": {
    "label": "Cumulative AWD Live Cases (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_cumulative_uptowk29.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "district_id"]
    },
    "type": "circle",
    "property": "live",
    "categories": {
      "breaks": "yes",
      "color": "#8dd3c7",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "{{live}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{live}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int)"
  },
  "awd-live-series": {
    "label": "Timeseries AWD Live Cases (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_Regions_Timeseries_uptowk_29.csv",
      "layer": "som_adm_1_centroids-aqsmhv",
      "url": "mapbox://ona.480rpmns",
      "join": ["osm_id", "region_id"]
    },
    "type": "circle",
    "property": "Live",
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "categories": {
      "breaks": "yes",
      "color": "#8dd3c7",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "{{Live}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "{{Live}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int)"
  },
  "awd-live-cum-series": {
    "label": "Cumulative timeseries AWD Live Cases (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_reg_timeseries_cum_29.csv",
      "layer": "som_adm_1_centroids-aqsmhv",
      "url": "mapbox://ona.480rpmns",
      "join": ["osm_id", "region_id"]
    },
    "type": "circle",
    "property": "Live",
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "categories": {
      "breaks": "yes",
      "color": "#8dd3c7",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "{{Live}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "{{Live}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int) <br> 20th June, 2017"
  },
  "awd-deaths": {
    "label": "Cumulative AWD Death Cases (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_cumulative_uptowk29.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "district_id"]
    },
    "type": "circle",
    "property": "dead",
    "categories": {
      "breaks": "yes",
      "color": "#D80000",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "{{dead}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{dead}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int)"
  },
  "awd-deaths-series": {
    "label": "Timeseries AWD Death Cases (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_Regions_Timeseries_uptowk_29.csv",
      "layer": "som_adm_1_centroids-aqsmhv",
      "url": "mapbox://ona.480rpmns",
      "join": ["osm_id", "region_id"]
    },
    "type": "circle",
    "property": "Dead",
    "categories": {
      "breaks": "yes",
      "color": "#D80000",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "{{Dead}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "{{Dead}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int)"
  },
  "awd-deaths-cum-series": {
    "label": "Cumulative timeseries AWD Death Cases (Wk 1-29)",
    "source": {
      "type": "vector",
      "data": "data/AWD_reg_timeseries_cum_29.csv",
      "layer": "som_adm_1_centroids-aqsmhv",
      "url": "mapbox://ona.480rpmns",
      "join": ["osm_id", "region_id"]
    },
    "type": "circle",
    "property": "Dead",
    "categories": {
      "breaks": "yes",
      "color": "#D80000",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "{{Dead}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "{{Dead}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster, Dr. Abdinasir (abubakara@who.int) <br> 20th June, 2017"
  },
  "measles": {
    "label": "Measles Cases (April 19th)",
    "source": {
      "type": "vector",
      "data": "data/measles_cases_somalia_9_april_2017.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "cases",
    "categories": {
      "breaks": "yes",
      "color": "YlOrRd",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "{{cases}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "{{cases}}"
    },
    "visible": false,
    "credit": "Somalia Health Cluster"
  },
  "health-services": {
    "label": "People receiving primary and/or basic secondary health care services (June target)",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "health_services_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{health_services_perc}}% </b> <br> of {{health_services_june_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{health_services_total}}"
    },
    "visible": false,
    "credit": "Health Cluster, Dr Gabriel (novelog@who.int)"
  },
  "wash-sustained-water": {
    "label": "People assisted with sustained access to safe water since 1 January 2017",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "wash_sustained_water_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{wash_sustained_water_perc}}% </b> <br> of {{wash_sustained_water_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{wash_sustained_water_total}}"
    },
    "visible": false,
    "credit": "WASH Cluster (UNICEF), Patrick Laurent (plaurent@unicef.org)"
  },
  "wash-temporary-water": {
    "label": "People assisted with temporary access to safe water since 1 January 2017",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "wash_temporary_water_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{wash_temporary_water_perc}}% </b> <br> of {{wash_temporary_water_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{wash_temporary_water_total}}"
    },
    "visible": false,
    "credit": "WASH Cluster (UNICEF), Patrick Laurent (plaurent@unicef.org)"
  },
  "wash-sanitation": {
    "label": "Number of beneficiaries accessing safe sanitation facilites",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "wash_sanitation_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{wash_sanitation_perc}}% </b> <br> of {{wash_sanitation_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{wash_sanitation_total}}"
    },
    "visible": false,
    "credit": "WASH Cluster (UNICEF), Patrick Laurent (plaurent@unicef.org)"
  },
  "wash-hygiene": {
    "label": "Number of beneficiaries reached through hygiene activities",
    "source": {
      "type": "vector",
      "data": "data/ocha.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "wash_hygiene_total",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{wash_hygiene_perc}}% </b> <br> of {{wash_hygiene_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]


    },
    "popup": {
      "header": "region",
      "body": "{{wash_hygiene_total}}"
    },
    "visible": false,
    "credit": "WASH Cluster (UNICEF), Patrick Laurent (plaurent@unicef.org)"
  },
  "rainfall": {
    "label": "Rainfall",
    "source": {
      "type": "vector",
      "data": "data/rainfall_timeseries.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#2b8cbe",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "river-levels": {
    "label": "Floods and River Levels",
    "source": {
      "type": "vector",
      "data": "data/Flood_and_river_levels.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#b35806",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "water-prices": {
    "label": "Price of Water",
    "source": {
      "type": "vector",
      "data": "data/price_of_water.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#91bfdb",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "nvdi": {
    "label": "Normalized Difference Vegetation Index",
    "source": {
      "type": "vector",
      "data": "data/NDVI.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#3D9970",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "maize-prices": {
    "label": "Maize Prices",
    "source": {
      "type": "vector",
      "data": "data/maize_prices.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#abdda4",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "rice": {
    "label": "Rice",
    "source": {
      "type": "vector",
      "data": "data/rice.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#e0e0e0",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "sorghum": {
    "label": "Sorghum",
    "source": {
      "type": "vector",
      "data": "data/sorghum.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#8c510a",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "goat-to-cereal": {
    "label": "Tot (Goat to Cereal)",
    "source": {
      "type": "vector",
      "data": "data/ToT_goat_to_cereal.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#542788",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "wage-to-cereal": {
    "label": "Tot (Wage to Cereal)",
    "source": {
      "type": "vector",
      "data": "data/ToT_wage_to_cereal.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#de77ae",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "wage-labour": {
    "label": "Wage Labour (Oct 2016 - April 2017)",
    "source": {
      "type": "vector",
      "data": "data/wage_labour.csv",
      "layer": "som_adm_2_centroids-2boneo",
      "url": "mapbox://ona.5tgmvwqy",
      "join": ["osm_id", "DistrictID"]
    },
    "type": "circle",
    "property": "Value",
    "categories": {
      "breaks": "yes",
      "color": "#cab2d6",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "popup": {
      "header": "district_name",
      "body": "{{Value}}"
    },
    "visible": false,
    "credit": "FSNAU"
  },
  "accessibility": {
    "label": "Security & Accessibilty (March 2017)",
    "source": {
      "type": "vector",
      "data": "data/somalia_accessibility_map_march2017.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "level",
    "categories": {
      "breaks": "no",
      "color": ["#2ECC40", "#FFDC00", "#FF4136"],
      "limit": [1, 2, 3],
      "label": ["Low", "Moderate", "Severe"]
    },
    "visible": false,
    "credit": "Somalia Health Cluster"
  },
  "somalia-violence": {
    "label": "ACLED Conflict Data (Realtime 2017)",
    "source": {
      "type": "vector",
      "data": "data/som_violence_aggregated_final.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "Fatalities",
    "categories": {
      "breaks": "yes",
      "color": "Reds",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "{{Fatalities}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district_name",
      "body": "{{Fatalities}}"
    },
    "visible": false,
    "credit": "ACLED Conflict Data for Africa (Realtime - 2017)"
  },
  "fsc-livelihood-inputs": {
    "label": "OCHA: Percentage of people targeted through livelihood seasonal inputs (Monthly)",
    "source": {
      "type": "vector",
      "data": "data/ocha_persons_targeted_livelihood_seasonal_inputs.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "YlGnBu",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people targeted through livelihood seasonal inputs (against monthly target) <br> Updated: June 8th, 2017"
  },
  "wash-safe-sanitation-facilities": {
    "label": "OCHA: Percentage of beneficiaries accessing safe sanitation facilities",
    "source": {
      "type": "vector",
      "data": "data/ocha_beneficiaries_accessing_safe_sanitation_facilites.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of beneficiaries accessing safe sanitation facilities (against monthly target) <br> Updated: June 8th, 2017"
  },
  "wash-hygiene-activities": {
    "label": "OCHA: Percentage of beneficiaries reached through hygiene activities",
    "source": {
      "type": "vector",
      "data": "data/ocha_beneficiaries_reached_hygiene_activities.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of beneficiaries reached through hygiene activities (against monthly target) <br> Updated: June 8th, 2017"
  },
  "beneficiaries-protection-cluster": {
    "label": "OCHA: Number of beneficiaries reached through Protection Cluster activities",
    "source": {
      "type": "vector",
      "data": "data/ocha_beneficiaries_reached_protection_cluster.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "value",
    "categories": {
      "breaks": "yes",
      "color": "RdPu",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "{{value}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "region",
      "body": "{{value}}"
    },
    "visible": false,
    "credit": "OCHA - Number of beneficiaries reached through Protection Cluster activities <br> Updated: June 8th, 2017"
  },
  "ed-child-drinking-water": {
    "label": "OCHA: Percentage of school going children accessing safe drinking water in schools (Cumulative)",
    "source": {
      "type": "vector",
      "data": "data/ocha_children_accessing_safe_drinking_water.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Purples",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{endyear_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of school going children accessing safe drinking water in schools (Cumulative against end year target) <br> Updated: June 8th, 2017"
  },
  "children-women-mal-prevention": {
    "label": "OCHA: Percentage of people (children < 3) and pregnant and lactating women reached with malnutrition prevention services",
    "source": {
      "type": "vector",
      "data": "data/ocha_children_pregnant_lactating_women_malnutrition_prevention.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people (children < 3) and pregnant and lactating women reached with malnutrition prevention services (against monthly target) <br> Updated: June 8th, 2017"
  },
  "children-women-mal-treatment": {
    "label": "OCHA: Percentage of people (children < 5) and pregnant and lactating women reached with malnutrition treatment services",
    "source": {
      "type": "vector",
      "data": "data/ocha_children_pregnant_lactating_women_malnutrition_treatment.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people (children < 5) and pregnant and lactating women reached with malnutrition treatment services (against monthly target) <br> Updated: June 8th, 2017"
  },
  "children-provided-with-food": {
    "label": "OCHA: Percentage of school going children provided with food/food grants (Cumulative)",
    "source": {
      "type": "vector",
      "data": "data/ocha_children_provided_with_food_food_grants.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Purples",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{endyear_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of school going children provided with food/food grants (Cumulative against end year target) <br> Updated: June 8th, 2017"
  },
  "children-provided-with-materials": {
    "label": "OCHA: Percentage of school going children provided with teaching and learning Materials (Cumulative)",
    "source": {
      "type": "vector",
      "data": "data/ocha_children_provided_with_Teaching_Learning_Materials.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Purples",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{endyear_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of school going children provided with teaching and learning Materials (Cumulative against end year target) <br> Updated: June 8th, 2017"
  },
  "displaced-people-assisted-NFIs": {
    "label": "OCHA: Percentage of displaced people assisted with non-food items per month",
    "source": {
      "type": "vector",
      "data": "data/ocha_displaced_people_assisted_NFIs.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Oranges",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of displaced people assisted with non-food items per month (against monthly target) <br> Updated: June 8th, 2017"
  },
  "assisted-emergency-shelter": {
    "label": "OCHA: Percentage of people assisted with emergency shelter solutions per month",
    "source": {
      "type": "vector",
      "data": "data/ocha_persons_assisted_emergency_shelter_solutions.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Oranges",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people assisted with emergency shelter solutions per month (against monthly target) <br> Updated: June 8th, 2017"
  },
  "persons-receiving-healthcare": {
    "label": "OCHA: Percentage of people receiving primary and/or basic secondary health care services",
    "source": {
      "type": "vector",
      "data": "data/ocha_persons_receiving_pri_sec_healthcare.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "YlGnBu",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people receiving primary and/or basic secondary health care services (against monthly target) <br> Updated: June 8th, 2017"
  },
  "persons-access-safe-water": {
    "label": "OCHA: Percentage of people with sustained access to safe water",
    "source": {
      "type": "vector",
      "data": "data/ocha_persons_access_safe_water.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people with sustained access to safe water (against monthly target) <br> Updated: June 8th, 2017"
  },
  "persons-access-food-nets": {
    "label": "OCHA: Percentage of people targeted through interventions geared towards improving access to food and safety nets (monthly)",
    "source": {
      "type": "vector",
      "data": "data/ocha_persons_targeted_access_food_safety_nets.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-15, -5]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people targeted through interventions geared towards improving access to food and safety nets (monthly against monthly target) <br> Updated: June 8th, 2017"
  },
  "persons-temporary-access-safe-water": {
    "label": "OCHA: Percentage of people with temporary access to safe water",
    "source": {
      "type": "vector",
      "data": "data/ocha_persons_temporary_access_safe_water.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA- Percentage of people with temporary access to safe water (against monthly target) <br> Updated: June 8th, 2017"
  },
  "persons-targeted-livelihood-asset": {
    "label": "OCHA: Percentage of people targeted through livelihood assets activities (Monthly)",
    "source": {
      "type": "vector",
      "data": "data/ocha_persons_targeted_livelihood_assets_activities.csv",
      "layer": "som_adm_1-6k13xf",
      "url": "mapbox://ona.bnc2rzsw",
      "join": ["osm_id", "region_id"]
    },
    "type": "fill",
    "property": "percent_target",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_region_labels.csv",
      "label": "<b> {{percent_target}}% </b> <br> of {{monthly_target}}",
      "join": ["osm_id", "region_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "region",
      "body": "{{value}} people reached"
    },
    "visible": false,
    "credit": "OCHA - Percentage of people targeted through livelihood assets activities (monthly against monthly target) <br> Updated: June 8th, 2017"
  },
  "wfp-BSFP": {
    "label": "Nutrition - Children under 3 years served by BSFP",
    "source": {
      "type": "vector",
      "data": "data/WFP_distplan_april_may.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]

    },
    "type": "fill",
    "property": "BSFP",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b>{{BSFP}}</b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "<b> Total contribution:</b> {{BSFP}} <br> <b>DFID contribution:</b> {{BSFP_dfid}}"

    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 20th, 2017"
  },
  "wfp-MCHN": {
    "label": "Nutrition - Children under 2 years served by MCHN services",
    "source": {
      "type": "vector",
      "data": "data/WFP_distplan_april_may.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "MCHN",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b>{{MCHN}}</b> ",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]

    },
    "popup": {
      "header": "district",
      "body": "<b>Total contribution:</b> {{MCHN}} <br> <b>DFID contribution:</b> {{MCHN_dfid}}"

    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 20th, 2017"
  },
  "wfp-TSFP": {
    "label": "Nutrition - Children 6 - 59 months and Pregnant and lactating women served by TSFP (district level)",
    "source": {
      "type": "vector",
      "data": "data/WFP_distplan_april_may.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "TSFP",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b>{{TSFP}}</b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "<b>Total contribution:</b> {{TSFP}} <br> <b>DFID contribution:</b> {{TSFP_dfid}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 20th, 2017"

  },
  "wfp-TSFP-cured": {
    "label": "Nutrition - Percentage children under 5 years cured through access to TSFP services (April)",
    "source": {
      "type": "vector",
      "data": "data/WFP_TSFP_U5_April.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "perc_recovered",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{perc_recovered}}% </b> <br> of {{total_discharges}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{cured}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"
  },
  "wfp-TSFP-dead": {
    "label": "Nutrition - Percentage children under 5 years who died regardless of access to TSFP services (April)",
    "source": {
      "type": "vector",
      "data": "data/WFP_TSFP_U5_April.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "perc_dead",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{perc_dead}}% </b> <br> of {{total_discharges}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{died}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"
  },
  "wfp-TSFP-defaulted": {
    "label": "Nutrition - Percentage children under 5 years who defaulted access to TSFP services (April)",
    "source": {
      "type": "vector",
      "data": "data/WFP_TSFP_U5_April.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "per_defaulted",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{per_defaulted}}% </b> <br> of {{total_discharges}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{defaulter}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"
  },
  "wfp-TSFP-non-recovered": {
    "label": "Nutrition - Percentage children under 5 years with access to TSFP services that haven't recovered (April)",
    "source": {
      "type": "vector",
      "data": "data/WFP_TSFP_U5_April.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "perc_non_recovery",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{perc_non_recovery}}% </b> <br> of {{total_discharges}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{non_recovered}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"

  },
  "wfp-TSFP-cured-PLW": {
    "label": "Nutrition - Percentage of Pregnant and Lactating women under 5 years cured through access to TSFP services (April)",
    "source": {
      "type": "vector",
      "data": "data/WFP_PLW_TSFP_April.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "perc_recovered",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{perc_recovered}}% </b> <br> of {{total_discharges}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{cured}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"

  },
  "wfp-TSFP-dead-PLW": {
    "label": "Nutrition - Percentage of Pregnant and Lactating women who died regardless of access to TSFP services (April)",
    "source": {
      "type": "vector",
      "data": "data/WFP_PLW_TSFP_April.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "perc_dead",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{perc_dead}}% </b> <br> of {{total_discharges}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{died}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"

  },
  "wfp-TSFP-defaulted-PLW": {
    "label": "Nutrition - Percentage of Pregnant and Lactating women who defaulted access to TSFP services (April)",
    "source": {
      "type": "vector",
      "data": "data/WFP_PLW_TSFP_April.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "per_defaulted",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7

    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{per_defaulted}}% </b> <br> of {{total_discharges}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{defaulter}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"

  },
  "wfp-TSFP-non-recovered-PLW": {
    label: "Nutrition - Percentage of Pregnant and Lactating women with access to TSFP services that haven't recovered (April)",
    source: {
      type: "vector",
      data: "data/WFP_PLW_TSFP_April.csv",
      layer: "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      join: ["osm_id", "district_id"]
    },
    type: "fill",
    property: "perc_non_recovery",
    categories: {
      breaks: "yes",
      color: "Blues",
      clusters: 7

    },
    labels: {
      data: "data/som_district_labels.csv",
      label: "<b> {{perc_non_recovery}}% </b> <br> of {{total_discharges}}",
      join: ["osm_id", "district_id"],
      coordinates: ["longitude", "latitude"],
      minZoom: 4.5,
      height: 30,
      width: 30,
      offset: [-18, 10]

    },
    "popup": {
      "header": "district",
      "body": "{{non_recovered}}"
    },
    "visible": false,
    "credit": "WFP - Dorian LaGuardia <br> (dorian.laguardia@thirdreef.org) <br> Updated: July 6th, 2017"
  },
  "unicef-sam-u5": {
    "label": "Nutrition - Number of people (children < 5) treated for SAM",
    "source": {
      "type": "vector",
      "data": "data/unicef_sam_treatments.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "total_beneficiaries",
    "categories": {
      "breaks": "yes",
      "color": "Blues",
      "clusters": 7
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{total_beneficiaries}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]

    },
    "popup": {
      "header": "district",
      "body": "{{total_beneficiaries}}"
    },
    "visible": false,
    "credit": "UNICEF <br> Updated: June 14th, 2017"
  },
  "fao-cfw": {
    "label": "Cash - Percentage households that received cash for work",
    "source": {
      "type": "vector",
      "data": "data/CFW_Fao.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "perc_HHs_reached",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{perc_HHs_reached}}% </b> <br> of {{planned_HHs}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "district",
      "body": "<p style=text-align:left;>{{HHs_reached}} HHs reached  <br>{{ratio_instalment}} <span style=float:right;>"
    },
    "visible": false,
    "credit": "FAO - Percentage of households that received cash for work (against planned households) <br> Updated: July 24th, 2017"
  },
  "fao-uct": {
    "label": "Cash - Percentage households that received unconditional cash transfer",
    "source": {
      "type": "vector",
      "data": "data/UCT_Fao.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "perc_HHs_reached",
    "categories": {
      "breaks": "yes",
      "color": "RdYlGn",
      "clusters": 5,
      "suffix": "%"
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      }
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{perc_HHs_reached}}% </b> <br> of {{planned_HHs}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-20, -4]
    },
    "popup": {
      "header": "district",
      "body": "<p style=text-align:left;>{{HHs_reached}} HHs reached  <br>{{ratio_instalment}} <span style=float:right;>"
    },
    "visible": false,
    "credit": "FAO - Percentage of households that received unconditional cash transfer (against planned households) <br> Updated: July 24th, 2017"
  },
  "fao-livestock": {
    "label": "Livestock - Number of livestock (all species) reached by emergency animal health care",
    "source": {
      "type": "vector",
      "data": "data/FAO_hhs_and_livestock.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "livestock_reached",
    "categories": {
      "breaks": "yes",
      "color": "YlOrBr",
      "clusters": 4
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{livestock_reached}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{livestock_reached}}"
    },
    "visible": false,
    "credit": "FAO - Number of livestock (all species) reached by emergency animal health care, <br> Updated: June 19th, 2017"
  },
  "fao-livestock-hh": {
    "label": "Livestock - Number of households reached by emergency animal health care",
    "source": {
      "type": "vector",
      "data": "data/FAO_hhs_and_livestock.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "households",
    "categories": {
      "breaks": "yes",
      "color": "YlOrBr",
      "clusters": 4
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "<b> {{households}} </b>",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "header": "district",
      "body": "{{households}}"
    },
    "visible": false,
    "credit": "FAO - Number of households reached by emergency animal health care, <br> Updated: June 19th, 2017"
  },
  "somalia-access-gen": {
    "label": "Somalia accessibility for General Staff (June 2017)",
    "source": {
      "type": "vector",
      "data": "data/Somalia_access_gen_nat.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "general_access",
    "categories": {
      "breaks": "no",
      "limit": [0, 16, 36, 51, 66, 86],
      "color": ["#401900", "#803300", "#996619", "#BF994D", "#CCB380", "#E6D9CC"],
      "label": ["0-15", "16 - 35", "36 - 50", "51 - 65", "66 - 85", "86 - 100"]
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "{{general_access}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "body": "<b>{{district}}</b>"
    },
    "visible": false,
    "credit": " <p style=text-align:left;> 0 = Access denied <span style=float:right;> 100 = Full access </span> <br> <br> INSO - Access difficulties for General staff by district, <br> Updated: June 20th, 2017"
  },
  "somalia-access-nat": {
    "label": "Somalia accessibility for National Staff (June 2017)",
    "source": {
      "type": "vector",
      "data": "data/Somalia_access_gen_nat.csv",
      "layer": "som_adm_2-0j5bly",
      "url": "mapbox://ona.6gl2shzi",
      "join": ["osm_id", "district_id"]
    },
    "type": "fill",
    "property": "national_access",
    "categories": {
      "breaks": "no",
      "limit": [0, 16, 36, 51, 66, 86],
      "color": ["#401900", "#803300", "#996619", "#BF994D", "#CCB380", "#E6D9CC"],
      "label": ["0-15", "16 - 35", "36 - 50", "51 - 65", "66 - 85", "86 - 100"]
    },
    "labels": {
      "data": "data/som_district_labels.csv",
      "label": "{{national_access}}",
      "join": ["osm_id", "district_id"],
      "coordinates": ["longitude", "latitude"],
      "minZoom": 4.5,
      "height": 30,
      "width": 30,
      "offset": [-18, 10]
    },
    "popup": {
      "body": "<b>{{district}}</b>"
    },
    "visible": false,
    "credit": "<p style=text-align:left;> 0 = Access denied <span style=float:right;> 100 = Full access </span> <br> <br> INSO - Access difficulties for National staff by district, <br> Updated: June 20th, 2017"
  },
  "tpm-nutrition-sites": {
    "label": "Nutrition Sites",
    "source": {
      "type": "geojson",
      "data": "data/tpm_health_sites.geojson"
    },
    "type": "symbol",
    "minZoom": 0,
    "paint": {
      "text-color": "#000",
      "text-halo-color": "#fff",
      "text-halo-width": 1.3,
      "text-halo-blur": 1
    },
    "layout": {
      "text-size": 10,
      "text-field": "{site_name}\n ({ngo})",
      "icon-image": "triangle-11",
      "text-offset": [0, 1.5]
    },
    "visible": false
  },
  "tpm-overcapacity": {
    "label": "Admissions: Could not meet needs/demand in last 4 weeks?",
    "source": {
      "data": "data/tpm_indicator_1_2.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9'],
    "minZoom": 0,
    "property": "c1_over_capacity",
    "categories": {
      "breaks": "no",
      "label": ["No", "Yes"],
      "type": ["1", "2"],
      "shape": ["circle-lg", "circle-lg"],
      "limit": [1, 3],
      "color": ["#2ECC40", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
  },
  "tpm-low-admissions": {
    "label": "Admissions: Low admissions in last 4 weeks?",
    "source": {
      "data": "data/tpm_indicator_1_2.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9'],
    "minZoom": 0,
    "property": "c2_low_admissions",
    "categories": {
      "breaks": "no",
      "label": ["No", "Yes"],
      "type": ["1", "2"],
      "shape": ["circle-lg", "circle-lg"],
      "limit": [1, 3],
      "color": ["#FF4136", "#2ECC40"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"

  },
  "tpm-sam-admissions": {
    "label": "SAM Admissions / Capacity",
    "source": {
      "type": "geojson",
      "data": "data/tpm_performance.geojson"
    },
    "type": "circle",
    "minZoom": 0,
    "paint": {
      "circle-opacity": 0.8,
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 1,
      "circle-stroke-opacity": 1,
      "circle-radius": {
        "base": 10,
        "stops": [[8, 10], [12, 15], [22, 20]]
      },
      "circle-stroke-color": "#ccc",
      "circle-opacity": 0.6,
      "circle-color": {
        "property": "score_sam_admissions",
        "type": "interval",
        "stops": [
          [5, "#2ECC40"],
          [10, "#FF851B"],
          [20, "#FF4136"]]
      }
    },
    "categories": {
      "breaks": "no",
      "label": ["0-5%", "6-10%", "+10%"],
      "type": ["1", "2"],
      "shape": ["circle-lg", "circle-lg", "circle-lg"],
      "color": ["#2ECC40", "#FF851B", "#FF4136"]
    },
    "credit": "MESH Project",
    "visible": false
  },
  "tpm-outreach": {
    "label": "Outreach: Daily visits to OP children that have SAM?",
    "source": {
      "data": "data/tpm_indicator_3.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9'],
    "minZoom": 0,
    "property": "f3_daily_visits_op_children",
    "categories": {
      "breaks": "no",
      "label": ["Yes", "No"],
      "type": ["1", "2"],
      "shape": ["circle-lg", "circle-lg"],
      "limit": [1, 2],
      "color": ["#2ECC40", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
  },
  "tpm-supplies-nutrition": {
    "label": "Supplies: Nutrition",
    "source": {
      "type": "geojson",
      "data": "data/tpm_performance.geojson"
    },
    "type": "circle",
    "minZoom": 0,
    "paint": {
      "circle-opacity": 0.8,
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 1,
      "circle-stroke-opacity": 1,
      "circle-radius": {
        "base": 10,
        "stops": [[8, 10], [12, 15], [22, 20]]
      },
      "circle-stroke-color": "#ccc",
      "circle-opacity": 0.6,
      "circle-color": {
        "property": "supplies_nutrition",
        "type": "categorical",
        "stops": [
          [0, "#2ECC40"],
          [1, "#FF4136"]]
      }
    },
    "categories": {
      "breaks": "no",
      "label": ["Yes", "No"],
      "type": ["1", "2"],
      "shape": ["circle-lg", "circle-lg"],
      "color": ["#2ECC40", "#FF4136"]
    },
    "credit": "MESH Project",
    "visible": false
  },
  "tpm-rutf": {
    "label": "Supplies: Nutrition: RUTF",
    "source": {
      "data": "data/tpm_rutf.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9', '9'],
    "minZoom": 0,
    "property": "rutf",
    "categories": {
      "shape": true,
      "breaks": "no",
      "label": ["0-5", "6-14", "above 14"],
      "shape": ["circle-lg", "circle-lg", "circle-lg"],
      "limit": [5, 14, 200],
      "color": ["#2ECC40", "#FF851B", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
 },
 "tpm-rusf": {
    "label": "Supplies: Nutrition: RUSF",
    "source": {
      "data": "data/tpm_rusf.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9', '9'],
    "minZoom": 0,
    "property": "rusf",
    "categories": {
      "shape": true,
      "breaks": "no",
      "label": ["0-5", "6-14", "above 14"],
      "shape": ["circle-lg", "circle-lg", "circle-lg"],
      "limit": [5, 14, 200],
      "color": ["#2ECC40", "#FF851B", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
  },
  "tpm-supplies-health": {
    "label": "Supplies: Health",
    "source": {
      "type": "geojson",
      "data": "data/tpm_performance.geojson"
    },
    "type": "circle",
    "minZoom": 0,
    "paint": {
      "circle-opacity": 0.8,
      "circle-stroke-color": "#fff",
      "circle-stroke-width": 1,
      "circle-stroke-opacity": 1,
      "circle-radius": {
        "base": 10,
        "stops": [[8, 10], [12, 15], [22, 20]]
      },
      "circle-stroke-color": "#ccc",
      "circle-opacity": 0.6,
      "circle-color": {
        "property": "supply_health",
        "type": "categorical",
        "stops": [
          [0, "#2ECC40"],
          [1, "#FF4136"]]
      }
    },
    "categories": {
      "breaks": "no",
      "label": ["Yes", "No"],
      "type": ["1", "2"],
      "shape": ["circle-lg", "circle-lg"],
      "color": ["#2ECC40", "#FF4136"]
    },
    "credit": "MESH Project",
    "visible": false
  },
  "tpm-anthelmintics": {
    "label": "Supplies: Health: Anthelmintics",
    "source": {
      "data": "data/tpm_anthelmintics.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9', '9'],
    "minZoom": 0,
    "property": "anthelmintics",
    "categories": {
      "shape": true,
      "breaks": "no",
      "label": ["0-5", "6-14", "above 14"],
      "shape": ["circle-lg", "circle-lg", "circle-lg"],
      "limit": [5, 14, 200],
      "color": ["#2ECC40", "#FF851B", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
  },
  "tpm-antibiotics": {
    "label": "Supplies: Health: Antibiotics",
    "source": {
      "data": "data/tpm_antibiotics.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9', '9'],
    "minZoom": 0,
    "property": "antibiotics",
    "categories": {
      "shape": true,
      "breaks": "no",
      "label": ["0-5", "6-14", "above 14"],
      "shape": ["circle-lg", "circle-lg", "circle-lg"],
      "limit": [5, 14, 200],
      "color": ["#2ECC40", "#FF851B", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
  },
  "tpm-vaccinations": {
    "label": "Supplies: Health: Vaccinations",
    "source": {
      "data": "data/tpm_vaccinations.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9', '9'],
    "minZoom": 0,
    "property": "vaccinations",
    "categories": {
      "shape": true,
      "breaks": "no",
      "label": ["0-5", "6-14", "above 14"],
      "shape": ["circle-lg", "circle-lg", "circle-lg"],
      "limit": [5, 14, 200],
      "color": ["#2ECC40", "#FF851B", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"

  },
  "tpm-staffing": {
    "label": "Staffing: Total absent/Total staff",
    "source": {
      "data": "data/tpm_indicator_6_7.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9', '9'],
    "minZoom": 0,
    "property": "staffing_score",
    "categories": {
      "shape": true,
      "breaks": "no",
      "label": ["0-15%", "16-20%", "above 20%"],
      "limit": [15, 20, 200],
      "color": ["#2ECC40", "#FF851B", "#FF4136"]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
  },
  "tpm-facility": {
    "label": "Facility:(Water+Latrines+Shelter+Cleanliness)",
    "source": {
      "data": "data/tpm_indicator_6_7.csv",
      "type": "vector",
      "layer": "tpm_health_sites-db5hb0",
      "url": "mapbox://ona.bbbcm8cl",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "radius-range": ['9', '9', '9'],
    "minZoom": 0,
    "property": "facility_score",
    "categories": {
      "shape": true,
      "breaks": "no",
      "label": ["Less than 2", "2-2.5", "2.6-3.0"],
      "limit": [2, 2.5, 3],
      "color": ["#FF4136", "#FF851B", "#2ECC40",]
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "dfid_partner",
    },
    "popup": {
      "header": "site_name",
      "body": "{{type_of_site}}"
    },
    "visible": false,
    "credit": "MESH Project"
  },
  "nutrition-sites-sam-admissions": {
    "label": "SAM Admissions (facility level)",
    "source": {
      "data": "data/SNS_data.csv",
      "type": "vector",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "data": "data/SNS_data.csv",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "admissions_SAM",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [20, 200, 3000],
      "label": ["below 20", "20 to 200", "above 200"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Total admissions:</b> {{admissions_SAM}} <span style=float:right;>"
    },

    "visible": false,
    "credit": "SNS Nuitrition Sites - SAM Admissions"
  },
  "nutrition-sites-sam-default-cases": {
    "label": "SAM Percentage of default cases (facility level)",
    "source": {
      "data": "data/SNS_data_2.csv",
      "type": "vector",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "data": "data/SNS_data_2.csv",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_defaulters_SAM",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [15, 25, 100],
      "label": ["below 15%", "15 - 25%", "above 25%"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b> Percentage of default cases:</b> {{perc_defaulters_SAM}}% <br><b>Total admissions:</b>{{admissions_SAM}}<br><b>Total discharges:</b>{{tot_discharges_SAM}}<span style=float:right;>"
    },

    "visible": false,
    "credit": "SNS Nuitrition Sites - SAM Percentage of default cases"
  },
  "nutrition-sites-sam-recovered-cases": {
    "label": "SAM Percentage of recovered cases (facility level)",
    "source": {
      "data": "data/SNS_data_2.csv",
      "type": "vector",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "data": "data/SNS_data_2.csv",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_recovered_SAM",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [65, 75, 100],
      "label": ["below 65%", "65 - 75%", "above 75%"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Percentage of recovered cases:</b> {{perc_recovered_SAM}}% <br><b>Total admissions:</b>{{admissions_SAM}}<br><b>Total discharges:</b>{{tot_discharges_SAM}}<span style=float:right;>"
    },

    "visible": false,
    "credit": "SNS Nuitrition Sites - SAM Percentage of recovered cases"
  },
  "nutrition-sites-mam-admissions": {
    "label": "MAM Admissions (facility level)",
    "source": {
      "data": "data/SNS_data.csv",
      "type": "vector",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "data": "data/SNS_data.csv",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "admissions_MAM",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [20, 200, 3500],
      "label": ["below 20", "20 to 200", "above 200"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Total admissions:</b> {{admissions_MAM}} <span style=float:right;>"
    },

    "visible": false,
    "credit": "SNS Nuitrition Sites - MAM Admissions"
  },

  "nutrition-sites-mam-default-cases": {
    "label": "MAM Percentage of default cases (facility level)",
    "source": {
      "data": "data/SNS_data_2.csv",
      "type": "vector",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "data": "data/SNS_data_2.csv",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_defaulters_MAM",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [15, 25, 100],
      "label": ["below 15%", "15 - 25%", "above 25%"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b> Percentage of default cases:</b> {{perc_defaulters_MAM}}% <br><b>Total admissions:</b>{{admissions_MAM}}<br><b>Total discharges:</b>{{tot_discharges_MAM}} <span style=float:right;>"
    },
    "visible": false,
    "credit": "SNS Nuitrition Sites - MAM Percentage of default cases"
  },
  "nutrition-sites-mam-recovered-cases": {
    "label": "MAM Percentage of recovered cases (facility level)",
    "source": {
      "data": "data/SNS_data_2.csv",
      "type": "vector",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "data": "data/SNS_data_2.csv",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_recovered_MAM",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [65, 75, 100],
      "label": ["below 65%", "65 - 75%", "above 75%"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Percentage of recovered cases:</b> {{perc_recovered_MAM}}% <br><b>Total admissions:</b>{{admissions_MAM}}<br><b>Total discharges:</b>{{tot_discharges_MAM}}<span style=float:right;>"
    },

    "visible": false,
    "credit": "SNS Nuitrition Sites - MAM Percentage of recovered cases"
  },
  "sns-nuitition-sites-malaria": {
    "label": "Health - No. of people treated for Malaria (facility level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_data_2.csv",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "property": "malaria",
    "minZoom": 5.5,
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [10, 50, 100],
      "label": ["below 10", "10 to 50", "above 50"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "Malaria Cases: <b> {{malaria}}</b>"
    },
    "visible": false,
    "credit": "SNS Nutrition Sites - Malaria Cases"
  },
  "sns-nuitition-sites-pneumonia": {
    "label": "Health - No. of people treated for Pneumonia (facility level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_data_2.csv",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "property": "pneumonia",
    "minZoom": 5.5,
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [10, 50, 500],
      "label": ["below 10", "10 to 50", "above 50"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "Pneumonia Cases: <b> {{pneumonia}}</b>"
    },
    "visible": false,
    "credit": "SNS Nutrition Sites - Pneumonia Cases"
  },
  "sns-nuitition-sites-cholera": {
    "label": "Health - No. of people treated for Cholera (facility level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_data.csv",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "property": "cholera",
    "minZoom": 5.5,
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [10, 50, 500],
      "label": ["below 10", "10 to 50", "above 50"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "Cholera Cases: <b> {{cholera}}</b>"
    },
    "visible": false,
    "credit": "SNS Nutrition Sites - Cholera Cases"
  },
  "sns-nuitition-sites-IYCF": {
    "label": "Health - No. of people treated for IYCF (facility level)",
    "source": {
      "type": "vector",
      "data": "data/SNS_data_2.csv",
      "layer": "SNS_sites-d476ic",
      "url": "mapbox://ona.8e07jfzc",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "property": "IYCF",
    "minZoom": 5.5,
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [10, 50, 2000],
      "label": ["below 10", "10 to 50", "above 50"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
      "filter": "partner",
    },
    "popup": {
      "header": "site",
      "body": "IYCF Cases: <b> {{IYCF}}</b>"
    },
    "visible": false,
    "credit": "SNS Nutrition Sites - IYCF Cases"
  },
  "nutrition-sites-tsfp-u5-admissions": {
    "label": "MAM Admissions under 5 (facility level)",
    "source": {
      "type": "vector",
      "data": [
        "data/WFP_TSFP_JANUARY_U5.csv",
        "data/WFP_TSFP_FEBRUARY_U5.csv",
        "data/WFP_TSFP_MARCH_U5.csv",
        "data/WFP_TSFP_APRIL_U5.csv",
        "data/WFP_TSFP_MAY_U5.csv",
        "data/WFP_TSFP_JUNE_U5.csv"
      ],
      "layer": "wfp_nut_sites-3crsxo",
      "url": "mapbox://ona.5r643v3p",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "total_admissions",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [20, 200, 3500],
      "label": ["below 20", "20 to 200", "above 200"],
    },
    "aggregate": {
      "timeseries": {
        "type": "cumulative",
        "field": "period"
      },
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Total admissions:</b> {{total_admissions}}<span style=float:right;>"
    },
    "visible": false,
    "credit": "WFP Nutrition Sites - MAM"
  },
  "nutrition-sites-tsfp-u5-defaulters": {
    "label": "MAM Percentage of default cases under 5 (facility level)",
    "source": {
      "type": "vector",
      "data": [
        "data/WFP_TSFP_JANUARY_U5.csv",
        "data/WFP_TSFP_FEBRUARY_U5.csv",
        "data/WFP_TSFP_MARCH_U5.csv",
        "data/WFP_TSFP_APRIL_U5.csv",
        "data/WFP_TSFP_MAY_U5.csv",
        "data/WFP_TSFP_JUNE_U5.csv"
      ],
      "layer": "wfp_nut_sites-3crsxo",
      "url": "mapbox://ona.5r643v3p",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_defaulted",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [15, 25, 100],
      "label": ["below 15%", "15 - 25%", "above 25%"],
    },
    "aggregate": {
      "timeseries": {
        "type": "cumulative",
        "field": "period"
      },
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b> Percentage of default cases:</b> {{perc_defaulted}}%<br><b>Total admissions:</b> {{total_admissions}}<br><b>Total discharges:</b> {{total_discharges}}<span style=float:right;>"
    },
    "visible": false,
    "credit": "WFP Nutrition Sites - MAM"
  },
  "nutrition-sites-tsfp-u5-recovered": {
    "label": "MAM Percentage of recovered cases under 5 (facility level)",
    "source": {
      "type": "vector",
      "data": [
        "data/WFP_TSFP_JANUARY_U5.csv",
        "data/WFP_TSFP_FEBRUARY_U5.csv",
        "data/WFP_TSFP_MARCH_U5.csv",
        "data/WFP_TSFP_APRIL_U5.csv",
        "data/WFP_TSFP_MAY_U5.csv",
        "data/WFP_TSFP_JUNE_U5.csv"
      ],
      "layer": "wfp_nut_sites-3crsxo",
      "url": "mapbox://ona.5r643v3p",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_recovered",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [65, 75, 100],
      "label": ["below 65%", "65 - 75%", "above 75%"],
    },
    "aggregate": {
      "timeseries": {
        "type": "cumulative",
        "field": "period"
      },
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Percentage of recovered cases:</b> {{perc_recovered}}%<br><b>Total admissions:</b> {{total_admissions}}<br><b>Total discharges:</b> {{total_discharges}}<span style=float:right;>"
    },
    "visible": false,
    "credit": "WFP Nutrition Sites - MAM"
  },
  "nutrition-sites-tsfp-PLW-admissions": {
    "label": "MAM Admissions PLW (facility level)",
    "source": {
      "type": "vector",
      "data": [
        "data/WFP_TSFP_JANUARY_PLW.csv",
        "data/WFP_TSFP_FEBRUARY_PLW.csv",
        "data/WFP_TSFP_MARCH_PLW.csv",
        "data/WFP_TSFP_APRIL_PLW.csv",
        "data/WFP_TSFP_MAY_PLW.csv",
        "data/WFP_TSFP_JUNE_PLW.csv"
      ],
      "layer": "wfp_nut_sites-3crsxo",
      "url": "mapbox://ona.5r643v3p",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "total_admissions",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [20, 200, 3500],
      "label": ["below 20", "20 to 200", "above 200"],
      "clusters": 6

    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Total admissions:</b> {{total_admissions}}<span style=float:right;>"
    },
    "visible": false,
    "credit": "WFP Nutrition Sites - MAM"
  },
  "nutrition-sites-tsfp-PLW-defaulters": {
    "label": "MAM Percentage of default cases PLW (facility level)",
    "source": {
      "type": "vector",
      "data": [
        "data/WFP_TSFP_JANUARY_PLW.csv",
        "data/WFP_TSFP_FEBRUARY_PLW.csv",
        "data/WFP_TSFP_MARCH_PLW.csv",
        "data/WFP_TSFP_APRIL_PLW.csv",
        "data/WFP_TSFP_MAY_PLW.csv",
        "data/WFP_TSFP_JUNE_PLW.csv"
      ],
      "layer": "wfp_nut_sites-3crsxo",
      "url": "mapbox://ona.5r643v3p",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_defaulted",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#2ca25f", "#feb24c", "#f03b20"],
      "limit": [15, 25, 100],
      "label": ["below 15%", "15 - 25%", "above 25%"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b> Percentage of default cases:</b> {{perc_defaulted}}%<br><b>Total admissions:</b> {{total_admissions}}<br><b>Total discharges:</b> {{total_discharges}}<span style=float:right;>"
    },
    "visible": false,
    "credit": "WFP Nutrition Sites - MAM"
  },
  "nutrition-sites-tsfp-PLW-recovered": {
    "label": "MAM Percentage of recovered cases PLW (facility level)",
    "source": {
      "type": "vector",
      "data": [
        "data/WFP_TSFP_JANUARY_PLW.csv",
        "data/WFP_TSFP_FEBRUARY_PLW.csv",
        "data/WFP_TSFP_MARCH_PLW.csv",
        "data/WFP_TSFP_APRIL_PLW.csv",
        "data/WFP_TSFP_MAY_PLW.csv",
        "data/WFP_TSFP_JUNE_PLW.csv"
      ],
      "layer": "wfp_nut_sites-3crsxo",
      "url": "mapbox://ona.5r643v3p",
      "join": ["site_id", "site_id"]
    },
    "type": "circle",
    "minZoom": 5.5,
    "property": "perc_recovered",
    "radius-range": ['6', '9', '12', '15', '18', '21', '24', '27', '30'],
    "categories": {
      "shape": true,
      "breaks": "no",
      "color": ["#f03b20", "#feb24c", "#2ca25f"],
      "limit": [65, 75, 100],
      "label": ["below 65%", "65 - 75%", "above 75%"],
    },
    "aggregate": {
      "timeseries": {
        "field": "period"
      },
    },
    "popup": {
      "header": "site",
      "body": "<p style=text-align:left;><b>Percentage of recovered cases:</b> {{perc_recovered}}%<br><b>Total admissions:</b> {{total_admissions}}<br><b>Total discharges:</b> {{total_discharges}}<span style=float:right;>"
    },
    "visible": false,
    "credit": "WFP Nutrition Sites - MAM"
  }
};
