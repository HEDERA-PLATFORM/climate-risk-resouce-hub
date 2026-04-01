const DATASETS = [
  {
    id: "wri-aqueduct",
    title: "WRI Aqueduct Water Risk Framework",
    type: "Water risk indicators",
    provider: "World Resources Institute (WRI)",
    formats: ["GIS", "Raster", "CSV"],
    coverage: "Global",
    temporal: "Present & Future (2030, 2050, 2080)",
    access: "Open Access",
    tags: ["water stress", "water risk", "future projections"],
    description: "Uses 13 water risk indicators including baseline water stress, water depletion, and interannual variability. Employs PCR-GLOBWB 2 hydrological model for five key indicators and future projections based on CMIP6 climate scenarios (SSP3-RCP7.0, SSP1-RCP2.6, SSP5-RCP8.5).",
    variables: ["Baseline water stress", "Water depletion", "Interannual variability", "Seasonal variability", "Groundwater depletion"],
    links: [
      { label: "Data portal", url: "https://www.wri.org/data/aqueduct-water-risk-atlas" },
      { label: "Interactive map", url: "https://www.wri.org/applications/aqueduct/water-risk-atlas/" }
    ]
  },
  {
    id: "glosem",
    title: "Global Soil Erosion Modelling (GloSEM)",
    type: "Soil erosion",
    provider: "JRC / European Commission",
    formats: ["GeoTIFF", "Raster"],
    coverage: "Global / per country",
    temporal: "2001, 2012",
    access: "Request required",
    tags: ["soil", "erosion", "land degradation"],
    description: "Based on the Revised Universal Soil Loss Equation (RUSLE); maps individual erosion factors (R, K, C, LS) at 25 km resolution. Uses MODIS 250 m land cover, SRTM 90 m DEM, ISRIC SoilGrids 1 km. R-factor derived from 3,625 precipitation stations in 63 countries. Datasets need to be requested and may take time to receive.",
    variables: ["R-factor (rainfall erosivity)", "K-factor (soil erodibility)", "C-factor (land cover)", "LS-factor (slope length & steepness)"],
    links: [
      { label: "Dataset page", url: "https://esdac.jrc.ec.europa.eu/content/global-soil-erosion" },
      { label: "ESDAC datasets", url: "https://esdac.jrc.ec.europa.eu/resource-type/datasets" }
    ]
  },
  {
    id: "gaez-v4",
    title: "Global Agro-Ecological Zoning v4 (GAEZ v4)",
    type: "Crop suitability & land productivity",
    provider: "FAO / IIASA",
    formats: ["Raster", "GIS", "CSV"],
    coverage: "Global",
    temporal: "1961–2010 (historical) & Future (IPCC AR5 RCPs)",
    access: "Open Access",
    tags: ["agriculture", "crop suitability", "land use", "future projections"],
    description: "Uses the Agro-Ecological Zones (AEZ) framework with six key themes: land & water resources, agro-climatic potential, crop suitability & yield, actual production, and production gaps. Integrates historical data and future climate scenarios from IPCC AR5 RCPs. Supports SDG monitoring.",
    variables: ["Crop suitability index", "Agro-climatic yield", "Land degradation", "Water availability", "Production gaps"],
    links: [
      { label: "Data viewer", url: "https://gaez.fao.org/pages/data-viewer" },
      { label: "Model documentation", url: "https://pure.iiasa.ac.at/id/eprint/17175/" }
    ]
  },
  {
    id: "cmip6",
    title: "General Circulation Models (GCM) – CMIP6",
    type: "Climate projections",
    provider: "IPCC / CMIP6 (various institutes)",
    formats: ["NetCDF", "GIS"],
    coverage: "Global",
    temporal: "1850 – 2100 (projections)",
    access: "Open Access",
    tags: ["temperature", "precipitation", "future projections", "climate scenarios"],
    description: "Multi-model ensemble of climate projections underpinning the IPCC AR6. Provides historical simulations and future projections under shared socioeconomic pathways (SSPs). Used as input to most downstream climate risk datasets.",
    variables: ["Temperature (surface, upper atmosphere)", "Precipitation", "Sea level pressure", "Wind", "Humidity", "Sea surface temperature"],
    links: []
  },
  {
    id: "utci",
    title: "Heat / Cold Stress (UTCI)",
    type: "Thermal comfort index",
    provider: "WMO / research institutions",
    formats: ["Raster", "GIS"],
    coverage: "Global",
    temporal: "Historical & Future (modeled)",
    access: "Open Access",
    tags: ["heat stress", "thermal comfort", "health"],
    description: "Universal Thermal Climate Index (UTCI) measures physiological thermal stress on the human body. Combines air temperature, wind speed, humidity and radiation. Used for outdoor worker risk, urban heat island studies and public health planning.",
    variables: ["UTCI (°C equivalent)", "Heat stress category", "Cold stress category"],
    links: []
  },
  {
    id: "spei",
    title: "Drought Index (SPEI)",
    type: "Drought severity & duration",
    provider: "SPEI Database / CSIC",
    formats: ["Raster", "GIS"],
    coverage: "Global",
    temporal: "1901 – Present & Future",
    access: "Open Access",
    tags: ["drought", "precipitation deficit", "water balance"],
    description: "Standardised Precipitation-Evapotranspiration Index (SPEI) captures the multi-scalar nature of drought. Combines precipitation and temperature data to account for evapotranspiration demand. Available at multiple time scales (1–48 months).",
    variables: ["SPEI-1 (1-month)", "SPEI-3 (3-month)", "SPEI-6", "SPEI-12", "SPEI-24"],
    links: []
  },
  {
    id: "fwi",
    title: "Wildfire Risk (Fire Weather Index – FWI)",
    type: "Fire risk indicators",
    provider: "ECMWF / NASA / GFED",
    formats: ["Raster", "GIS"],
    coverage: "Global",
    temporal: "Historical & Near real-time",
    access: "Open Access",
    tags: ["wildfire", "fire risk", "fire weather"],
    description: "The Canadian Forest Fire Weather Index System quantifies fire danger based on weather conditions. Components include fuel moisture codes and fire behaviour indices. Used globally for operational fire danger forecasting and climate risk assessment.",
    variables: ["Fine Fuel Moisture Code (FFMC)", "Duff Moisture Code (DMC)", "Drought Code (DC)", "Initial Spread Index (ISI)", "Buildup Index (BUI)", "Fire Weather Index (FWI)"],
    links: []
  },
  {
    id: "storm-cyclones",
    title: "Tropical Storms / Cyclones (STORM Model)",
    type: "Cyclone tracks, intensity, frequency",
    provider: "University of Amsterdam",
    formats: ["GIS", "CSV"],
    coverage: "Global (tropical regions)",
    temporal: "Historical & Synthetic (10,000-year return periods)",
    access: "Open Access",
    tags: ["cyclone", "tropical storm", "wind", "coastal hazard"],
    description: "Synthetic tropical cyclone tracks generated from climate model output to produce statistically robust hazard estimates. Provides return period maps for maximum wind speeds and enables probabilistic risk assessment for coastal assets.",
    variables: ["Track coordinates", "Maximum sustained wind speed", "Central pressure", "Storm radius", "Return period wind speeds"],
    links: []
  },
  {
    id: "extreme-precip",
    title: "Heavy / Extreme Precipitation Events",
    type: "Extreme precipitation indicators",
    provider: "CMIP6 / GPCP / TRMM",
    formats: ["Raster", "GIS"],
    coverage: "Global",
    temporal: "1979 – Present & Future",
    access: "Open Access",
    tags: ["precipitation", "flood", "extreme events"],
    description: "Quantifies the fraction of total precipitation falling in heavy events (R95p, R99p indices). Derived from satellite observations (TRMM, GPM) and climate model ensembles. Key input for pluvial flood risk and infrastructure design standards.",
    variables: ["R95p (95th percentile exceedance)", "R99p (99th percentile)", "Rx1day (max 1-day precipitation)", "Rx5day (max 5-day precipitation)", "SDII (intensity index)"],
    links: []
  }
];
