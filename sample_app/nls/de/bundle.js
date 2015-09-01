define(
        /*
         * COPYRIGHT 2010-2011 con terra GmbH Germany
         */
                ({
                    apptitle: "map.apps 3.0",
                    custominfo: {
                        imprint: {
                            title: "Impressum",
                            tooltip: "Zeige Impressum",
                            content: "<p>Verantwortlich f\u00fcr diese Seite ist:<br/><b>con terra</b> - Gesellschaft f\u00FCr Angewandte Informationstechnologie mbH<br /><br />Martin-Luther-King-Weg 24<br />48155 M\u00FCnster<br />Deutschland<br /><br />Ansprechpartner: Reinhard Abke<br /><br />Telefon +49 251 74745 2200<br />Telefax +49 251 596 880 91<br />info@conterra.de<br />http://www.conterra.de<br /><br />Vertretungsberechtigte Gesch\u00e4ftsf\u00fchrer der con terra:<br />Karl Wiesmann, Uwe K\u00F6nig<br /><br />UstId-Nr.: DE 162264061<br />Handelsregister: HRB 4149, Amtsgericht M\u00FCnster</p>"
                        }
                    },
                    agssearch: {
                        countries: {
                            title: "L\u00E4nder (Suche auf ArcGIS for Server Map Service)",
                            description: "Suche nach L\u00E4ndern",
                            placeHolder: "Land..."
                        },
                        states: {
                            title: "Staaten",
                            description: "Suche nach Bundesstaaten",
                            placeHolder: "Bundesstaat..."
                        },
                        countries_states: {
                            title: "L\u00E4nder und Staaten (Kombinierte AGS Suche)",
                            description: "Suche nach L\u00E4ndern und Bundesstaaten",
                            placeHolder: "L\u00E4nder und Bundesstaaten..."
                        }
                    },
                    basemaptoggler: {
                        ui: {
                            labelTitle: "Hintergrund"
                        }
                    },
                    bookmarks: {
                        ui: {
                            toolTitle: "R\u00E4umliche Lesezeichen nutzen",
                            clearButton: "Alle Lesezeichen l\u00F6schen",
                            deleteMessage: "Wollen Sie wirklich alle Lesezeichen l\u00F6schen?",
                            deleteTitle: "Sind Sie sicher?",
                            deleteWarning: "Diese Aktion kann nicht r\u00FCckg\u00E4ngig gemacht werden!"
                        },
                        predefined: {
                            europe: "Europa",
                            germany: "Deutschland"
                        }
                    },
                    contentviewer: {
                        regions: {
                            search: "Suche nach weiteren Informationen!"
                        },
                        welcome: {
                            title: "Themes PLUS Beispiele",
                            content: "<p>Dieses Beispiel stellt die neuen Farbsets aus Themes PLUS zur Verfügung. Die neuen Themes lassen sich ab jetzt auch über die In-App-Editing Funktionalitäten einstellen.</p>"
                        },
                        mdn: {
                            description: "Mehr Informationen über map.apps finden Sie im",
                            start: "map.apps Developer Network",
                            more: "Hier finden Sie au\u00DFerdem Links zu Kunden-Anwendungen die mit map.apps erstellt wurden."
                        }
                    },
                    geonames: {
                        stores: {
                            noValue: "No value",
                            postalcodes: {
                                name: "Postleitzahlen und St\u00E4dte (Geonames)",
                                description: "Plugin f\u00FCr den Geonames-Dienst f\u00FCr Postleitzahlen und St\u00E4dte.",
                                placeHolder: "Geben Sie eine Postleitzahl oder einen Ort ein...",
                                fields: {
                                    countryCode: "L\u00E4ndercode",
                                    lat: "Breitengrad",
                                    lng: "L\u00E4ngengrad",
                                    placeName: "Ortsname",
                                    postalCode: "Postleitzahl"
                                }
                            }
                        }
                    },
                    locator: {
                        stores: {
                            noValue: "No value",
                            locator: {
                                name: "Adressen und Orte (ESRI World Geocoding Service)",
                                description: "Plugin f\u00FCr den Esri GeocodeServer.",
                                placeHolder: "Adresse oder Ortsname..."
                            }
                        }
                    },
                    map: {
                        glasspane: {
                            settlements: {
                                tel: "Telefon",
                                link: "Homepage aufrufen"
                            }
                        },
                        base: {
                            topo: {
                                title: "Topographische Karte",
                                description: "Eine topographische Weltkarte"
                            },
                            aerial: {
                                title: "Luftbild",
                                description: "Luftbildaufnahmen der gesamten Welt"
                            },
                            streets: {
                                title: "Stra\u00DFen",
                                description: "Eine detaillierte Stra\u00DFenkarte"
                            }
                        },
                        operational: {
                            streets: {
                                title: "Stra\u00DFen"
                            },
                            bathingwater: {
                                title: "Badegew\u00E4sser"
                            },
                            regions: {
                                title: "Biogeographische Regionen"
                            },
                            natura2000: {
                                title: "Natura 2000 Schutzgebiete"
                            }
                        }
                    },
                    parametermanager: {
                        ui: {
                            encoderBtn: "Einen Link zur aktuellen Karte erzeugen",
                            encoderBtnTooltip: "Link Werkzeug",
                            sendMail: "E-Mail",
                            linkBoxTitle: "Link URL",
                            codeBoxTitle: "Code zum Einbinden in HTML",
                            mailBody: "${url}",
                            mailSubject: "Schau dir mal diese Karte an!"
                        }
                    },
                    resultcenter: {
                        fields: {
                            title: "Titel"
                        }
                    },
                    selection: {
                        infoservice: "Social-Media-Abfrage",
                        bathingwater_1: {
                            extent: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Rechteck)",
                            point: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Punkt)",
                            circle: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Kreis)",
                            freehand: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Freihand-Polygon)"
                        },
                        bathingwater_4: {
                            extent: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Rechteck)",
                            point: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Punkt)",
                            circle: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Kreis)",
                            freehand: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Freihand-Polygon)"
                        },
                        regions_0: {
                            extent: "Regionen ausw\u00e4hlen (Rechteck)",
                            point: "Regionen ausw\u00e4hlen (Punkt)",
                            circle: "Regionen ausw\u00e4hlen (Kreis)",
                            freehand: "Regionen ausw\u00e4hlen (Freihand-Polygon)"
                        },
                        composite_natura2000_2_6: {
                            extent: "Schutzgebiete ausw\u00e4hlen (Rechteck)",
                            point: "Schutzgebiete ausw\u00e4hlen (Punkt)",
                            circle: "Schutzgebiete ausw\u00e4hlen (Kreis)",
                            freehand: "Schutzgebiete ausw\u00e4hlen (Freihand-Polygon)"
                        }
                    },
                    templates: {
                        templates: {
                            seasons: {
                                mapflow: {
                                    title: "Karteninhalt"
                                },
                                agolmapFinder: {
                                    title: "ArcGIS Online Suche"
                                }
                            }
                        }
                    },
                    toolsets: {
                        whatdoyouwant: "Was m\u00f6chten Sie tun?",
                        redliningTools: "Zeichnen",
                        redliningToolsTooltip: "Zeichen- und Editier-Werkzeuge",
                        selectionTools: "Informationen aus der Karte abfragen",
                        selectionToolsTooltip: "Werkzeuge zur Selektion und Information",
                        navigationTools: "Navigationswerkzeuge nutzen",
                        navigationToolsTooltip: "Werkzeuge zur Kartennavigation",
                        mapviewTools: "Kartenwerkzeuge",
                        mapviewToolsTooltip: "Kartenwerkzeuge"
                    },
                    fields: {
                        id: "ID",
                        title: "Titel",
                        adapter: "Dienst",
                        type: "Typ"
                    },
                    locationfinder: {
                        title: "Standortsuche DE, CH, AT (LocationFinder REST service Esri CH)",
                        description: "Standortsuche für DE, CH, AT (LocationFinder REST service Esri CH)",
                        placeholder: "Ort, Adresse, POI..."
                    }
                })

                );