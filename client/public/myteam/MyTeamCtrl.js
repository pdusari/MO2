(function() {
  'use strict';
  var select2Data = [];
  var select2DataObject = [];
  var searchField;
  var searchText;
  var convertedTree;
  var root;
  var node;
  var treeJson;
  var data = {
    "d": {
      "results": [{
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314931')"
        },
        "ID": "137267620666314931",
        "ROOT": 9543617,
        "LENGTH": 0,
        "BA_ID": 9543617,
        "PERIOD": "201604",
        "RANK": 1,
        "NO_OF_LEGS": 12,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9491084,
        "COUNTRY_NAME": "United States",
        "TITLE": "GOLD",
        "PV": "203.5",
        "name": "ArrayInterpolator",
        "OV": "5002.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314932')"
        },
        "ID": "137267620666314932",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 9561396,
        "PERIOD": "201604",
        "RANK": 1,
        "NO_OF_LEGS": 13,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "GOLD",
        "PV": "165.5",
        "OV": "638.75",
        "name": "ArrayInterpolator"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314933')"
        },
        "ID": "137267620666314933",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 9672557,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0",
        "name": "Array"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314934')"
        },
        "ID": "137267620666314934",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 9699271,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0",
        "name": "ArrayInterpolator"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314935')"
        },
        "ID": "137267620666314935",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 9700460,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0",
        "name": "ArrayInterpolator"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314936')"
        },
        "ID": "137267620666314936",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 9736890,
        "PERIOD": "201604",
        "RANK": 1,
        "NO_OF_LEGS": 19,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "GOLD",
        "PV": "128",
        "OV": "2061.25"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314937')"
        },
        "ID": "137267620666314937",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 9751743,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314938')"
        },
        "ID": "137267620666314938",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 9929678,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('137267620666314939')"
        },
        "ID": "137267620666314939",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 91046860,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149310')"
        },
        "ID": "1372676206663149310",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 91055779,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149311')"
        },
        "ID": "1372676206663149311",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 91580835,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149312')"
        },
        "ID": "1372676206663149312",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 92370275,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149313')"
        },
        "ID": "1372676206663149313",
        "ROOT": 9543617,
        "LENGTH": 1,
        "BA_ID": 92553767,
        "PERIOD": "201604",
        "RANK": 1,
        "NO_OF_LEGS": 14,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 9543617,
        "COUNTRY_NAME": "United States",
        "TITLE": "GOLD",
        "PV": "256",
        "OV": "2007"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149314')"
        },
        "ID": "1372676206663149314",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91075436,
        "PERIOD": "201604",
        "RANK": 1,
        "NO_OF_LEGS": 7,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "GOLD",
        "PV": "137.75",
        "OV": "547.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149315')"
        },
        "ID": "1372676206663149315",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91092852,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 1,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "20",
        "OV": "20"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149316')"
        },
        "ID": "1372676206663149316",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91093069,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92553767,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149317')"
        },
        "ID": "1372676206663149317",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91121216,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 6,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "105",
        "OV": "105"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149318')"
        },
        "ID": "1372676206663149318",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91161833,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9561396,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149319')"
        },
        "ID": "1372676206663149319",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91228439,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9561396,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149320')"
        },
        "ID": "1372676206663149320",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91259223,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92553767,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149321')"
        },
        "ID": "1372676206663149321",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91445719,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92553767,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149322')"
        },
        "ID": "1372676206663149322",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91572181,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92553767,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149323')"
        },
        "ID": "1372676206663149323",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91572182,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92553767,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149324')"
        },
        "ID": "1372676206663149324",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91572605,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149325')"
        },
        "ID": "1372676206663149325",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91592578,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 5,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "125",
        "OV": "125"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149326')"
        },
        "ID": "1372676206663149326",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91596800,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 2,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "104",
        "OV": "104"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149327')"
        },
        "ID": "1372676206663149327",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91604362,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "344",
        "OV": "344"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149328')"
        },
        "ID": "1372676206663149328",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91649269,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "229.5",
        "OV": "229.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149329')"
        },
        "ID": "1372676206663149329",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91805486,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "4",
        "OV": "4"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149330')"
        },
        "ID": "1372676206663149330",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 91950846,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 3,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "169.75",
        "OV": "189.75"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149331')"
        },
        "ID": "1372676206663149331",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92007009,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149332')"
        },
        "ID": "1372676206663149332",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92016044,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 1,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "146",
        "OV": "146"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149333')"
        },
        "ID": "1372676206663149333",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92020831,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149334')"
        },
        "ID": "1372676206663149334",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92040749,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149335')"
        },
        "ID": "1372676206663149335",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92077291,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149336')"
        },
        "ID": "1372676206663149336",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92257369,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149337')"
        },
        "ID": "1372676206663149337",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92290648,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149338')"
        },
        "ID": "1372676206663149338",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92351284,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149339')"
        },
        "ID": "1372676206663149339",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92357145,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 5,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "4",
        "OV": "357.75"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149340')"
        },
        "ID": "1372676206663149340",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92363154,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "Mexico",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149341')"
        },
        "ID": "1372676206663149341",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92466543,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149342')"
        },
        "ID": "1372676206663149342",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92625116,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149343')"
        },
        "ID": "1372676206663149343",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92735015,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "43",
        "OV": "43"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149344')"
        },
        "ID": "1372676206663149344",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92789277,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149345')"
        },
        "ID": "1372676206663149345",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92790228,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "53",
        "OV": "53"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149346')"
        },
        "ID": "1372676206663149346",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92797624,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "32",
        "OV": "32"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149347')"
        },
        "ID": "1372676206663149347",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92846457,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149348')"
        },
        "ID": "1372676206663149348",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92873200,
        "PERIOD": "201604",
        "RANK": 1,
        "NO_OF_LEGS": 2,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "GOLD",
        "PV": "230.5",
        "OV": "669"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149349')"
        },
        "ID": "1372676206663149349",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92885108,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "303.75",
        "OV": "303.75"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149350')"
        },
        "ID": "1372676206663149350",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92941236,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149351')"
        },
        "ID": "1372676206663149351",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92961292,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149352')"
        },
        "ID": "1372676206663149352",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92988819,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "10",
        "OV": "10"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149353')"
        },
        "ID": "1372676206663149353",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 92993208,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "109.75",
        "OV": "109.75"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149354')"
        },
        "ID": "1372676206663149354",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 93021149,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149355')"
        },
        "ID": "1372676206663149355",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 93126800,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9561396,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149356')"
        },
        "ID": "1372676206663149356",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 93148016,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92370275,
        "LEADER_ID": 92370275,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "92",
        "OV": "92"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149357')"
        },
        "ID": "1372676206663149357",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 93203794,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "110",
        "OV": "110"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149358')"
        },
        "ID": "1372676206663149358",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 93238343,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "400",
        "OV": "400"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149359')"
        },
        "ID": "1372676206663149359",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 93253383,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 9736890,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "110",
        "OV": "110"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149360')"
        },
        "ID": "1372676206663149360",
        "ROOT": 9543617,
        "LENGTH": 2,
        "BA_ID": 93253606,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92553767,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "110",
        "OV": "110"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149361')"
        },
        "ID": "1372676206663149361",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91128189,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91121216,
        "LEADER_ID": 91121216,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149362')"
        },
        "ID": "1372676206663149362",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91133442,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91093069,
        "LEADER_ID": 91093069,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149363')"
        },
        "ID": "1372676206663149363",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91302482,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91121216,
        "LEADER_ID": 91121216,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149364')"
        },
        "ID": "1372676206663149364",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91338621,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91075436,
        "LEADER_ID": 91075436,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149365')"
        },
        "ID": "1372676206663149365",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91369144,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91075436,
        "LEADER_ID": 91075436,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149366')"
        },
        "ID": "1372676206663149366",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91399801,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91121216,
        "LEADER_ID": 91121216,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149367')"
        },
        "ID": "1372676206663149367",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91469870,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91259223,
        "LEADER_ID": 91259223,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149368')"
        },
        "ID": "1372676206663149368",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91486096,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91075436,
        "LEADER_ID": 91075436,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149369')"
        },
        "ID": "1372676206663149369",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91596714,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91121216,
        "LEADER_ID": 91121216,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149370')"
        },
        "ID": "1372676206663149370",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91623627,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91121216,
        "LEADER_ID": 91121216,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149371')"
        },
        "ID": "1372676206663149371",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91656218,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91093069,
        "LEADER_ID": 91093069,
        "COUNTRY_NAME": "Canada",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149372')"
        },
        "ID": "1372676206663149372",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91766468,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 2,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 91075436,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "79",
        "OV": "135.75"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149373')"
        },
        "ID": "1372676206663149373",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91773380,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 91592578,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149374')"
        },
        "ID": "1372676206663149374",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91832106,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 91075436,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "167.5",
        "OV": "167.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149375')"
        },
        "ID": "1372676206663149375",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91868839,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 91075436,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "95",
        "OV": "95"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149376')"
        },
        "ID": "1372676206663149376",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91954451,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91950846,
        "LEADER_ID": 91950846,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149377')"
        },
        "ID": "1372676206663149377",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91957189,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91950846,
        "LEADER_ID": 91950846,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149378')"
        },
        "ID": "1372676206663149378",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91993324,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91592578,
        "LEADER_ID": 91592578,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149379')"
        },
        "ID": "1372676206663149379",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 91994480,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91592578,
        "LEADER_ID": 91592578,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149380')"
        },
        "ID": "1372676206663149380",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92002120,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91950846,
        "LEADER_ID": 91950846,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "20",
        "OV": "20"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149381')"
        },
        "ID": "1372676206663149381",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92024963,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 92020831,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "34.5",
        "OV": "34.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149382')"
        },
        "ID": "1372676206663149382",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92038590,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92016044,
        "LEADER_ID": 92016044,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149383')"
        },
        "ID": "1372676206663149383",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92071884,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91121216,
        "LEADER_ID": 91121216,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149384')"
        },
        "ID": "1372676206663149384",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92215994,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91075436,
        "LEADER_ID": 91075436,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "11.5",
        "OV": "11.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149385')"
        },
        "ID": "1372676206663149385",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92363142,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92357145,
        "LEADER_ID": 92357145,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "19",
        "OV": "19"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149386')"
        },
        "ID": "1372676206663149386",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92459287,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91596800,
        "LEADER_ID": 91596800,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149387')"
        },
        "ID": "1372676206663149387",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92499819,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92357145,
        "LEADER_ID": 92357145,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149388')"
        },
        "ID": "1372676206663149388",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92500170,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 92357145,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "154.25",
        "OV": "154.25"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149389')"
        },
        "ID": "1372676206663149389",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92508209,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 1,
        "ENROLLER_ID": 92357145,
        "LEADER_ID": 92357145,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "78.5",
        "OV": "78.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149390')"
        },
        "ID": "1372676206663149390",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92509605,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 92357145,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "102",
        "OV": "102"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149391')"
        },
        "ID": "1372676206663149391",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92567884,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 91592578,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149392')"
        },
        "ID": "1372676206663149392",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92578498,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 91592578,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149393')"
        },
        "ID": "1372676206663149393",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92588608,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91092852,
        "LEADER_ID": 91092852,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149394')"
        },
        "ID": "1372676206663149394",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92628842,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91596800,
        "LEADER_ID": 91596800,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149395')"
        },
        "ID": "1372676206663149395",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 92978148,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 1,
        "ENROLLER_ID": 92873200,
        "LEADER_ID": 92873200,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "4",
        "OV": "141"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149396')"
        },
        "ID": "1372676206663149396",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 93031486,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 93021149,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149397')"
        },
        "ID": "1372676206663149397",
        "ROOT": 9543617,
        "LENGTH": 3,
        "BA_ID": 93193626,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92873200,
        "LEADER_ID": 92873200,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "297.5",
        "OV": "297.5"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149398')"
        },
        "ID": "1372676206663149398",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 91400452,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91399801,
        "LEADER_ID": 91399801,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('1372676206663149399')"
        },
        "ID": "1372676206663149399",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 91475036,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91399801,
        "LEADER_ID": 91399801,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493100')"
        },
        "ID": "13726762066631493100",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 91823357,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91773380,
        "LEADER_ID": 91773380,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493101')"
        },
        "ID": "13726762066631493101",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 91892700,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 2,
        "ENROLLER_ID": 91766468,
        "LEADER_ID": 91766468,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "56.75",
        "OV": "56.75"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493102')"
        },
        "ID": "13726762066631493102",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 92009119,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91128189,
        "LEADER_ID": 91128189,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493103')"
        },
        "ID": "13726762066631493103",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 92607650,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9543617,
        "LEADER_ID": 92508209,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493104')"
        },
        "ID": "13726762066631493104",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 92774610,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 9491084,
        "LEADER_ID": 91766468,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493105')"
        },
        "ID": "13726762066631493105",
        "ROOT": 9543617,
        "LENGTH": 4,
        "BA_ID": 93137944,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 92978148,
        "LEADER_ID": 92978148,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "137",
        "OV": "137"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493106')"
        },
        "ID": "13726762066631493106",
        "ROOT": 9543617,
        "LENGTH": 5,
        "BA_ID": 92093748,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91892700,
        "LEADER_ID": 91892700,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493107')"
        },
        "ID": "13726762066631493107",
        "ROOT": 9543617,
        "LENGTH": 5,
        "BA_ID": 92432023,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91892700,
        "LEADER_ID": 91892700,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }, {
        "__metadata": {
          "type": "MO2.UI.uiservices.mo2service.MyTeamType",
          "uri": "https://j3pb7d382812.us1.hana.ondemand.com:443/MO2/UI/uiservices/mo2service.xsodata/MyTeam('13726762066631493108')"
        },
        "ID": "13726762066631493108",
        "ROOT": 9543617,
        "LENGTH": 5,
        "BA_ID": 92796427,
        "PERIOD": "201604",
        "RANK": 0,
        "NO_OF_LEGS": 0,
        "ENROLLER_ID": 91475036,
        "LEADER_ID": 91475036,
        "COUNTRY_NAME": "United States",
        "TITLE": "NO RANK",
        "PV": "0",
        "OV": "0"
      }]
    }
  }
  angular.module('MyTeamCtrl', []).controller('MyTeamController', MyTeamcontroller);

  function MyTeamcontroller($scope) {
    var convertedTree = _createD3Data(data.d.results);
    _loadD3Tree(convertedTree);

    function _createD3Data(data) {
      var dictionary = _readDictionary(data);
      var treeDetails = _readTree(data);
      return _generateTree(treeDetails, dictionary);
    }

    function _readDictionary(dictionaryResponseData) {
      var dictionary = {};
      for(var counter = 0; counter < dictionaryResponseData.length; counter++) {
        var detail = dictionaryResponseData[counter];
        dictionary[detail['BA_ID']] = {
          baid: detail['BA_ID'],
          country: detail['COUNTRY_NAME'],
          pv: detail['PV'],
          rank: detail['TITLE'],
          ov: detail['OV']
        };
      }
      return dictionary;
    }

    function _readTree(responseData) {
      var data = [];
      for(var counter = 0; counter < responseData.length; counter++) {
        var detail = responseData[counter];
        data.push({
          parentNode: detail['LEADER_ID'],
          node: detail['BA_ID'],
          root: detail['ROOT'],
          level: detail['LENGTH']
        });
      }
      data.sort(_compareNodeByLevel);
      return data;
    }

    function _compareNodeByLevel(a, b) {
      if(a.level > b.level) return -1;
      if(a.level < b.level) return 1;
      return 0;
    }

    function _getNodesAtLevel(nodes, level) {
      var nodesAtLevel = [];
      for(var counter = 0; counter < nodes.length; counter++) {
        var detail = nodes[counter];
        if(detail.level === level) {
          nodesAtLevel.push(detail);
        }
      }
      return nodesAtLevel;
    }

    function _getChildren(parentNode, probableChildren) {
      var children = [];
      //console.log("Seraching for children for :",parentNode);
      //console.log("Seraching for children in :",probableChildren);
      for(var counter = 0; counter < probableChildren.length; counter++) {
        var treeNode = probableChildren[counter];
        if(treeNode.parentNode === parentNode) {
          children.push(treeNode);
        }
      }
      return children;
    }

    function _generateTree(data, dictionary) {
      var maxLevel = data[0].level;
      var currentLevel = maxLevel;
      var treeNodesAtPreviousLevel = [];
      var treeNodesAtCurrentLevel = [];
      while(currentLevel >= 0) {
        //console.log("--------------------------Level:",currentLevel);
        treeNodesAtCurrentLevel = [];
        var nodesAtCurrentLevel = _getNodesAtLevel(data, currentLevel);
        if(treeNodesAtPreviousLevel.length === 0) {
          for(var counter = 0; counter < nodesAtCurrentLevel.length; counter++) {
            var node = nodesAtCurrentLevel[counter];
            var treeNode = {
              name: node.node.toString(),
              size: Math.floor(Math.random() * 1000000000),
              parentNode: node.parentNode.toString()
            };
            treeNode.data = dictionary[treeNode.name];
            treeNodesAtCurrentLevel.push(treeNode);
          }
        } else {
          for(var counter = 0; counter < nodesAtCurrentLevel.length; counter++) {
            var node = nodesAtCurrentLevel[counter];
            var treeNode = {
              name: node.node.toString(),
              parentNode: node.parentNode.toString()
            };
            var children = _getChildren(treeNode.name, treeNodesAtPreviousLevel);
            if(children.length > 0) {
              treeNode.children = children;
            } else {
              treeNode.size = Math.floor(Math.random() * 1000000000);
            }
            treeNode.data = dictionary[treeNode.name];
            treeNodesAtCurrentLevel.push(treeNode);
            //console.log("Pushing node with children",treeNode);
          }
        }
        treeNodesAtPreviousLevel = treeNodesAtCurrentLevel;
        currentLevel--;
      }
      //console.log(JSON.stringify(treeNodesAtCurrentLevel, null, 4));
      return treeNodesAtCurrentLevel[0];
    }
    //===============================================
    function _loadD3Tree(treeData) {
      var test;
      // Calculate total nodes, max label length
      var totalNodes = 0;
      var maxLabelLength = 0;
      // variables for drag/drop
      var selectedNode = null;
      var draggingNode = null;
      // panning variables
      var panSpeed = 200;
      var panBoundary = 20; // Within 20px from edges will pan when dragging.
      // Misc. variables
      var i = 0;
      var duration = 750;
      var root;
      var nodes;
      var dragStarted;
      var panTimer;
      var links;
      var domNode;
      var svgGroup;
      // size of the diagram
      var viewerWidth = $('.container').width();
      var viewerHeight = 500;
      var that = this;
      var tree = d3.layout.tree().size([viewerHeight, viewerWidth]);
      // define a d3 diagonal projection for use by the node paths later on.
      var diagonal = d3.svg.diagonal().projection(function(d) {
        //+MO2 Change - flipped to vertical again
        return [d.x, d.y];
        //-MO2 Change - flipped to vertical again
      });
      // A recursive helper function for performing some setup by walking through all nodes
      function visit(parent, visitFn, childrenFn) {
        if(!parent) return;
        visitFn(parent);
        var children = childrenFn(parent);
        if(children) {
          var count = children.length;
          for(var i = 0; i < count; i++) {
            visit(children[i], visitFn, childrenFn);
          }
        }
      }
      // Call visit function to establish maxLabelLength
      visit(treeData, function(d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);
      }, function(d) {
        return d.children && d.children.length > 0 ? d.children : null;
      });
      // sort the tree according to the node names
      function sortTree() {
        tree.sort(function(a, b) {
          return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
      }
      // Sort the tree initially incase the JSON isn't in a sorted order.
      sortTree();
      // TODO: Pan function, can be better implemented.
      function pan(domNode, direction) {
        var speed = panSpeed;
        if(panTimer) {
          clearTimeout(panTimer);
          var translateCoords = d3.transform(svgGroup.attr("transform"));
          if(direction == 'left' || direction == 'right') {
            var translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
            var translateY = translateCoords.translate[1];
          } else if(direction == 'up' || direction == 'down') {
            translateX = translateCoords.translate[0];
            translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
          }
          var scaleX = translateCoords.scale[0];
          var scaleY = translateCoords.scale[1];
          var scale = zoomListener.scale();
          svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
          d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
          zoomListener.scale(zoomListener.scale());
          zoomListener.translate([translateX, translateY]);
          panTimer = setTimeout(function() {
            pan(domNode, speed, direction);
          }, 50);
        }
      }
      // Define the zoom function for the zoomable tree
      function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
      }
      // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
      var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

      function initiateDrag(d, domNode) {
        draggingNode = d;
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
        d3.select(domNode).attr('class', 'node activeDrag');
        svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
          if(a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
          else return -1; // a is the hovered element, bring "a" to the front
        });
        // if nodes has children, remove the links and nodes
        if(nodes.length > 1) {
          // remove link paths
          var links = tree.links(nodes);
          var nodePaths = svgGroup.selectAll("path.link").data(links, function(d) {
            return d.target.id;
          }).remove();
          // remove child nodes
          var nodesExit = svgGroup.selectAll("g.node").data(nodes, function(d) {
            return d.id;
          }).filter(function(d, i) {
            if(d.id == draggingNode.id) {
              return false;
            }
            return true;
          }).remove();
        }
        // remove parent link
        var parentLink = tree.links(tree.nodes(draggingNode.parent));
        svgGroup.selectAll('path.link').filter(function(d, i) {
          if(d.target.id == draggingNode.id) {
            return true;
          }
          return false;
        }).remove();
        dragStarted = null;
      }

      function select2DataCollectName(d) {
        if(d.children) d.children.forEach(select2DataCollectName);
        else if(d._children) d._children.forEach(select2DataCollectName);
        select2Data.push(d.name);
      }
      // for searching tree//
      //===============================================
      function searchTree(d) {
        if(d.children) d.children.forEach(searchTree);
        else if(d._children) d._children.forEach(searchTree);
        var searchFieldValue = eval(searchField);
        if(searchFieldValue && searchFieldValue.match(searchText)) {
          // Walk parent chain
          var ancestors = [];
          var parent = d;
          while(typeof(parent) !== "undefined") {
            ancestors.push(parent);
            //console.log(parent);
            parent.class = "found";
            parent = parent.parent;
          }
          //console.log(ancestors);
        }
      }
      $("#searchName").on("select2-selecting", function(e) {
          clearAll(root);
          expandAll(root);
          _update(root);
          searchField = "d.name";
          searchText = e.object.text;
          searchTree(root);
          root.children.forEach(collapseAllNotFound);
          _update(root);
        })
        //search ends
        // define the baseSvg, attaching a class for styling and the zoomListener
      var baseSvg = d3.select("#tree-container").append("svg").attr("width", viewerWidth).attr("height", viewerHeight).attr("class", "overlay").call(zoomListener);
      var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function(d) {
        var message = "<table>";
        message += "<tr><td>Advocate ID :</strong></td><td>" + d.data.baid + "</td></tr>";
        message += "<tr><td>Country :</strong></td><td>" + d.data.country + "</td></tr>";
        message += "<tr><td>Rank :</strong></td><td>" + d.data.rank + "</td></tr>";
        message += "<tr><td>PV :</strong></td><td>" + d.data.pv + "</td></tr>";
        message += "<tr><td>OV :</strong></td><td>" + d.data.ov + "</td></tr>";
        message += "</table>";
        return message;
      })
      baseSvg.call(tip);
      // Define the drag listeners for drag/drop behaviour of nodes.
      var dragListener = d3.behavior.drag().on("dragstart", function(d) {
        if(d == root) {
          return;
        }
        dragStarted = true;
        nodes = tree.nodes(d);
        d3.event.sourceEvent.stopPropagation();
        // it's important that we suppress the mouseover event on the node being dragged.
        // Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
      }).on("drag", function(d) {
        if(d == root) {
          return;
        }
        if(dragStarted) {
          domNode = this;
          initiateDrag(d, domNode);
        }
        // get coords of mouseEvent relative to svg container to allow for panning
        var relCoords = d3.mouse($('svg').get(0));
        if(relCoords[0] < panBoundary) {
          panTimer = true;
          pan(this, 'left');
        } else if(relCoords[0] > ($('svg').width() - panBoundary)) {
          panTimer = true;
          pan(this, 'right');
        } else if(relCoords[1] < panBoundary) {
          panTimer = true;
          pan(this, 'up');
        } else if(relCoords[1] > ($('svg').height() - panBoundary)) {
          panTimer = true;
          pan(this, 'down');
        } else {
          try {
            clearTimeout(panTimer);
          } catch(e) {
            jQuery.sap.log.error(e);
          }
        }
        d.x0 += d3.event.dx;
        d.y0 += d3.event.dy;
        var node = d3.select(this);
        //+MO2 Change - flipped to vertical again
        node.attr("transform", "translate(" + d.x0 + "," + d.y0 + ")");
        //-MO2 Change - flipped to vertical again
        updateTempConnector();
      }).on("dragend", function(d) {
        if(d == root) {
          return;
        }
        domNode = this;
        if(selectedNode) {
          // now remove the element from the parent, and insert it into the new elements children
          var index = draggingNode.parent.children.indexOf(draggingNode);
          if(index > -1) {
            draggingNode.parent.children.splice(index, 1);
          }
          if(typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
            if(typeof selectedNode.children !== 'undefined') {
              selectedNode.children.push(draggingNode);
            } else {
              selectedNode._children.push(draggingNode);
            }
          } else {
            selectedNode.children = [];
            selectedNode.children.push(draggingNode);
          }
          // Make sure that the node being added to is expanded so user can see added node is correctly moved
          expand(selectedNode);
          sortTree();
          endDrag();
        } else {
          endDrag();
        }
      });

      function endDrag() {
        selectedNode = null;
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
        d3.select(domNode).attr('class', 'node');
        // now restore the mouseover event or we won't be able to drag a 2nd time
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
        updateTempConnector();
        if(draggingNode !== null) {
          _update(root);
          centerNode(draggingNode);
          draggingNode = null;
        }
      }
      // Helper functions for collapsing and expanding nodes.
      function collapse(d) {
        if(d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
        }
      }

      function collapseAllNotFound(d) {
        if(d.children) {
          if(d.class !== "found") {
            d._children = d.children;
            d._children.forEach(collapseAllNotFound);
            d.children = null;
          } else d.children.forEach(collapseAllNotFound);
        }
      }

      function expandAll(d) {
        if(d._children) {
          d.children = d._children;
          d.children.forEach(expandAll);
          d._children = null;
        } else if(d.children) d.children.forEach(expandAll);
      }

      function clearAll(d) {
        d.class = "";
        if(d.children) d.children.forEach(clearAll);
        else if(d._children) d._children.forEach(clearAll);
      }

      function type(d) {
        var message = "<table>";
        message += "<tr><td>Advocate ID</strong></td><td>" + d.data.baid + "</td></tr>";
        message += "<tr><td>Country</strong></td><td>" + d.data.country + "</td></tr>";
        message += "<tr><td>Rank</strong></td><td>" + d.data.rank + "</td></tr>";
        message += "<tr><td>PV</strong></td><td>" + d.data.pv + "</td></tr>";
        message += "<tr><td>OV</strong></td><td>" + d.data.ov + "</td></tr>";
        message += "</table>";
        return message;
      }

      function expand(d) {
        if(d._children) {
          d.children = d._children;
          d.children.forEach(expand);
          d._children = null;
        }
      }
      var overCircle = function(d) {
        selectedNode = d;
        updateTempConnector();
      };
      var outCircle = function(d) {
        selectedNode = null;
        updateTempConnector();
      };
      // Function to update the temporary connector indicating dragging affiliation
      var updateTempConnector = function() {
        var data = [];
        if(draggingNode !== null && selectedNode !== null) {
          // have to flip the source coordinates since we did this for the existing connectors on the original tree
          //+MO2 Change - flipped to vertical again
          data = [{
            source: {
              x: selectedNode.x0,
              y: selectedNode.y0
            },
            target: {
              x: draggingNode.x0,
              y: draggingNode.y0
            }
          }];
          //-MO2 Change - flipped to vertical again
        }
        var link = svgGroup.selectAll(".templink").data(data);
        link.enter().append("path").attr("class", "templink").attr("d", d3.svg.diagonal()).attr('pointer-events', 'none');
        link.attr("d", d3.svg.diagonal());
        link.exit().remove();
      };
      // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.
      function centerNode(source) {
        var scale = zoomListener.scale();
        var x = -source.x0;
        var y = -source.y0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        var g = d3.select("#orgTree");
        if(g !== undefined) {
          g.transition().duration(duration).attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
          zoomListener.scale(scale);
          zoomListener.translate([x, y]);
        }
      }
      // Toggle children function
      function toggleChildren(d) {
        if(d.children) {
          d._children = d.children;
          d.children = null;
        } else if(d._children) {
          d.children = d._children;
          d._children = null;
        }
        return d;
      }
      // Toggle children on click.
      function click(d) {
        if(d3.event.defaultPrevented) return; // click suppressed
        d = toggleChildren(d);
        _update(d);
        centerNode(d);
      }
  function animateSearch(selection, time) {
        selection.forEach(function(d) {
          if(d.class === "found") {
            selection.transition().duration(time).style("stroke-width", "2px").transition().style("stroke-width", "1px");
          }
        });
      }

      function _update(source) {
        if(source === null || source === undefined) {
          source = root;
        }
        var levelWidth = [1];
        var childCount = function(level, n) {
          if(n.children && n.children.length > 0) {
            if(levelWidth.length <= level + 1) {
              levelWidth.push(0);
            }
            levelWidth[level + 1] += n.children.length;
            n.children.forEach(function(d) {
              childCount(level + 1, d);
            });
          }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 50; // 25 pixels per line
        tree = tree.size([newHeight, viewerWidth]);
        // Compute the new tree layout.
        nodes = tree.nodes(root).reverse();
        links = tree.links(nodes);
        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function(d) {
          d.y = (d.depth * (maxLabelLength * 10)); //maxLabelLength * 10px
        });
        // Update the nodes�
        var node = svgGroup.selectAll("g.node").data(nodes, function(d) {
          return d.id || (d.id = ++i);
        });
        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g").call(dragListener).attr("class", "node").attr("transform", function(d) {
          return "translate(" + source.x0 + "," + source.y0 + ")";
        }).on('click', click).on('mouseover', tip.show).on('mouseout', tip.hide);
        //+MO2 - Text hidden
        nodeEnter.append("text").attr("y", function(d) {
          return d.depth === 0 ? 0 : 15;
        }).attr('font-family', 'FontAwesome').attr("x", -6).attr('class', 'nodeText').text(function(d) {
          return "\uf183"; //d.name;
        }).style("fill-opacity", 0);
        nodeEnter.append("text").attr("y", -30).attr("x", -5).text(function(d) {
          if(d.depth === 0) {
            return "Me";
          }
        }).attr("class", "nodeLevel1").style("fill-opacity", 1);
        //-MO2 - text hidden
        // phantom node to give us mouseover in a radius around it
        nodeEnter.append("circle").attr('class', 'ghostCircle').attr("r", 30).attr("opacity", 0.2) // change this to zero to hide the target area
          .style("fill", "red").attr('pointer-events', 'mouseover').on("mouseover", function(node) {
            overCircle(node);
          }).on("mouseout", function(node) {
            outCircle(node);
          });
        //+MO2 Change - flipped to vertical again
        // Transition nodes to their new position.
        var nodeUpdate = node.transition().duration(duration).attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
        //+MO2 Change - flipped to vertical again
        // Fade the text in
        nodeUpdate.select("text").style("fill", function(d) {
          if(d.depth === 0) {
            return "rgb(0, 103, 158)";
          }
          if(d.depth > 0 && (d._children || d.children)) {
            return "rgb(233, 30, 99)";
          } else if(d.depth > 0 && !(d.children || d._children)) {
            return "rgb(198, 30, 233)";
          }
        }).style("fill-opacity", 1).style("stroke", function(d) {
          if(d.class === "found") {
            if(d.depth === 0) {
              return "rgb(0, 103, 158)";
            }
            if(d.depth > 0 && (d._children || d.children)) {
              return "rgb(233, 30, 99)";
            } else if(d.depth > 0 && !(d.children || d._children)) {
              return "rgb(198, 30, 233)";
            }
          }
        }).call(animateSearch, 15000);
        // Transition exiting nodes to the parent's new position.
        //+MO2 Change - flipped to vertical again
        var nodeExit = node.exit().transition().duration(duration).attr("transform", function(d) {
          return "translate(" + source.x + "," + source.y + ")";
        }).remove();
        // Update the links�
        var link = svgGroup.selectAll("path.link").data(links, function(d) {
          return d.target.id;
        });
        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g").attr("class", "link").attr("d", function(d) {
          var o = {
            x: source.x0,
            y: source.y0
          };
          return diagonal({
            source: o,
            target: o
          });
        });
        // Transition links to their new position.
        link.transition().duration(duration).attr("d", diagonal).style("stroke", function(d) {
          if(d.target.class === "found") {
            return "#b51616";
          }
        }).call(animateSearch, 15000);
        // Transition exiting nodes to the parent's new position.
        link.exit().transition().duration(duration).attr("d", function(d) {
          var o = {
            x: source.x,
            y: source.y
          };
          return diagonal({
            source: o,
            target: o
          });
        }).remove();
        // Stash the old positions for transition.
        nodes.forEach(function(d) {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      };
      // Append a group which holds all nodes and which the zoom Listener can act upon.
      svgGroup = baseSvg.append("g");
      svgGroup.attr("id", "orgTree");
      //svgGroup.call(tip);
      // Define the root
      root = treeData;
      root.x0 = viewerHeight / 2;
      root.y0 = 0;
      root.children.forEach(collapse);
      select2Data = [];
      select2DataCollectName(root);
      select2DataObject = [];
      select2Data.sort(function(a, b) {
          if(a > b) return 1; // sort
          if(a < b) return -1;
          return 0;
        }).filter(function(item, i, ar) {
          return ar.indexOf(item) === i;
        }) // remove duplicate items
        .filter(function(item, i, ar) {
          select2DataObject.push({
            "id": i,
            "text": item
          });
        });
      select2Data.sort(function(a, b) {
          if(a > b) return 1; // sort
          if(a < b) return -1;
          return 0;
        }).filter(function(item, i, ar) {
          return ar.indexOf(item) === i;
        }) // remove duplicate items
        .filter(function(item, i, ar) {
          select2DataObject.push({
            "id": i,
            "text": item
          });
        });
      $("#searchName").select2({
        data: select2DataObject,
        containerCssClass: "search"
      });
      // Layout the tree initially and center on the root node.
      _update(root);
      centerNode(root);
    }
  }
})();
