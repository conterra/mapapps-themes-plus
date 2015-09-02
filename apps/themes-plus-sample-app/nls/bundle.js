define({
    root:
            /*
             * COPYRIGHT 2010-2011 con terra GmbH Germany
             */
                    ({
                        apptitle: "map.apps 3.0",
                        custominfo: {
                            imprint: {
                                title: "Imprint",
                                tooltip: "Show imprint",
                                content: "<p>Responsible for this website is:<br/><b>con terra</b> - Gesellschaft f\u00FCr Angewandte Informationstechnologie mbH<br /><br />Martin-Luther-King-Weg 24<br />48155 Muenster<br />Germany<br /><br />fon +49 251 74745 2200<br />fax +49 251 74745 2111<br />info@conterra.de<br />http://www.conterra.de<br /><br />Managing directors of the con terra GmbH are:<br />Karl Wiesmann, Uwe K\u00F6nig<br />value added tax identification number: DE 162264061<br />commercial register: HRB 4149, country court Muenster</p>"
                            }
                        },
                        agssearch: {
                            countries: {
                                title: "Countries (Search on ArcGIS for Server Map Service)",
                                description: "Search for countries",
                                placeHolder: "Country..."
                            },
                            states: {
                                title: "States",
                                description: "Search for states",
                                placeHolder: "State..."
                            },
                            countries_states: {
                                title: "Countries and States (Combined AGS search)",
                                description: "Search for countries and states",
                                placeHolder: "Countries and states..."
                            }
                        },
                        basemaptoggler: {
                            ui: {
                                labelTitle: "Basemap"
                            }
                        },
                        bookmarks: {
                            ui: {
                                toolTitle: "Use spatial bookmarks",
                                clearButton: "Clear all bookmarks",
                                deleteMessage: "Do you really want to clear all bookmarks?",
                                deleteTitle: "Are you sure?",
                                deleteWarning: "This cannot be undone!"
                            },
                            predefined: {
                                europe: "Europe",
                                germany: "Germany"
                            }
                        },
                        contentviewer: {
                            regions: {
                                search: "Search for more information!"
                            },
                            welcome: {
                                title: "Themes PLUS Sample",
                                content: "<p>This sample includes the new theme-sets. These themes can be selected via the new in-app editing functionalities.</p>"
                            },
                            mdn: {
                                description: "More information about map.apps can be found in the",
                                start: "map.apps Developer Network",
                                more: "Here you will also find links to customer solutions based on map.apps."
                            }
                        },
                        geonames: {
                            stores: {
                                noValue: "Kein Wert",
                                postalcodes: {
                                    name: "Postalcodes and cities (Geonames)",
                                    description: "Plugin for Geonames-Service for postalcodes and cities.",
                                    placeHolder: "Enter a postalcodes or city...",
                                    fields: {
                                        countryCode: "Country code",
                                        lat: "Latitude",
                                        lng: "Longitute",
                                        placeName: "Place name",
                                        postalCode: "Postal code"
                                    }
                                }
                            }
                        },
                        locator: {
                            stores: {
                                noValue: "Kein Wert",
                                locator: {
                                    name: "Addresses and Places (ESRI World Geocoding Service)",
                                    description: "Plugin for the ESRI GeocodeServer.",
                                    placeHolder: "Address or place..."
                                }
                            }
                        },
                        map: {
                            glasspane: {
                                settlements: {
                                    tel: "Telephone",
                                    link: "Open Homepage"
                                }
                            },
                            base: {
                                "topo": {
                                    title: "Topo",
                                    description: "A topographic world map"
                                },
                                "aerial": {
                                    title: "Aerial",
                                    description: "Aerial views of the whole world"
                                },
                                "streets": {
                                    title: "Streets",
                                    description: "A detailed world street map"
                                }
                            },
                            operational: {
                                "streets": {
                                    title: "Streets"
                                },
                                bathingwater: {
                                    title: "Bathing Water"
                                },
                                regions: {
                                    title: "Biogeographical Regions"
                                },
                                natura2000: {
                                    title: "Natura 2000 Protected Sites"
                                }
                            }
                        },
                        parametermanager: {
                            ui: {
                                encoderBtn: "Create a link to the current map",
                                encoderBtnTooltip: "Link tool",
                                sendMail: "EMail",
                                linkBoxTitle: "Link URL",
                                codeBoxTitle: "Code to embed in HTML",
                                mailBody: "${url}",
                                mailSubject: "Check out this map!"
                            }
                        },
                        resultcenter: {
                            fields: {
                                title: "Title"
                            }
                        },
                        selection: {
                            infoservice: "Query Social Media",
                            rectangle: "Select Countries (Rectangle)",
                            point: "Select States (Point)",
                            circle: "Select Countries (Circle)",
                            freehand: "Select Countries (Freehand Polygon)",
                            bathingwater_1: {
                                extent: "Select countries to show bathingwater quality data (Rectangle)",
                                point: "Select countries to show bathingwater quality data (Point)",
                                circle: "Select countries to show bathingwater quality data (Circle)",
                                freehand: "Select countries to show bathingwater quality data (Freehand Polygon)"
                            },
                            bathingwater_4: {
                                extent: "Select locations to show bathingwater quality data (Rectangle)",
                                point: "Select locations to show bathingwater quality data (Point)",
                                circle: "Select locations to show bathingwater quality data (Circle)",
                                freehand: "Select locations to show bathingwater quality data (Freehand Polygon)"
                            },
                            regions_0: {
                                extent: "Select regions (Rectangle)",
                                point: "Select regions (Point)",
                                circle: "Select regions (Circle)",
                                freehand: "Select regions (Freehand Polygon)"
                            },
                            composite_natura2000_2_6: {
                                extent: "Select protected sites (Rectangle)",
                                point: "Select protected sites (Point)",
                                circle: "Select protected sites (Circle)",
                                freehand: "Select protected sites (Freehand Polygon)"
                            }
                        },
                        templates: {
                            templates: {
                                seasons: {
                                    mapflow: {
                                        title: "Map Content"
                                    },
                                    agolmapFinder: {
                                        title: "ArcGIS Online Search"
                                    }
                                }
                            }
                        },
                        toolsets: {
                            whatdoyouwant: "What do you want to do?",
                            redliningTools: "Redlining",
                            redliningToolsTooltip: "Redlining-Tools",
                            selectionTools: "Query information from the map",
                            selectionToolsTooltip: "Tools for Selection and Information",
                            navigationTools: "Use navigation tools",
                            navigationToolsTooltip: "Tools for map navigation",
                            mapviewTools: "Map Tools",
                            mapviewToolsTooltip: "Map Tools"
                        },
                        fields: {
                            id: "ID",
                            title: "Title",
                            adapter: "Service",
                            type: "Type"
                        },
                        locationfinder: {
                            title: "Location Finder DE, CH, AT (LocationFinder REST service Esri CH)",
                            description: "Location Finder for DE, CH, AT (LocationFinder REST service Esri CH)",
                            placeholder: "Place, Address, POI..."
                        }
                    })
            ,
            "de": true
        });