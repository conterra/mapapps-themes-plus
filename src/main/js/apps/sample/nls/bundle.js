/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define({
    root:
            /*
             * COPYRIGHT 2010-2011 con terra GmbH Germany
             */
                    ({
                        apptitle: "map.apps",
                        custominfo: {
                            imprint: {
                                title: "Imprint",
                                tooltip: "Show imprint",
                                content: "<p>This is a sample text.</p>"
                            }
                        },
                        agssearch: {
                            countries: {
                                title: "Countries in Europe (Search on ArcGIS for Server Map Service)",
                                description: "Search for countries in Europe",
                                placeHolder: "Country..."
                            }
                        },
                        basemaptoggler: {
                            ui: {
                                labelTitle: "Basemap"
                            }
                        },
                        bookmarks: {
                            ui: {
                                toolTitle: "Set spatial bookmarks",
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
                        resultcenter: {
                            fields: {
                                title: "Title"
                            }
                        },
                        templates: {
                            templates: {
                                seasons: {
                                    mapflow: {
                                        title: "Map Content"
                                    }
                                }
                            }
                        },
                        toolsets: {
                            whatdoyouwant: "What do you want to do?",
                            redliningTools: "Redlining",
                            redliningToolsTooltip: "Redlining-Tools",
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
                        }
                    })
            ,
            "de": true
        });